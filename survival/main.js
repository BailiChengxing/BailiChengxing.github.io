(function () {
  "use strict";

  var startScreen = document.getElementById("start-screen");
  var startButton = document.getElementById("start-button");
  var loadingScreen = document.getElementById("loading-screen");
  var loadingDetail = document.getElementById("loading-detail");
  var errorScreen = document.getElementById("error-screen");
  var errorMessage = document.getElementById("error-message");
  var gameCanvas = document.getElementById("GameCanvas");
  var started = false;
  var keyboardSceneHooked = false;
  var pressedKeys = new Set();
  var userAgent = navigator.userAgent || "";
  var platform = navigator.platform || "";
  var coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var iPadDesktopMode = /Macintosh|Mac OS X/i.test(userAgent) && navigator.maxTouchPoints > 1;
  var mobileBrowser =
    /Android|iPhone|iPad|iPod|Mobile|HarmonyOS|Windows Phone|Opera Mini|IEMobile/i.test(userAgent) ||
    iPadDesktopMode ||
    (coarsePointer && navigator.maxTouchPoints > 0 && window.innerWidth < 1200);
  var desktopInputEnabled =
    !mobileBrowser && (finePointer || /Win|Mac|Linux/.test(platform));

  document.documentElement.dataset.inputMode = desktopInputEnabled ? "desktop" : "mobile";

  function movementAngle(keys, up, down, left, right) {
    var x = (keys.has(right) ? 1 : 0) - (keys.has(left) ? 1 : 0);
    var y = (keys.has(up) ? 1 : 0) - (keys.has(down) ? 1 : 0);
    if (x === 0 && y === 0) {
      return null;
    }
    return (Math.atan2(x, -y) * 180 / Math.PI + 360) % 360;
  }

  function hideTouchJoysticks() {
    if (!desktopInputEnabled || !window.cc || !cc.director) {
      return;
    }
    var scene = cc.director.getScene();
    if (!scene) {
      return;
    }

    function visit(node) {
      var joystick = node.getComponent && node.getComponent("lunPan");
      if (joystick) {
        joystick.enabled = false;
        node.active = false;
      }
      node.children.slice().forEach(visit);
    }

    visit(scene);
  }

  function getPlayerComponent(index) {
    if (!window.cc || !cc.director) {
      return null;
    }
    var node = window.gameScene && window.gameScene.roleArr
      ? window.gameScene.roleArr[index]
      : null;
    return node && node.isValid ? node.getComponent("player") : null;
  }

  function applyKeyboardMovement() {
    if (!desktopInputEnabled || !started) {
      return;
    }

    var single = window.isSingle === true;
    if (single) {
      var singlePlayer = getPlayerComponent(0);
      if (singlePlayer) {
        singlePlayer.angleMove = movementAngle(
          pressedKeys,
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight"
        );
      }
      return;
    }

    var playerOne = getPlayerComponent(0);
    var playerTwo = getPlayerComponent(1);
    if (playerOne) {
      playerOne.angleMove = movementAngle(
        pressedKeys,
        "KeyW",
        "KeyS",
        "KeyA",
        "KeyD"
      );
    }
    if (playerTwo) {
      playerTwo.angleMove = movementAngle(
        pressedKeys,
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight"
      );
    }
  }

  function clearKeyboardMovement() {
    pressedKeys.clear();
    [0, 1].forEach(function (index) {
      var player = getPlayerComponent(index);
      if (player) {
        player.angleMove = null;
      }
    });
  }

  function handleKeyDown(event) {
    if (!desktopInputEnabled) {
      return;
    }
    if (event.code.indexOf("Arrow") === 0) {
      event.preventDefault();
    }
    pressedKeys.add(event.code);
    applyKeyboardMovement();
  }

  function handleKeyUp(event) {
    if (!desktopInputEnabled) {
      return;
    }
    if (event.code.indexOf("Arrow") === 0) {
      event.preventDefault();
    }
    pressedKeys.delete(event.code);
    applyKeyboardMovement();
  }

  function handleSceneLaunch() {
    hideTouchJoysticks();
    applyKeyboardMovement();
  }

  function showError(error) {
    var message = error && error.stack ? error.stack : String(error || "未知错误");
    console.error(error);
    loadingScreen.classList.add("is-hidden");
    startScreen.classList.add("is-hidden");
    errorMessage.textContent = message;
    errorScreen.classList.remove("is-hidden");
  }

  function setLoadingDetail(text) {
    loadingDetail.textContent = text;
  }

  function beginGame() {
    if (started) {
      return;
    }
    started = true;
    startScreen.classList.add("is-hidden");
    loadingScreen.classList.remove("is-hidden");
    gameCanvas.focus();

    try {
      window.boot();
      if (desktopInputEnabled && !keyboardSceneHooked) {
        keyboardSceneHooked = true;
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, handleSceneLaunch);
      }
    } catch (error) {
      showError(error);
    }
  }

  startButton.addEventListener("click", beginGame);
  window.addEventListener("keydown", handleKeyDown, true);
  window.addEventListener("keyup", handleKeyUp, true);
  window.addEventListener("blur", clearKeyboardMovement);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      clearKeyboardMovement();
    }
  });
  window.addEventListener("error", function (event) {
    if (started) {
      showError(event.error || event.message);
    }
  });
  window.addEventListener("unhandledrejection", function (event) {
    if (started) {
      showError(event.reason);
    }
  });

  window.showWebGameError = showError;
  window.setWebGameLoadingDetail = setLoadingDetail;
})();

window.boot = function () {
  var settings = window._CCSettings;
  window._CCSettings = undefined;
  var onProgress = null;
  var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES;
  var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL;
  var MAIN = cc.AssetManager.BuiltinBundleName.MAIN;
  var loadingScreen = document.getElementById("loading-screen");
  var splash = document.getElementById("splash");
  var progressBar = splash.querySelector(".progress-bar span");

  function setLoadingDisplay() {
    onProgress = function (finish, total) {
      var percent = total > 0 ? Math.min(100, Math.max(0, 100 * finish / total)) : 0;
      progressBar.style.width = percent.toFixed(2) + "%";
      window.setWebGameLoadingDetail("已加载 " + Math.round(percent) + "%");
    };
    progressBar.style.width = "0%";
    cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
      loadingScreen.classList.add("is-hidden");
    });
  }

  var onStart = function () {
    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);
    setLoadingDisplay();

    if (cc.sys.isMobile) {
      cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
      cc.view.enableAutoFullScreen(true);
    }

    if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
      cc.assetManager.downloader.maxConcurrency = 2;
      cc.assetManager.downloader.maxRequestsPerFrame = 2;
    }

    var launchScene = settings.launchScene;
    var bundle = cc.assetManager.bundles.find(function (item) {
      return item.getSceneInfo(launchScene);
    });

    if (!bundle) {
      window.showWebGameError(new Error("找不到启动场景 Bundle：" + launchScene));
      return;
    }

    window.setWebGameLoadingDetail("正在加载启动场景");
    bundle.loadScene(launchScene, null, onProgress, function (error, scene) {
      if (error) {
        window.showWebGameError(error);
        return;
      }
      cc.director.runSceneImmediate(scene);
      document.getElementById("GameCanvas").style.visibility = "visible";
      document.getElementById("GameDiv").style.backgroundImage = "";
      console.log("Success to load scene: " + launchScene);
    });
  };

  var option = {
    id: "GameCanvas",
    debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
    showFPS: settings.debug,
    frameRate: 60,
    groupList: settings.groupList,
    collisionMatrix: settings.collisionMatrix
  };

  cc.macro.CLEANUP_IMAGE_CACHE = true;
  cc.assetManager.init({
    bundleVers: settings.bundleVers,
    remoteBundles: settings.remoteBundles,
    server: settings.server
  });

  var bundleRoot = [INTERNAL];
  if (settings.hasResourcesBundle) {
    bundleRoot.push(RESOURCES);
  }

  function afterScripts() {
    var remaining = bundleRoot.length;
    if (remaining === 0) {
      loadMainBundle();
      return;
    }

    bundleRoot.forEach(function (name) {
      window.setWebGameLoadingDetail("正在加载 " + name + " Bundle");
      cc.assetManager.loadBundle(name, function (error) {
        if (error) {
          window.showWebGameError(error);
          return;
        }
        remaining -= 1;
        if (remaining === 0) {
          loadMainBundle();
        }
      });
    });
  }

  function loadMainBundle() {
    window.setWebGameLoadingDetail("正在载入游戏脚本");
    cc.assetManager.loadBundle(MAIN, function (error) {
      if (error) {
        window.showWebGameError(error);
        return;
      }
      cc.game.run(option, onStart);
    });
  }

  if (settings.jsList && settings.jsList.length > 0) {
    var scripts = settings.jsList.map(function (item) {
      return "src/" + item;
    });
    cc.assetManager.loadScript(scripts, function (error) {
      if (error) {
        window.showWebGameError(error);
        return;
      }
      afterScripts();
    });
  } else {
    afterScripts();
  }
};
