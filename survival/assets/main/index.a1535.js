window.__require = function e(t, i, a) {
function o(s, c) {
if (!i[s]) {
if (!t[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!t[l]) {
var r = "function" == typeof __require && __require;
if (!c && r) return r(l, !0);
if (n) return n(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var d = i[s] = {
exports: {}
};
t[s][0].call(d.exports, function(e) {
return o(t[s][1][e] || e);
}, d, d.exports, e, t, i, a);
}
return i[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < a.length; s++) o(a[s]);
return o;
}({
AD_android: [ function(e, t) {
"use strict";
cc._RF.push(t, "8cd23M+hbhJ8oyTy/mDAHNB", "AD_android");
window.AD_android = {
shiPin: function() {
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shiPin", "(Ljava/lang/String;)V", "视频");
},
showIcon: function() {
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showIcon", "(Ljava/lang/String;)V", "iconAD");
},
hideIcon: function() {
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideIcon", "(Ljava/lang/String;)V", "iconAD");
},
chaPing: function() {
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "chaPing", "(Ljava/lang/String;)V", "插屏");
},
chaPingVideo: function() {
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "chaPingVideo", "(Ljava/lang/String;)V", "插屏视频");
},
showBanner: function() {
if (cc.sys.os == cc.sys.OS_ANDROID) {
console.log("调用安卓方法插屏 ");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "(Ljava/lang/String;)V", "showBanner");
}
},
hideBanner: function() {
if (cc.sys.os == cc.sys.OS_ANDROID) {
console.log("调用安卓方法插屏 ");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "(Ljava/lang/String;)V", "hideBanner");
}
},
moreGame: function() {
console.log("超休闲 ");
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "moreGame", "(Ljava/lang/String;)V", JSON.stringify("超休闲"));
},
checkPermission: function() {
console.log("checkPermission ");
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "checkPermission", "(Ljava/lang/String;)V", "申请权限");
},
shake: function() {
console.log("手机震动 ");
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "shake", "(Ljava/lang/String;)V", "zhendong");
},
yinSi: function() {
console.log("yinSi ");
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "yinSi", "(Ljava/lang/String;)V", "yinSi");
}
};
cc._RF.pop();
}, {} ],
AD_oppo: [ function(e, t) {
"use strict";
cc._RF.push(t, "81108y9fpJPNomEyc7PGvhq", "AD_oppo");
window.AD_oppo = {
bannerID_normal: "1478856",
chaPing_TT: "1479072",
videoID_TT: "1479073",
chaPing_banner: "",
timeOut: null,
autoDestroyDuration: 7,
switchOn: function() {
AD.wuDianRate = 20;
},
shiPin: function() {
if (AD.chanelName == AD.chanelName1) {
null != AD_oppo.videoAd_Revive && AD_oppo.videoAd_Revive.destroy();
AD_oppo.videoAd_Revive = qg.createRewardedVideoAd({
adUnitId: AD_oppo.videoID_TT
});
AD_oppo.videoAd_Revive.load();
AD_oppo.videoAd_Revive.onLoad(function() {
console.log("激励视频加载成功");
AD_oppo.videoAd_Revive.show();
AD_oppo.videoAd_Revive.offLoad();
});
AD_oppo.videoAd_Revive.onVideoStart(function() {
AD_oppo.videoAd_Revive.offVideoStart();
console.log("激励视频 开始播放");
});
AD_oppo.videoAd_Revive.onError(function(e) {
AD_oppo.videoAd_Revive.offError();
qg.showToast({
title: "暂无广告，请稍后重试",
duration: 2e3
});
console.log("激励视频 加载错误:  " + JSON.stringify(e));
});
AD_oppo.videoAd_Revive.onClose(function(e) {
console.log("视频关闭  结果是   " + JSON.stringify(e));
if (e.isEnded) {
console.log("复活 激励视频广告完成，发放奖励");
AD.reward();
AD_oppo.videoAd_Revive.offClose();
} else {
AD_oppo.videoAd_Revive.offClose();
console.log("激励视频广告取消关闭，不发放奖励");
}
});
} else AD.reward();
},
chaPing: function() {
if (!(AD.wuDianRate <= 0)) {
var e = !1, t = qg.getSystemInfoSync().windowHeight, i = qg.getSystemInfoSync().windowWidth;
if (t > i) var a = t / 2 - (i - 100) / 32 * 9, o = i - 100; else o = t - 100, a = 50;
var n = qg.createCustomAd({
adUnitId: AD_oppo.chaPing_TT,
style: {
top: a,
width: o
}
});
n.show().then(function() {
console.log("插屏 show success");
e = !0;
if (AD_oppo.autoDestroyDuration > 0) {
if (AD_oppo.timeOut) {
clearTimeout(AD_oppo.timeOut);
AD_oppo.timeOut = null;
}
AD_oppo.timeOut = setTimeout(function() {
e && n.destroy();
AD_oppo.timeOut = null;
}, 1e3 * AD_oppo.autoDestroyDuration);
}
}).catch(function(e) {
console.log("show fail with:" + e.errCode + "," + e.errMsg);
});
n.onError(function(e) {
console.log("模板插屏: " + JSON.stringify(e));
n.offError();
});
n.onHide(function() {
console.log("customAd广告隐藏");
n.offHide();
e = !1;
if (AD_oppo.timeOut) {
clearTimeout(AD_oppo.timeOut);
AD_oppo.timeOut = null;
}
});
}
},
chaPingBanner: null,
showBanner: function() {
AD.wuDianRate <= 0 || this.showBannerNormal();
},
hideBanner: function() {
AD.wuDianRate <= 0 || this.hideBannerNormal();
},
bannerAd: null,
bannerIsOK: !1,
showBannerNormal: function() {
if (AD_oppo.bannerIsOK) {
console.log("普通banner  只调用展示");
AD_oppo.bannerAd.show();
} else {
if (AD_oppo.bannerAd) {
AD_oppo.bannerAd.destroy();
AD_oppo.bannerAd = null;
}
console.log("普通banner  生成");
var e = qg.getSystemInfoSync().screenHeight, t = qg.getSystemInfoSync().screenWidth;
AD_oppo.bannerAd = qg.createBannerAd({
adUnitId: AD_oppo.bannerID_normal,
style: {
top: e,
left: 0,
width: t,
height: 300
}
});
AD_oppo.bannerAd.onError(function(e) {
console.log("banner 加载失败 " + JSON.stringify(e));
AD_oppo.bannerAd.offError();
});
AD_oppo.bannerAd.onLoad(function() {
AD_oppo.bannerIsOK = !0;
console.log("banner 加载成功  AD_oppo.bannerIsOK" + AD_oppo.bannerIsOK);
});
AD_oppo.bannerAd.onHide(function() {
console.log("banner 广告隐藏");
});
AD_oppo.bannerAd.show();
}
},
hideBannerNormal: function() {
AD_oppo.bannerIsOK && AD_oppo.bannerAd.hide();
},
addDesktop: function() {
AD.chanelName == AD.chanelName1 && qg.hasShortcutInstalled({
success: function(e) {
0 == e && qg.installShortcut({
success: function() {
cc.director.emit("桌面添加成功");
},
fail: function(e) {
console.log("桌面添加  失败 err" + JSON.stringify(e));
cc.director.emit("桌面添加失败");
},
complete: function() {}
});
},
fail: function() {},
complete: function() {}
});
}
};
cc._RF.pop();
}, {} ],
AD_vivo: [ function(e, t) {
"use strict";
cc._RF.push(t, "a9d27t2PyRPK7vOamg/cVMh", "AD_vivo");
window.AD_vivo = {
bannerID_TT: "7bad6d96de5d4df39b8c880a22d525da",
chaPing_TT: "52e4b4d31a994262b8e3573ecf25e406",
videoID_TT: "38e3c09178ee46758ec1cb5a7de8ccac",
box_id: "e838b6e082714c608d62f3f7c2c9a437",
banner: null,
couldShowChaPing: !0,
chaPingInterval: 5,
switchOn: function() {
AD.wuDianRate = 20;
AD_vivo.showBox();
setTimeout(function() {
AD_vivo.showBox();
}, 1e4);
},
shiPin: function() {
if (AD.chanelName == AD.chanelName1) {
var e = qg.createRewardedVideoAd({
posId: AD_vivo.videoID_TT
});
e.onError(function(e) {
cc.audioEngine.resumeAll();
console.log("激励视频广告加载失败", e);
qg.showToast({
message: "暂无广告"
});
});
e.onLoad(function(t) {
console.log("激励视频广告加载完成-onload触发", JSON.stringify(t));
cc.audioEngine.pauseAll();
e.show().then(function() {
console.log("激励视频广告展示完成");
}).catch(function(e) {
cc.audioEngine.resumeAll();
console.log("激励视频广告展示失败", JSON.stringify(e));
qg.showToast({
message: "暂无广告"
});
switch (e.errCode) {
case -3:
console.log("激励广告加载失败---调用太频繁", JSON.stringify(e));
break;

case -4:
console.log("激励广告加载失败--- 一分钟内不能重复加载", JSON.stringify(e));
break;

case 30008:
break;

default:
console.log("激励广告展示失败");
}
});
});
e.onClose(function(e) {
cc.audioEngine.resumeAll();
console.log("视频广告关闭回调");
if (e && e.isEnded) {
console.log("正常播放结束，可以下发游戏奖励");
AD.reward();
} else console.log("播放中途退出，不下发游戏奖励");
});
} else AD.reward();
},
initBanner: function() {
if (AD_vivo.chanelName == AD_vivo.chanelName1) {
var e = qg.getSystemInfoSync();
e.screenHeight, e.screenWidth;
AD_vivo.banner = qg.createBannerAd({
posId: AD_vivo.bannerID_TT
});
AD_vivo.banner.onResize(function() {
console.log("改变size");
});
AD_vivo.banner.onLoad(function() {});
AD_vivo.banner.onError(function(e) {
console.log("banner错误 " + JSON.stringify(e));
});
}
},
showBanner: function() {
console.log("banner 调用  showBanner");
AD.chanelName == AD.chanelName1 && this.showBannerNormal();
},
showBannerNormal: function() {
null == AD_vivo.banner && AD_vivo.initBanner();
AD_vivo.banner.show().then(function() {
console.log("banner 广告显示成功");
}).catch(function(e) {
console.log("banner 展示错误", JSON.stringify(e));
});
},
hideBanner: function() {
if (AD.chanelName == AD.chanelName1 && null != AD_vivo.banner) {
console.log("banner 隐藏");
AD_vivo.banner.destroy();
AD_vivo.banner = null;
AD_vivo.initBanner();
}
},
chaPing: function() {
var e = this;
if (AD.chanelName == AD.chanelName1 && 0 != this.couldShowChaPing) {
setTimeout(function() {
e.couldShowChaPing = !0;
}, 1e3 * this.chaPingInterval);
this.couldShowChaPing = !1;
var t = qg.getSystemInfoSync(), i = t.screenHeight, a = t.screenWidth, o = 0;
a > i && (o = (a - 720) / 2);
console.log("当前屏幕高度：" + i);
var n = qg.createCustomAd({
posId: AD_vivo.chaPing_TT,
style: {
top: (i - 630) / 2,
left: o
}
});
n.onError(function(e) {
console.log("原生模板广告加载失败", e);
});
n.show().then(function() {
console.log("原生模板广告展示完成");
cc.director.emit("vivo插屏显示", !0);
}).catch(function(e) {
console.log("原生模板广告展示失败", JSON.stringify(e));
});
n.onClose(function() {
console.log("原生模板广告关闭");
cc.director.emit("vivo插屏显示", !1);
});
}
},
showBox: function() {
if (AD.chanelName == AD.chanelName1 && "vivo" == AD.chanelName1) if (qg.createBoxPortalAd) {
if (AD_vivo.boxPortalAd) return;
AD_vivo.boxPortalAd = qg.createBoxPortalAd({
posId: AD_vivo.box_id,
marginTop: 50
});
AD_vivo.boxPortalAd.onError(function(e) {
console.log("盒子九宫格广告加载失败", e);
});
AD_vivo.boxPortalAd.onClose(function() {
console.log("盒子九宫格广告close");
AD_vivo.boxPortalAd = null;
AD_vivo.boxPortalAd.isDestroyed || AD_vivo.boxPortalAd.show();
});
AD_vivo.boxPortalAd.show().then(function() {
console.log("盒子九宫格广告show success");
});
} else console.log("暂不支持互推盒子相关 API");
},
hideBox: function() {
if (null != AD_vivo.boxPortalAd) {
AD_vivo.boxPortalAd.isDestroyed = !0;
AD_vivo.boxPortalAd.destroy();
AD_vivo.boxPortalAd = null;
}
},
addDesktop: function() {
AD.chanelName == AD.chanelName1 && qg.hasShortcutInstalled({
success: function(e) {
0 == e && qg.installShortcut({
success: function() {},
fail: function() {},
complete: function() {}
});
},
fail: function() {},
complete: function() {}
});
},
random: function(e, t) {
return Math.floor(Math.random() * (t - e + 1)) + e;
}
};
cc._RF.pop();
}, {} ],
AD: [ function(e, t) {
"use strict";
cc._RF.push(t, "91b9bCmHmdJDaXYmukKV2uH", "AD");
window.AD = {
chanelName: "offline",
chanelName1: "offline",
delayTime: 0,
wuDianRate: 0,
gameOverTimes: 0,
showAD: function(e, t) {
t && console.log("激励视频广告:  " + t.name);
this.callN = t;
this.callerN = e;
for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) a[o - 2] = arguments[o];
this.dataN = a;
this.reward();
},
reward: function() {
var e = this;
setTimeout(function() {
AD.callN && AD.callerN && AD.callerN.call(AD.callN, e.dataN);
}, 100);
},
shiPin: function() {
if (this.chanelName == this.chanelName1) switch (this.chanelName) {
case "android":
AD_android.shiPin();
break;

case "touTiao":
AD_TouTiao.shiPin();
break;

case "vivo":
AD_vivo.shiPin();
break;

case "oppo":
AD_oppo.shiPin();
break;

case "huaWei":
AD_HuaWei.shiPin();
break;

case "QQ":
AD_QQ.shiPin();
break;

case "WX":
AD_WX.shiPin();
}
},
chaPing: function() {
if (this.chanelName == this.chanelName1) switch (this.chanelName) {
case "android":
AD_android.chaPing();
break;

case "touTiao":
AD_TouTiao.chaPing();
break;

case "vivo":
AD.wuDianRate > 0 ? AD_vivo.chaPing() : (arguments.length <= 0 ? void 0 : arguments[0]) && AD_vivo.chaPing();
break;

case "oppo":
AD_oppo.chaPing();
break;

case "huaWei":
AD_HuaWei.chaPing();
break;

case "QQ":
AD_QQ.chaPing();
break;

case "WX":
AD_WX.chaPing();
}
},
showBanner: function() {
if (this.chanelName == this.chanelName1) switch (this.chanelName) {
case "android":
AD_android.showBanner();
break;

case "touTiao":
AD_TouTiao.showBanner();
break;

case "vivo":
AD_vivo.showBanner();
break;

case "oppo":
AD_oppo.showBanner();
break;

case "huaWei":
AD_HuaWei.chaPing();
break;

case "QQ":
AD_QQ.showBanner();
break;

case "WX":
AD_WX.showBanner();
break;

case "4399Box":
AD_4399Box.showBanner();
}
},
hideBanner: function() {
if (this.chanelName == this.chanelName1) switch (this.chanelName) {
case "android":
AD_android.hideBanner();
break;

case "touTiao":
AD_TouTiao.hideBanner();
break;

case "vivo":
AD_vivo.hideBanner();
break;

case "huaWei":
AD_HuaWei.hideBanner();
break;

case "QQ":
AD_QQ.hideBanner();
break;

case "WX":
AD_WX.hideBanner();
break;

case "4399Box":
AD_4399Box.hideBanner();
break;

case "oppo":
AD_oppo.hideBanner();
}
},
moreGame: function() {
switch (this.chanelName) {
case "android":
AD_android.moreGame();
break;

case "WX":
AD_WX.shareAndCallback("");
break;

case "oppo":
AD_oppo.showBox();
}
},
gameOver: function() {
if (this.chanelName == this.chanelName1) {
this.gameOverTimes++;
switch (this.chanelName) {
case "android":
AD_android.chaPingVideo();
break;

case "touTiao":
case "vivo":
case "oppo":
break;

case "huaWei":
this.gameOverTimes % 2 == 0 && AD_HuaWei.addDesktop();
break;

case "QQ":
AD.wuDianRate > 0 && this.showAD(null, null);
break;

case "4399Box":
this.gameOverTimes % 2 == 0 && AD_4399Box.chaPing();
break;

case "BD":
AD.wuDianRate > 0 && this.gameOverTimes % 2 == 0 && this.showAD(null, null);
}
}
},
addToDesk: function() {
if (this.chanelName == this.chanelName1) switch (this.chanelName) {
case "vivo":
AD_vivo.addDesktop();
break;

case "huaWei":
AD_HuaWei.addDesktop();
break;

case "QQ":
AD_QQ.saveToDesktopQQ();
break;

case "oppo":
AD_oppo.addDesktop();
break;

case "touTiao":
AD_TouTiao.addDesktop();
}
},
couldZDJ: function() {
return Tools.random(1, 100) < this.wuDianRate;
},
isBigScreen: function() {
console.log("是长屏吗  " + cc.winSize.width / cc.winSize.height);
return cc.winSize.width / cc.winSize.height > 1.8;
},
switchZDJ: function() {
AD.delayTime = 1;
}
};
cc._RF.pop();
}, {} ],
LabelUtils2: [ function(e, t) {
"use strict";
cc._RF.push(t, "9db3aWlIsRAWbH0v5mh9kM0", "LabelUtils2");
var i = cc.Class({
extends: cc.Component,
properties: {
_ISDEBUG: !1,
_RELEASE_BASE_URL: "https://label.tianyitop.com/label2",
_DEBUG_BASE_URL: "http://192.168.0.242:19800/label2",
_labelName: "",
location: "",
labels: null,
_retryTime: 0,
isSpecial: !1,
_retryTimeLocationList: 0,
locationList: [],
initLabelSuccess: !1,
initIsSpecial: !1
},
getBaseUrl: function() {
return this._ISDEBUG ? this._DEBUG_BASE_URL : this._RELEASE_BASE_URL;
},
statics: {
instance: null
},
onLoad: function() {
this.canRefresh = !1;
},
getLabel: function(e) {
if (!e || !this.initLabelSuccess || !this.initIsSpecial) return !1;
if (this.isSpecial) {
if (this.labels.special.length > 0) {
for (var t = 0, i = this.labels.special.length; t < i; t++) {
var a = this.labels.special[t];
if (a.switchname == e) return 1 == a.switchvalue;
}
return !1;
}
return !1;
}
if (this.labels.common.length > 0) {
for (var o = 0, n = this.labels.common.length; o < n; o++) {
var s = this.labels.common[o];
if (s.switchname == e) return 1 == s.switchvalue;
}
return !1;
}
return !1;
},
initLabel: function(e) {
e && e.length > 0 && (this._labelName = e);
this._fetchLabel();
this._fetchLocationList();
},
refreshLabelConfig: function() {
this.canRefresh && this._fetchLabel();
},
_initIsSpecial: function() {
this.isSpecial = !1;
var e = 0;
if (this.location && this.initLabelSuccess && this.locationList) {
for (var t = 0; t < this.locationList.length; t++) if (this.location == this.locationList[t].name) {
e = this.locationList[t].id;
break;
}
if (this.labels.blocked) {
var i = this.labels.blocked.split(",");
if (i) for (var a = 0; a < i.length; a++) if (e == i[a]) {
this.isSpecial = !0;
break;
}
}
}
this.initIsSpecial = !0;
},
_fetchLocationList: function() {},
_fetchLabel: function() {
return;
},
sendPostRequest: function() {},
_httpGetsLocation: function(e, t) {
var i = cc.loader.getXMLHttpRequest();
i.onreadystatechange = function() {
if (4 === i.readyState) if (i.status >= 200 && i.status <= 304) {
var e = i.responseText;
t(e);
} else t(-1);
};
i.open("GET", e, !0);
cc.sys.isNative && i.setRequestHeader("Accept-Encoding", "gzip,deflate");
i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
i.setRequestHeader("Host", "pv.sohu.com");
i.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36");
i.setRequestHeader("Accept", "*/*");
i.setRequestHeader("Connection", "keep-alive");
i.setRequestHeader("X-Requested-With", "XMLHttpRequest");
i.timeout = 4e3;
var a = !1;
i.ontimeout = function() {
if (!a) {
a = !0;
t(-1);
}
};
i.onerror = function() {
if (!a) {
a = !0;
t(-1);
}
};
i.send();
},
_httpGets: function(e, t, i) {
var a = cc.loader.getXMLHttpRequest();
a.onreadystatechange = function() {
cc.log(" label location XML_HTTP_REQUEST onreadystatechange ");
if (4 === a.readyState) if (a.status >= 200 && a.status <= 304) {
var e = a.responseText;
i(e);
} else i(-1);
};
a.open("GET", e, !0);
cc.sys.isNative && a.setRequestHeader("Accept-Encoding", "gzip,deflate");
a.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36");
a.setRequestHeader("Accept", "*/*");
a.setRequestHeader("Connection", "keep-alive");
a.timeout = 3e3;
var o = !1;
a.ontimeout = function() {
if (!o) {
o = !0;
i(-1);
}
};
a.onerror = function() {
if (!o) {
o = !0;
i(-1);
}
};
a.send();
}
});
i.getInstance = function() {
null == i.instance && (i.instance = new i());
return i.instance;
};
t.exports = i;
cc._RF.pop();
}, {} ],
Tools: [ function(e, t) {
"use strict";
cc._RF.push(t, "44315zm/1hPRK89/Jm0gFyH", "Tools");
window.Tools = {
random: function(e, t) {
return Math.floor(Math.random() * (t - e + 1)) + e;
},
angleToRadian: function(e) {
return e * Math.PI / 180;
},
radianToAngle: function(e) {
return 180 * e / Math.PI;
},
getDistance: function(e, t) {
return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
},
getAngle: function(e, t) {
var i = e.x, a = e.y, o = t.x, n = t.y, s = Math.abs(i - o), c = Math.abs(a - n), l = c / Math.sqrt(Math.pow(s, 2) + Math.pow(c, 2)), r = Math.acos(l), d = Math.floor(180 / (Math.PI / r));
o > i && n > a && (d = 180 - d);
o == i && n > a && (d = 180);
o > i && n == a && (d = 90);
o < i && n > a && (d = 180 + d);
o < i && n == a && (d = 270);
o < i && n < a && (d = 360 - d);
return d;
},
getRadian: function(e, t) {
var i = e.x, a = e.y, o = t.x, n = t.y, s = Math.abs(i - o), c = Math.abs(a - n), l = c / Math.sqrt(Math.pow(s, 2) + Math.pow(c, 2)), r = Math.acos(l), d = Math.floor(180 / (Math.PI / r));
o > i && n > a && (d = 180 - d);
o == i && n > a && (d = 180);
o > i && n == a && (d = 90);
o < i && n > a && (d = 180 + d);
o < i && n == a && (d = 270);
o < i && n < a && (d = 360 - d);
return this.angleToRadian(d);
},
getDate: function(e) {
var t = new Date();
return "year" == e ? t.getYear() : "year2" == e ? t.getFullYear() : "month" == e ? t.getMonth() : "day" == e ? t.getDate() : "week" == e ? t.getDay() : "millisecond" == e ? t.getTime() : "hour" == e ? t.getHours() : "minute" == e ? t.getMinutes() : "second" == e ? t.getSeconds() : void 0;
},
getMonthNumber: function(e, t) {
var i = e.substr(0, 4), a = t.substr(0, 4), o = e.substr(4, 2);
return 12 * (a - i) + (t.substr(4, 2) - o);
},
getDayNumber: function(e, t) {
var i = e.substr(0, 4), a = t.substr(0, 4), o = e.substr(4, 2), n = t.substr(4, 2), s = e.substr(6, 2), c = a + "/" + n + "/" + t.substr(6, 2), l = new Date(i + "/" + o + "/" + s), r = new Date(c).getTime() - l.getTime();
return Math.floor(r / 864e5);
},
getDateDayString: function() {
if (arguments.length <= 0 ? void 0 : arguments[0]) {
var e = new Date();
e.setTime(e.getTime() + 864e5 * (arguments.length <= 0 ? void 0 : arguments[0]));
var t = e.getFullYear(), i = e.getMonth() + 1, a = e.getDate();
arguments.length <= 0 || arguments[0], arguments.length <= 0 || arguments[0];
} else t = Tools.getDate("year2"), i = Tools.getDate("month") + 1, a = Tools.getDate("day");
i < 10 && (i = "0" + i);
a < 10 && (a = "0" + a);
var o = "" + t + i + a;
return o;
},
uniqueArr: function(e) {
for (var t = [], i = 0; i < e.length; i++) -1 == t.indexOf(e[i]) && t.push(e[i]);
return t;
},
jiangXuArr: function(e) {
return e.sort(function(e, t) {
return -(e - t);
});
},
shengXuArr: function(e) {
return e.sort(function(e, t) {
return e - t;
});
},
getIndexInArray: function(e, t) {
for (var i = 0; i < e.length; i++) if (JSON.stringify(e[i]) === JSON.stringify(t)) return i;
return -1;
},
removeElementFromArr: function(e, t) {
var i = Tools.getIndexInArray(e, t);
i > -1 && e.splice(i, 1);
return e;
},
getIndexInArray2: function(e, t) {
for (var i = 0; i < e.length; i++) if (e[i] == t) return i;
return -1;
},
removeElementFromArr2: function(e, t) {
var i = Tools.getIndexInArray2(e, t);
i > -1 && e.splice(i, 1);
return e;
},
strToArr: function(e, t) {
return e.split("" + t);
},
getShowStr: function(e) {
var t = null, i = null;
if ((e = parseInt(e)) >= 1e21) {
t = parseFloat(parseFloat(e) / parseFloat(1e21)).toFixed(2);
i = "cc";
} else if (e >= 1e18) {
t = parseFloat(parseFloat(e) / parseFloat(1e18)).toFixed(2);
i = "bb";
} else if (e >= 1e15) {
t = parseFloat(parseFloat(e) / parseFloat(1e15)).toFixed(2);
i = "aa";
} else if (e >= 1e12) {
t = parseFloat(parseFloat(e) / parseFloat(1e12)).toFixed(2);
i = "T";
} else if (e >= 1e9) {
t = parseFloat(parseFloat(e) / parseFloat(1e9)).toFixed(2);
i = "B";
} else if (e >= 1e6) {
t = parseFloat(parseFloat(e) / parseFloat(1e6)).toFixed(2);
i = "M";
} else if (e >= 1e3) {
t = parseFloat(parseFloat(e) / parseFloat(1e3)).toFixed(2);
i = "K";
} else {
t = e;
i = "";
}
return "" + t + i;
},
fixValue: function(e, t) {
var i = (Math.round(e * Math.pow(10, t)) / Math.pow(10, t)).toString();
i.indexOf(".") < 0 && (i += ".");
for (var a = i.length - i.indexOf("."); a <= t; a++) i += "0";
return i;
},
getNewArr: function(e, t) {
var i = new Array();
for (var a in e) i.push(e[a]);
var o = new Array();
for (a = 0; a < t && i.length > 0; a++) {
var n = Math.floor(Math.random() * i.length);
o[a] = i[n];
i.splice(n, 1);
}
return o;
},
swapArray: function(e, t, i) {
e[t] = e.splice(i, 1, e[t])[0];
return e;
},
getWindowSize: function() {
return cc.winSize;
},
setNodeColor: function(e, t, i, a) {
var o = new cc.color(t, i, a, 255);
e.color = o;
if (e.children.length > 0) for (var n = 0; n < e.children.length; n++) {
e.children[n].color = o;
if (e.children[n].children.length > 0) for (var s = 0; s < e.children[n].children.length; s++) e.children[n].children[s].color = o;
}
},
resetDialog: function(e, t) {
var i = e.getChildByName("zheZhao"), a = e.getChildByName("bg");
if (t) {
e.active = !0;
i.opacity = 0;
a.scale = 0;
cc.tween(i).to(.2, {
opacity: 180
}).start();
cc.tween(a).to(.2, {
scale: 1
}).start();
} else {
cc.tween(i).to(.2, {
opacity: 0
}).start();
cc.tween(a).to(.2, {
scale: 0
}).call(function() {
e.active = !1;
}).start();
}
},
resetDialog2: function(e, t) {
var i = e.getChildByName("zheZhao"), a = e.getChildByName("bg");
if (t) {
e.active = !0;
i.opacity = 0;
a.scale = 0;
cc.tween(i).to(.2, {
opacity: 180
}).start();
cc.tween(a).to(.2, {
scale: 1
}).start();
} else {
cc.tween(i).to(.2, {
opacity: 0
}).start();
cc.tween(a).to(.2, {
scale: 0
}).call(function() {
e.destroy();
}).start();
}
},
log: function() {},
create: function(e, t, i, a, o) {
var n = 3.14159 * o / 180, s = t.x + (i.x - t.x) / 4, c = cc.v2(s, a + t.y + Math.cos(n) * s), l = t.x + (i.x - t.x) / 2, r = cc.v2(l, a + t.y + Math.cos(n) * l);
return cc.bezierTo(e, [ c, r, i ]).repeat(1);
},
couldShake: !0,
shakeScreen: function() {
var e = this;
if (AD.couldShake && this.couldShake) {
this.couldShake = !1;
var t = 1;
(arguments.length <= 0 ? void 0 : arguments[0]) && (t = arguments.length <= 0 ? void 0 : arguments[0]);
var i = .03 * t, a = 5 * t, o = (cc.find("Canvas/Main Camera").getComponent(cc.Camera), 
cc.find("Canvas/Main Camera"));
cc.tween(o).by(i, {
position: cc.v2(-a, a)
}).by(i, {
position: cc.v2(a, -a)
}).by(i, {
position: cc.v2(a, a)
}).by(i, {
position: cc.v2(-a, -a)
}).call(function() {
e.couldShake = !0;
}).start();
}
},
getSecond: function(e) {
var t = parseInt(e / 3600), i = null;
i = t >= 10 ? t : "0" + t;
var a = parseInt((e - 3600 * t) / 60), o = null;
o = a >= 10 ? a : "0" + a;
var n = parseInt(e - 3600 * t - 60 * a), s = null, c = s = n >= 10 ? n : "0" + n;
(arguments.length <= 1 ? void 0 : arguments[1]) && (c = i + ":" + o + ":" + s);
return c;
},
getSecond2: function(e) {
var t, i = parseInt(e / 3600), a = parseInt((e - 3600 * i) / 60);
t = a >= 10 ? a : "0" + a;
var o = parseInt(e - 3600 * i - 60 * a);
return t + ":" + (o >= 10 ? o : "0" + o);
},
changeSlotTexture: function(e, t, i) {
e.getComponent(dragonBones.ArmatureDisplay).armature().getSlot(t).displayIndex = i;
},
copyToClipBoard: function(e) {
if (cc.sys.isNative) qx.copyToClipBoard(e); else if (cc.sys.isBrowser) {
var t = null;
if (null === (t = document.getElementById("clipBoard"))) {
(t = document.createElement("textarea")).id = "clipBoard";
t.textContent = e;
document.body.appendChild(t);
}
t.select();
try {
document.execCommand("copy");
cc.log("已经复制到剪贴板");
document.body.removeChild(t);
} catch (e) {
cc.log("复制到剪贴板失败");
}
}
},
colorOfString: function(e) {
if (null == e || 7 != e.length) return null;
var t = e.toLowerCase();
if ("#" == t.charAt(0)) {
t = t.slice(1);
var i = parseInt(t[0] + t[1], 16), a = parseInt(t[2] + t[3], 16), o = parseInt(t[4] + t[5], 16);
return new cc.Color(i, a, o, 255);
}
},
shanBai: function(e) {
e.dstBlendFactor = cc.macro.BlendFactor.ONE;
},
updateSpine: function(e, t) {
e.timeScale = 0;
var i = e.getCurrent(0), a = i.animationEnd * t;
i.animationStart = a;
e.setToSetupPose();
}
};
cc._RF.pop();
}, {} ],
UITips: [ function(e, t) {
"use strict";
cc._RF.push(t, "6f82eDnZ6xMwbMceNO1NRxd", "UITips");
cc.Class({
extends: cc.Component,
properties: {
toolsDESC: cc.Prefab
},
start: function() {
var e = this;
cc.director.on("物品说明", function(t, i, a) {
var o = cc.instantiate(e.toolsDESC);
o.parent = e.node;
var n = e.node.convertToNodeSpaceAR(t);
o.position = n;
o.getComponent("UI_tools_des").reset(i, a);
}, this);
}
});
cc._RF.pop();
}, {} ],
UI_cangKuMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "fb21afKo+lFnZSWiYqzkU7p", "UI_cangKuMng");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab
},
start: function() {
var e = this;
window.cangKuIndexOpening = -99;
cc.director.on("打开储物箱", function(t) {
if (e.node.childrenCount >= 1) {
console.log("仓库已打开");
e.targetRoleIndex, cc.director.emit("系统提示", "仓库正在使用中", t);
} else {
var i = cc.instantiate(e.item);
i.parent = e.node;
i.getComponent("UI_cangKu").reset(t);
}
}, this);
}
});
cc._RF.pop();
}, {} ],
UI_cangKu: [ function(e, t) {
"use strict";
cc._RF.push(t, "e18f9b5d9VFHYNFDFh0Pqzs", "UI_cangKu");
cc.Class({
extends: cc.Component,
properties: {
content: cc.Node,
itemBg: cc.Prefab,
itemTools: cc.Prefab,
btnUnlock: cc.Node
},
onLoad: function() {
var e = this;
this.dataIndexArr = new Array();
this.data = globalData.getToolData();
for (var t = 0; t < this.data.length; t++) this.data[t].hp > 0 && -1 == this.data[t].roleIndex && this.dataIndexArr.push(t);
this.createItem();
cc.director.on("仓库添加新物品", function(t) {
e.dataIndexArr.push(t);
var i = cc.instantiate(e.itemTools);
i.position = cc.v2(0, 0);
for (var a = 0; a < e.content.children.length; a++) if (0 == e.content.children[a].childrenCount) {
i.parent = e.content.children[a];
break;
}
i.getComponent("UI_tools").reset(t);
}, this);
cc.director.on("仓库消耗品数量发生变化", function(t) {
var i = Tools.getIndexInArray2(e.dataIndexArr, t);
parseInt(i / 15);
}, this);
cc.director.on("轮盘按下", function(t) {
e.index == t && e.close();
}, this);
},
start: function() {
var e = this;
switch (this.index) {
case 0:
if (window.isSingle) {
this.node.width = cc.winSize.width;
this.node.height = 720;
this.node.x = 0;
} else {
this.node.width = cc.winSize.width / 2;
this.node.height = 720;
this.node.x = -cc.winSize.width / 4;
}
break;

case 1:
this.node.width = cc.winSize.width / 2;
this.node.height = 720;
this.node.x = cc.winSize.width / 4;
}
cc.director.emit("打开仓库", !0, this.index);
cc.director.on("背包打开", function(t, i) {
e.index == i && 0 == t && Tools.resetDialog2(e.node, !1);
}, this);
this.btnUnlock.active = !1;
this.couldChangePage = !0;
},
createItem: function() {
for (var e = 0; e < globalData.getCangKuUnlockNum(); e++) cc.instantiate(this.itemBg).parent = this.content;
for (e = 0; e < this.dataIndexArr.length; e++) {
var t = cc.instantiate(this.itemTools);
t.parent = this.content.children[e];
t.position = cc.v2(0, 0);
t.getComponent("UI_tools").reset(this.dataIndexArr[e]);
}
},
reset: function(e) {
this.index = e;
window.cangKuIndexOpening = e;
},
onEnable: function() {
Tools.resetDialog2(this.node, !0);
},
onDisable: function() {
window.cangKuIndexOpening = -99;
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "关闭":
this.close();
break;

case "解锁一行仓库":
AD.showAD(this.unlockSucess, this);
}
},
unlockSucess: function() {
for (var e = 0; e < 5; e++) {
var t = cc.instantiate(this.itemBg);
t.parent = this.content;
t.setSiblingIndex(globalData.getCangKuUnlockNum() + e);
}
globalData.setCangKuUnlockNum();
},
close: function() {
if (1 == cc.find("bg", this.node).scale) {
Tools.resetDialog2(this.node, !1);
cc.director.emit("打开仓库", !1, this.index);
}
},
update: function() {
this.btnUnlock.y = this.content.y - this.content.height - 100;
}
});
cc._RF.pop();
}, {} ],
UI_huiShouZhan: [ function(e, t) {
"use strict";
cc._RF.push(t, "dbb5fE+WVpG+KCrEkDqpg0Q", "UI_huiShouZhan");
cc.Class({
extends: cc.Component,
properties: {
btns: [ cc.Node ]
},
start: function() {
var e = this;
this.btns[0].active = !1;
this.btns[1].active = !1;
cc.director.on("回收站", function(t, i) {
e.btns[t].active = i;
}, this);
}
});
cc._RF.pop();
}, {} ],
UI_mgs_roleIcon: [ function(e, t) {
"use strict";
cc._RF.push(t, "c5a475SdIZOq4egVrNZ5OFs", "UI_mgs_roleIcon");
cc.Class({
extends: cc.Component,
properties: {
index: 0
},
start: function() {
this.node.getComponent(cc.Sprite).spriteFrame = window.iconArr[globalData.roleSkinIndexArr[this.index]];
}
});
cc._RF.pop();
}, {} ],
UI_msg_day_night: [ function(e, t) {
"use strict";
cc._RF.push(t, "6f1a3eB/iZBJ6ffBGrfIR8F", "UI_msg_day_night");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this;
this.anim = this.node.getComponent(sp.Skeleton);
this.node.getComponent(sp.Skeleton).enabled = !1;
this.scheduleOnce(function() {
e.node.getComponent(sp.Skeleton).enabled = !0;
}, .1);
this.updateSpine(this.anim, 0);
this.anim.setAnimation(0, "白天", !1);
this.cfg = {
fillRange: 0
};
this.actDay = cc.tween(this.cfg).to(globalData.dayDuration, {
fillRange: 1
});
this.isDay = !0;
cc.director.on("天黑了", function() {
e.cfg.fillRange = 0;
e.updateSpine(e.anim, e.cfg.fillRange);
e.isDay = !1;
e.anim.setAnimation(0, "夜晚", !0);
}, this);
cc.director.on("天亮了变化", function() {
e.anim.setAnimation(0, "白天", !1);
e.isDay = !0;
e.cfg.fillRange = 0;
e.updateSpine(e.anim, e.cfg.fillRange);
}, this);
cc.director.on("白天变化", function(t) {
cc.tween(e.cfg).to(1, {
fillRange: t
}).start();
}, this);
},
update: function() {
this.isDay && this.updateSpine(this.anim, this.cfg.fillRange);
},
updateSpine: function(e, t) {
e.timeScale = 0;
var i = e.getCurrent(0), a = i.animationEnd * t;
i.animationStart = a;
e.setToSetupPose();
}
});
cc._RF.pop();
}, {} ],
UI_msg_jianTou: [ function(e, t) {
"use strict";
cc._RF.push(t, "81972ihmaFFXIqYvqXRuF+G", "UI_msg_jianTou");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this;
cc.director.on("箭头变化", function(t, i) {
t == e.node && (i ? e.up() : e.down());
}, this);
this.upNode = cc.find("箭头上", this.node);
this.downNode = cc.find("箭头下", this.node);
this.upNode.opacity = 0;
this.downNode.opacity = 0;
this.index = 0;
this.isDowning = !1;
this.isUping = !1;
},
up: function() {
var e = this;
if (!this.isUping) {
this.isUping = !0;
this.upNode.opacity = 255;
this.downNode.opacity = 0;
cc.tween(this.upNode).repeat(4, cc.tween().by(.1, {
y: 10
}, {
easing: "sineInOut"
}).by(.2, {
y: -10
}, {
easing: "sineInOut"
})).to(.1, {
opacity: 0
}).call(function() {
e.isUping = !1;
}).start();
}
},
down: function() {
var e = this;
if (!this.isDowning) {
this.isDowning = !0;
this.upNode.opacity = 0;
this.downNode.opacity = 255;
cc.tween(this.downNode).repeat(4, cc.tween().by(.1, {
y: -10
}, {
easing: "sineInOut"
}).by(.2, {
y: 10
}, {
easing: "sineInOut"
})).to(.1, {
opacity: 0
}).call(function() {
e.isDowning = !1;
}).start();
}
}
});
cc._RF.pop();
}, {} ],
UI_msg_level: [ function(e, t) {
"use strict";
cc._RF.push(t, "37a0d7KmYtFQ7SsPePBgEt+", "UI_msg_level");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this;
this.label = this.node.getComponent(cc.Label);
this.label.string = "第" + (window.gameScene.levelNow + 1) + "天";
cc.director.on("天亮了", function() {
e.label.string = "第" + (window.gameScene.levelNow + 1) + "天";
}, this);
}
});
cc._RF.pop();
}, {} ],
UI_msg_listener_food: [ function(e, t) {
"use strict";
cc._RF.push(t, "22123ucQ9VKnrvY9suCX6Mg", "UI_msg_listener_food");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
jianTouNode: cc.Node
},
start: function() {
var e = this;
this.spr = this.node.getComponent(cc.Sprite);
this.skinIndex = globalData.roleSkinIndexArr[this.index];
this.duration = 10;
this.reduceRate = globalData.getSkinJson(this.skinIndex, "食物消耗速度");
this.init();
cc.director.on("恢复饱食度", function(t, i) {
if (e.index == t) {
console.log("恢复饱食度 " + i);
e.numNow += i;
window.audioMng.playSfx("吞咽");
var a = window.gameScene.roleArr[e.index];
cc.director.emit("吃喝数字", "饱食度", cc.v2(a.x, a.y + 100), i);
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.numNow > e.numSum && (e.numNow = e.numSum);
e.changeRate();
}
}, this);
cc.director.on("百分比加饱食度", function(t, i) {
if (e.index == t) {
e.numNow += e.numSum * i;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}
}, this);
cc.director.on("复活玩家", function(t) {
if (e.index == t) {
e.numNow = e.numSum;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}
}, this);
},
init: function() {
var e = this;
this.numSum = 100;
var t = globalData.getRoleData(this.index, "初始化");
this.numNow = t ? this.numSum : globalData.getRoleData(this.index, "饱食度");
this.changeRate();
11 != this.skinIndex && this.schedule(function() {
if (0 != window.couldDayTime) {
e.numNow -= e.reduceRate;
cc.director.emit("箭头变化", e.jianTouNode, !1);
e.numNow <= 0 && (e.numNow = 0);
e.changeRate();
}
}, this.duration);
},
changeRate: function() {
var e = this;
this.spr.fillRange = this.numNow / this.numSum;
globalData.setRoleData(this.index, "饱食度", this.numNow);
cc.director.emit("当前饱食度", this.index, this.spr.fillRange);
this.spr.fillRange > .6 ? this.node.color = new cc.Color(255, 255, 255) : this.spr.fillRange > .2 ? this.node.color = new cc.Color(255, 255, 0) : this.node.color = new cc.Color(255, 0, 0);
this.scheduleOnce(function() {
cc.director.emit("玩家健康", 1, e.index, e.numNow, e.spr.fillRange);
}, .05);
this.spr.fillRange < .3 && cc.director.emit("对话", this.index, "好饿啊，需要找点吃的");
}
});
cc._RF.pop();
}, {} ],
UI_msg_listener_hp: [ function(e, t) {
"use strict";
cc._RF.push(t, "95a4dG/t9NDdoRPOx8S+Ixl", "UI_msg_listener_hp");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
jianTouNode: cc.Node
},
onLoad: function() {
var e = this;
cc.director.on("当前饱食度", function(t, i) {
e.index == t && (e.numNow <= 0 || (e.baoShiDu = i));
}, this);
cc.director.on("当前饥渴度", function(t, i) {
e.index == t && (e.numNow <= 0 || (e.jiKeDu = i));
}, this);
cc.director.on("玩家被攻击", function(t, i) {
if (e.index == t && !(e.numNow <= 0)) {
e.numNow -= i;
cc.director.emit("箭头变化", e.jianTouNode, !1);
e.changeRate();
}
}, this);
cc.director.on("睡觉回血", function(t, i) {
if (e.index == t && !(e.numNow <= 0)) {
e.numNow += i;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}
}, this);
cc.director.on("百分比回血", function(t, i) {
if (e.index == t && !(e.numNow <= 0)) {
e.numNow += e.numSum * i;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}
}, this);
cc.director.on("血量上限加成", function(t) {
if (e.index == t) {
console.log("当前血量上限 " + e.numSum + "当前血量  " + e.numNow);
var i = e.numSum * (1 + globalData.getJieSuanData(e.index, "血量上限加成")), a = i - e.numSum;
e.numNow > 0 && (e.numNow += a);
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.numSum = i;
console.log("当前血量上限 " + e.numSum + "当前血量  " + e.numNow);
e.changeRate();
}
}, this);
cc.director.on("复活玩家", function(t) {
if (e.index == t) {
e.numNow = e.numSum;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}
}, this);
cc.director.on("救援玩家", function(t) {
if (e.index == t) {
e.numNow = e.numSum / 2;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}
}, this);
},
start: function() {
var e = this;
this.spr = this.node.getComponent(cc.Sprite);
this.skinIndex = globalData.roleSkinIndexArr[this.index];
this.duration = 5;
this.reduceRate = 5;
this.durationAddHP = 5;
this.addRate = 1;
9 == this.skinIndex && this.schedule(function() {
e.numNow++;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}, 5);
this.init();
},
init: function() {
var e = this;
this.numSum = globalData.getSkinJson(this.skinIndex, "血量");
this.numSum = this.numSum * (1 + globalData.getJieSuanData(this.index, "血量上限加成"));
if (globalData.getRoleData(this.index, "初始化")) {
this.numNow = this.numSum;
this.scheduleOnce(function() {
globalData.setRoleData(e.index, "初始化", !1);
}, .2);
} else this.numNow = parseInt(this.numSum * globalData.getRoleData(this.index, "血量"));
this.changeRate();
if (11 != this.skinIndex) {
this.schedule(function() {
if (!(e.numNow <= 0) && 0 != window.couldDayTime) {
if (e.baoShiDu <= 0) {
e.numNow -= e.reduceRate;
cc.director.emit("箭头变化", e.jianTouNode, !1);
}
if (e.jiKeDu <= 0) {
e.numNow -= e.reduceRate;
cc.director.emit("箭头变化", e.jianTouNode, !1);
}
e.changeRate();
}
}, this.duration);
this.schedule(function() {
if (!(e.numNow <= 0) && e.baoShiDu > .6) {
e.numNow += e.addRate;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}
}, this.durationAddHP);
}
},
changeRate: function() {
var e = this;
if (this.numNow > this.numSum) this.numNow = this.numSum; else if (this.numNow <= 0) {
this.numNow = 0;
console.log("玩家" + this.index + "死亡");
cc.director.emit("玩家死亡", this.index);
}
this.spr.fillRange = this.numNow / this.numSum;
this.scheduleOnce(function() {
cc.director.emit("玩家健康", 2, e.index, e.numNow, e.spr.fillRange);
}, .05);
globalData.setRoleData(this.index, "血量", this.spr.fillRange);
cc.director.emit("血量", this.index, this.spr.fillRange);
this.spr.fillRange > .6 ? this.node.color = new cc.Color(255, 255, 255) : this.spr.fillRange > .2 ? this.node.color = new cc.Color(255, 255, 0) : this.node.color = new cc.Color(255, 0, 0);
this.spr.fillRange < .3 && cc.director.emit("对话", this.index, "受伤了，身体好难受");
}
});
cc._RF.pop();
}, {} ],
UI_msg_listener_water: [ function(e, t) {
"use strict";
cc._RF.push(t, "45d32ECUG9A4JnxYA63C3+F", "UI_msg_listener_water");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
jianTouNode: cc.Node
},
start: function() {
var e = this;
this.spr = this.node.getComponent(cc.Sprite);
this.skinIndex = globalData.roleSkinIndexArr[this.index];
this.duration = 10;
this.reduceRate = globalData.getSkinJson(this.skinIndex, "水消耗速度");
this.init();
cc.director.on("恢复饥渴度", function(t, i) {
if (e.index == t) {
var a = window.gameScene.roleArr[e.index];
cc.director.emit("吃喝数字", "淡水", cc.v2(a.x, a.y + 100), i);
window.audioMng.playSfx("吞咽");
e.numNow += i;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.numNow > e.numSum && (e.numNow = e.numSum);
e.changeRate();
}
}, this);
cc.director.on("百分比补水", function(t, i) {
if (e.index == t) {
e.numNow += e.numSum * i;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}
}, this);
cc.director.on("复活玩家", function(t) {
if (e.index == t) {
e.numNow = e.numSum;
cc.director.emit("箭头变化", e.jianTouNode, !0);
e.changeRate();
}
}, this);
},
init: function() {
var e = this;
this.numSum = 100;
var t = globalData.getRoleData(this.index, "初始化");
this.numNow = t ? this.numSum : globalData.getRoleData(this.index, "饥渴度");
this.changeRate();
11 != this.skinIndex && this.schedule(function() {
if (0 != window.couldDayTime) {
e.numNow -= e.reduceRate;
cc.director.emit("箭头变化", e.jianTouNode, !1);
e.numNow <= 0 && (e.numNow = 0);
e.changeRate();
}
}, this.duration);
},
changeRate: function() {
var e = this;
this.spr.fillRange = this.numNow / this.numSum;
globalData.setRoleData(this.index, "饥渴度", this.numNow);
cc.director.emit("当前饥渴度", this.index, this.spr.fillRange);
this.spr.fillRange > .6 ? window.speedRateByWater[this.index] = .2 : window.speedRateByWater[this.index] = 0;
this.scheduleOnce(function() {
cc.director.emit("玩家健康", 0, e.index, e.numNow, e.spr.fillRange);
}, .05);
this.spr.fillRange > .6 ? this.node.color = new cc.Color(255, 255, 255) : this.spr.fillRange > .2 ? this.node.color = new cc.Color(255, 255, 0) : this.node.color = new cc.Color(255, 0, 0);
this.spr.fillRange < .3 && cc.director.emit("对话", this.index, "我得快点找些水喝");
}
});
cc._RF.pop();
}, {} ],
UI_msg_mng: [ function(e, t) {
"use strict";
cc._RF.push(t, "5057dtRn2dGsYI+lPmSFgWi", "UI_msg_mng");
cc.Class({
extends: cc.Component,
properties: {
singleMsg: cc.Prefab,
doubleMsg: cc.Prefab,
tipsZong: cc.Node,
bar: cc.Sprite
},
onLoad: function() {
var e = this, t = null;
if (window.isSingle) {
(t = cc.instantiate(this.singleMsg)).parent = this.node;
t.x += (1280 - cc.winSize.width) / 2;
} else (t = cc.instantiate(this.doubleMsg)).parent = this.node;
window.isSingle && (this.tipsZong.y = 323);
this.tipsZong.active = !0;
if ("骷髅岛" == globalData.modeType) {
this.tipsZong.active = !1;
this.bar.node.parent.y = this.tipsZong.y;
this.modeIndex = 0;
var i = 100;
if (0 == window.isSingle) {
this.modeIndex = 1;
i = 150;
}
this.bar.fillRange = globalData.getLevelScore(this.modeIndex) / i;
cc.director.on("npc得分变化", function() {
e.bar.fillRange = globalData.getLevelScore(e.modeIndex) / i;
e.bar.fillRange >= 1 && e.scheduleOnce(function() {
window.tongGuanSwitch = !0;
window.gameOver = !0;
cc.director.emit("通关了");
e.scheduleOnce(function() {
cc.director.emit("游戏中弹窗", "通关动画");
}, 2);
}, 1);
}, this);
} else {
cc.director.on("建筑建造完毕", function() {
e.checkTask();
}, this);
this.checkTask();
}
},
checkTask: function() {
for (var e = 6, t = 0; t < 6; t++) if (0 == globalData.getBuildData("建筑解锁状态", t)) {
e = t;
break;
}
for (t = 0; t < 6; t++) this.tipsZong.children[t].active = e == t;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
UI_tools_des: [ function(e, t) {
"use strict";
cc._RF.push(t, "6d9347dFglAmruZ45sdoPvm", "UI_tools_des");
cc.Class({
extends: cc.Component,
properties: {
nameLabel: cc.Label,
descLabel: cc.Label
},
start: function() {
var e = this;
cc.director.on("物品提示消失", function() {
e.node.destroy();
}, this);
},
reset: function(e, t) {
this.node.x < 0 ? this.node.x < -cc.winSize.width / 4 ? this.node.scaleX = 1 : this.node.scaleX = -1 : this.node.x < cc.winSize.width / 4 * 3 ? this.node.scaleX = 1 : this.node.scaleX = -1;
this.node.children[0].scaleX = this.node.scaleX;
this.nameLabel.string = e + ":";
this.descLabel.string = t;
}
});
cc._RF.pop();
}, {} ],
UI_tools: [ function(e, t) {
"use strict";
cc._RF.push(t, "8c0a8WiL3hEq5pFWbRtPvTn", "UI_tools");
cc.Class({
extends: cc.Component,
properties: {
hpBar: cc.Sprite,
sprIcon: cc.Sprite,
numLabel: cc.Label,
sprBgArr: [ cc.SpriteFrame ],
sprIconArr: [ cc.SpriteFrame ]
},
onLoad: function() {
this.targetParent = this.node.parent;
this.yuanParent = this.node.parent;
},
start: function() {
var e = this;
cc.director.on("背包武器更换", function(t, i) {
t == e.roleIndex && (i != e.cfgIndex ? e.shiYongNode.active = !1 : e.shiYongNode.active = !0);
}, this);
cc.director.on("原有物品数量发生变化", function(t) {
t == e.cfgIndex && e.reset(t, !0);
}, this);
},
reset: function(e) {
var t = this;
this.shiYongNode = cc.find("使用中", this.node);
this.cfgIndex = e;
var i = globalData.getToolData()[e];
this.cfg = i;
this.type = i.name;
this.roleIndex = i.roleIndex;
this.hp = i.hp;
this.showShiYongZhong();
this.resetIconSpr();
if (-1 != i.roleIndex) {
this.resetBgSpr(!0);
cc.director.on("打开仓库", function(e, i) {
t.roleIndex == i && (t.node.getComponent(cc.Button).enabled = e);
}, this);
this.node.on("touchmove", this.touchMove, this);
this.node.on("touchstart", this.touchStart, this);
this.node.on("touchend", this.touchEnd, this);
this.node.on("touchcancel", this.touchEnd, this);
} else this.resetBgSpr(!1);
var a = !1;
if (globalData.getWeapon(i.name)) if (globalData.getWeapon(i.name).Gongju_ > 1) {
this.hpSum = globalData.getWeapon(i.name).Gongju_;
this.hpBar.fillRange = i.hp / this.hpSum;
a = !0;
} else this.hpBar.node.parent.active = !1;
if (0 == a) {
this.hpBar.node.parent.active = !1;
this.numLabel.node.active = !0;
this.numLabel.string = "x" + i.hp;
} else this.numLabel.node.active = !1;
},
showShiYongZhong: function() {
this.shiYongNode.active = !1;
if (0 == this.roleIndex || 1 == this.roleIndex) {
var e = window.gameScene.roleArr[this.roleIndex];
if (e) {
var t = e.getComponent("player");
t && "空手" != t.weaponType && t.index == this.roleIndex && t.cfgIndex == this.cfgIndex && (this.shiYongNode.active = !0);
}
}
},
resetIconSpr: function() {
this.sprIcon.spriteFrame = null;
for (var e = 0; e < this.sprIconArr.length; e++) if (this.sprIconArr[e].name.indexOf(this.type) >= 0) {
this.sprIcon.spriteFrame = this.sprIconArr[e];
break;
}
null == this.sprIcon.spriteFrame && console.warn("图标设置失败  " + this.type);
},
resetBgSpr: function(e) {
if (e) this.node.getComponent(cc.Sprite).spriteFrame = null; else {
var t = 2;
switch (this.type) {
case "水":
case "浆果":
case "胡萝卜":
t = 2;
break;

case "木头":
case "石头":
case "铁矿":
case "铁块":
t = 1;
break;

case "生肉":
case "生螃蟹":
case "生鱼肉":
case "熟肉":
case "熟鱼肉":
case "熟螃蟹":
t = 2;
break;

case "草":
t = 1;
break;

default:
t = this.type.indexOf("木") >= 0 ? 0 : this.type.indexOf("石") >= 0 ? 1 : 2;
}
this.node.getComponent(cc.Sprite).spriteFrame = this.sprBgArr[t];
}
},
touchStart: function(e) {
var t = this;
if (window.cangKuIndexOpening != this.roleIndex) {
this.posStart = e.getLocation();
this.yuanParent = this.node.parent;
this.nodeIndex = this.node.getSiblingIndex();
this.yuanPos = this.node.position;
0 == window.isSingle ? this.posStart.x < cc.winSize.width / 2 ? this.huiShouZhanIndex = 0 : this.huiShouZhanIndex = 1 : this.huiShouZhanIndex = 0;
cc.director.emit("回收站", this.huiShouZhanIndex, !0);
this.offX = 0;
this.offY = 0;
this.hadChange = !1;
this.durationTouch = 0;
this.changAn = !1;
this.scheduleOnce(function() {
if (0 == t.hadChange) {
t.changAn = !0;
t.createDESC();
}
}, .5);
}
},
touchMove: function(e) {
if (window.cangKuIndexOpening != this.roleIndex) {
this.offX += e.getDelta().x;
this.offY += e.getDelta().y;
if ((Math.abs(this.offX) > 1 || Math.abs(this.offY) > 1) && 0 == this.hadChange) {
cc.director.emit("物品提示消失");
this.hadChange = !0;
this.resetBgSpr(!0);
var t = cc.find("Canvas/UI").convertToNodeSpaceAR(e.getLocation());
this.node.parent = cc.find("Canvas/UI");
this.node.position = t;
}
this.node.x += e.getDelta().x;
this.node.y += e.getDelta().y;
window.isSingle || (this.posStart.x < cc.winSize.width / 2 ? this.node.x > -50 && (this.node.x = -50) : this.posStart.x && this.node.x < 50 && (this.node.x = 50));
}
},
touchEnd: function(e) {
var t = this;
if (window.cangKuIndexOpening != this.roleIndex) {
var i = e.getLocation();
this.scheduleOnce(function() {
t.checkResult(i);
}, .01);
}
},
checkResult: function(e) {
this.hadChange = !0;
var t = this.huiShouZhanIndex;
setTimeout(function() {
cc.director.emit("回收站", t, !1);
}, 100);
cc.director.emit("物品提示消失");
if (Tools.getDistance(e, this.posStart) < 1) {
0 == this.changAn && this.clickFunc();
this.huanYuan();
} else {
if (this.wouldBeDestry) {
globalData.clearToolData(this.cfgIndex);
this.node.destroy();
0 != this.roleIndex && 1 != this.roleIndex || cc.director.emit("物品移除", this.cfgIndex);
return;
}
if (null == this.targetParent) {
globalData.clearToolData(this.cfgIndex);
var i = 0;
0 == window.isSingle && this.node.x > 0 && (i = 1);
var a = window.gameScene.roleArr[i];
cc.director.emit("丢弃物资", this.type, this.hp, cc.v2(a.x, a.y + 50), i);
this.node.destroy();
0 != this.roleIndex && 1 != this.roleIndex || cc.director.emit("物品移除", this.cfgIndex);
} else this.targetParent == this.yuanParent && this.huanYuan();
}
},
createDESC: function() {
var e = this.node.parent.convertToWorldSpaceAR(this.node.position), t = null, i = null;
switch (this.type) {
case "浆果":
t = "浆果";
i = "恢复角色20点血量";
break;

case "胡萝卜":
t = globalData.getFoodJson(this.type).Food_Name;
i = globalData.getFoodJson(this.type).Food_Tips;
break;

case "水":
t = "水瓶";
i = "珍贵的淡水，可以补充些水分";
break;

case "木头":
t = "木材";
i = "制作工具或建筑的材料";
break;

case "石头":
t = "石材";
i = "制作工具或建筑的材料";
break;

case "铁矿":
t = "铁矿";
i = "可以冶炼成铁块";
break;

case "铁块":
t = "铁块";
i = "制作高级物品的必备材料";
break;

case "草":
t = "草";
i = "制作工具或建筑的材料";
break;

case "生肉":
t = globalData.getFoodJson(this.type).Food_Name;
i = globalData.getFoodJson(this.type).Food_Tips;
break;

case "生螃蟹":
t = globalData.getFoodJson("螃蟹").Food_Name;
i = globalData.getFoodJson("螃蟹").Food_Tips;
break;

case "生鱼肉":
t = globalData.getFoodJson("鱼肉").Food_Name;
i = globalData.getFoodJson("鱼肉").Food_Tips;
break;

case "熟肉":
t = globalData.getFoodJson("烤熟肉").Food_Name;
i = globalData.getFoodJson("烤熟肉").Food_Tips;
break;

case "熟鱼肉":
t = globalData.getFoodJson("烤鱼肉").Food_Name;
i = globalData.getFoodJson("烤鱼肉").Food_Tips;
break;

case "熟螃蟹":
t = globalData.getFoodJson("烤螃蟹").Food_Name;
i = globalData.getFoodJson("烤螃蟹").Food_Tips;
break;

default:
t = globalData.getWeapon(this.type).Gongju_Name;
i = globalData.getWeapon(this.type).Gongju_Tips;
}
t && i ? cc.director.emit("物品说明", e, t, i) : console.log("缺少物品说明 " + t);
},
huanYuan: function() {
this.node.setSiblingIndex(this.nodeIndex);
this.node.position = this.yuanPos;
this.node.parent = this.yuanParent;
this.node.parent.name.indexOf("背包") >= 0 ? this.resetBgSpr(!0) : this.resetBgSpr(!1);
if (null != this.huanYuanTips) {
var e;
e = this.posStart.x < cc.winSize.width / 2 ? 0 : 1;
cc.director.emit("系统提示", this.huanYuanTips, e);
}
},
clickFunc: function() {
if (-1 != this.roleIndex) {
var e = 0, t = 0, i = 0, a = !1;
switch (this.type) {
case "水":
t = 20;
break;

case "浆果":
i = 20;
break;

case "胡萝卜":
e = globalData.getFoodJson(this.type).Food_Data;
break;

case "木头":
if (window.indexOfBuildDialog == this.roleIndex && "生火" == window.typeOfBuildDialog) {
cc.director.emit("放入木头", this.roleIndex);
this.xiaoHao();
}
break;

case "石头":
case "铁矿":
case "铁块":
case "草":
break;

case "生肉":
e = globalData.getFoodJson(this.type).Food_Data;
"生火" == window.typeOfBuildDialog && window.indexOfBuildDialog == this.roleIndex && (a = !0);
break;

case "生螃蟹":
e = globalData.getFoodJson("螃蟹").Food_Data;
"生火" == window.typeOfBuildDialog && window.indexOfBuildDialog == this.roleIndex && (a = !0);
break;

case "生鱼肉":
e = globalData.getFoodJson("鱼肉").Food_Data;
"生火" == window.typeOfBuildDialog && window.indexOfBuildDialog == this.roleIndex && (a = !0);
break;

case "熟肉":
e = globalData.getFoodJson("烤熟肉").Food_Data;
break;

case "熟鱼肉":
e = globalData.getFoodJson("烤鱼肉").Food_Data;
break;

case "熟螃蟹":
e = globalData.getFoodJson("烤螃蟹").Food_Data;
break;

default:
this.shiYongNode.active = !this.shiYongNode.active;
this.shiYongNode.active ? cc.director.emit("更换武器", this.roleIndex, this.type, this.cfgIndex) : cc.director.emit("更换武器", this.roleIndex, "空手", -1);
}
if (e > 0) {
if (a) {
if (null != globalData.getBuildData("烤箱生肉类型") && globalData.getBuildData("烤箱生肉类型") != this.type) {
cc.director.emit("系统提示", "烤炉正在使用中", this.roleIndex);
return;
}
cc.director.emit("放入生肉", this.roleIndex, this.type);
} else {
cc.director.emit("恢复饱食度", this.roleIndex, e);
this.type.indexOf("生") >= 0 && cc.director.emit("对话", this.roleIndex, "好恶心，如果能煮熟就好了");
}
this.xiaoHao();
} else if (t > 0) {
cc.director.emit("恢复饥渴度", this.roleIndex, t);
this.hp--;
globalData.setToolData(this.cfgIndex, "血量", 1);
this.numLabel.string = "x" + this.hp;
if (this.hp <= 0) {
globalData.clearToolData(this.cfgIndex);
this.node.destroy();
}
} else if (i > 0) {
cc.director.emit("睡觉回血", this.roleIndex, i);
var o = window.gameScene.roleArr[this.roleIndex];
cc.director.emit("吃喝数字", "血量", cc.v2(o.x, o.y + 100), i);
cc.director.emit("吃浆果", this.roleIndex);
this.hp--;
globalData.setToolData(this.cfgIndex, "血量", 1);
this.numLabel.string = "x" + this.hp;
if (this.hp <= 0) {
globalData.clearToolData(this.cfgIndex);
this.node.destroy();
}
}
}
},
xiaoHao: function() {
this.hp--;
globalData.setToolData(this.cfgIndex, "血量", 1);
this.numLabel.string = "x" + this.hp;
if (this.hp <= 0) {
globalData.clearToolData(this.cfgIndex);
this.node.destroy();
}
},
btnCallBack: function() {
window.audioMng.playSfx("按钮");
if (-1 != this.roleIndex) {
this.targetRoleIndex = -1;
if (window.cangKuIndexOpening != this.roleIndex) return;
} else this.targetRoleIndex = window.cangKuIndexOpening;
if (globalData.setToolData(this.cfgIndex, "归属", this.targetRoleIndex)) {
this.shiYongNode.active && cc.director.emit("更换武器", this.roleIndex, "空手", -1);
this.node.destroy();
} else {
var e;
e = this.node.parent.convertToWorldSpaceAR(this.node.position).x < cc.winSize.width / 2 ? 0 : 1;
-1 == this.targetRoleIndex ? cc.director.emit("系统提示", "仓库空间不足", e) : cc.director.emit("系统提示", "背包空间不足", e);
}
},
onCollisionStay: function(e) {
this.huanYuanTips = null;
e.node.name.indexOf("回收站") >= 0 && (this.wouldBeDestry = !0);
e.node.name.indexOf("背包") >= 0 && (this.targetParent = this.yuanParent);
},
onCollisionExit: function(e) {
e.node.name.indexOf("背包") >= 0 ? this.targetParent = null : e.node.name.indexOf("回收站") >= 0 && (this.wouldBeDestry = !1);
}
});
cc._RF.pop();
}, {} ],
audioMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "2521ai71k9Ks6Ivc/Dd6OqE", "audioMng");
cc.Class({
extends: cc.Component,
properties: {
bgmGame: cc.AudioClip,
bgmGameNight: cc.AudioClip,
bgmMenu: cc.AudioClip,
bgmGameLast: cc.AudioClip,
bgmGameKuLou: cc.AudioClip,
sfxArr: {
default: [],
type: [ cc.AudioClip ]
}
},
onLoad: function() {
var e = this;
cc.game.addPersistRootNode(this.node);
window.audioMng = this;
this.sfxId = -1;
cc.game.on(cc.game.EVENT_HIDE, function() {}, this);
cc.game.on(cc.game.EVENT_SHOW, function() {
if (0 == cc.audioEngine.isMusicPlaying(e.audioIndex)) {
console.log("返回前台了 bgm停了 重新播放");
e.playMusic();
}
}, this);
},
start: function() {
this.couldPlaySfx = !0;
this.durationPlay = [ 0, 0, 0, 0, 0, 0, 0 ];
this.durationCoin = 0;
this.valume = 0;
this.audioIndex = -1;
this.playBGM = !1;
this.bgmType = null;
this.durationAtt = 0;
this.playDurationCoin = 0;
this.playDurationDecorate = 0;
this.targetValue = 0;
this.sfxJiaoBu = [ -1, -1 ];
},
playSfx: function(e) {
for (var t = this, i = -1, a = !1, o = 1, n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) s[c - 1] = arguments[c];
switch (e) {
case "按钮":
i = 0;
break;

case "收集物资":
i = 1;
break;

case "狼嚎":
i = 2;
break;

case "拔萝卜":
i = 3;
break;

case "砍树":
i = 4;
break;

case "草丛":
i = 5;
break;

case "挖矿石":
i = 6;
break;

case "受伤":
i = 7;
break;

case "攻击":
if (this.durationAtt > 0) return;
this.durationAtt = 1;
this.scheduleOnce(function() {
t.durationAtt = 0;
}, .1);
i = 8;
break;

case "夜晚氛围":
i = 4 == (l = Tools.random(0, 4)) ? 25 : 9 + l;
break;

case "白天氛围":
var l;
i = 6 == (l = Tools.random(0, 6)) ? 25 : 14 + l;
break;

case "脚步声":
if (-1 == this.sfxJiaoBu[s[0]]) {
a = !0;
i = 13;
}
break;

case "吞咽":
i = 20;
break;

case "狗死亡":
i = 21;
break;

case "危险警告":
i = 22;
break;

case "树倒下":
i = 23;
break;

case "复活":
i = 24;
break;

case "鸡叫":
case "鸡叫":
i = 26;
break;

case "游戏失败":
i = 27;
break;

case "终极之战":
i = 22;
break;

case "建造":
i = 28;
break;

case "破碎":
i = 29;
break;

case "结算通关":
i = 30;
break;

case "僵尸死亡":
i = 31 + Tools.random(0, 1);
break;

case "僵尸随意播放":
i = 33 + Tools.random(0, 4);
}
if (-1 != i) {
var r = cc.audioEngine.play(this.sfxArr[i], a, o);
switch (e) {
case "脚步声":
this.sfxJiaoBu[s[0]] = r;
}
}
},
stopSfx: function(e) {
switch (e) {
case "脚步声":
for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) i[a - 1] = arguments[a];
if (-1 == this.sfxJiaoBu[i[0]]) return;
cc.audioEngine.stop(this.sfxJiaoBu[i[0]]);
this.sfxJiaoBu[i[0]] = -1;
}
},
playMusic: function() {
this.couldPlaySfx = !0;
AD.npcBallNum = 0;
cc.audioEngine.stop(this.idBall);
if ("gameScene" == cc.director.getScene().name) {
this.bgmType = "game";
window.isLastLevel ? this.audioIndex = cc.audioEngine.playMusic(this.bgmGameLast, !0) : window.isNight ? this.audioIndex = cc.audioEngine.playMusic(this.bgmGameNight, !0) : this.audioIndex = cc.audioEngine.playMusic(this.bgmGame, !0);
} else if ("gameScene_js" == cc.director.getScene().name) {
this.bgmType = "game_js";
window.isNight ? this.audioIndex = cc.audioEngine.playMusic(this.bgmGameNight, !0) : this.audioIndex = cc.audioEngine.playMusic(this.bgmGameKuLou, !0);
} else {
if ("menu" == this.bgmType) return;
this.bgmType = "menu";
this.audioIndex = cc.audioEngine.playMusic(this.bgmMenu, !0);
}
console.log("播放背景音乐");
this.valume = 0;
this.playBGM = !0;
cc.audioEngine.setVolume(this.audioIndex, this.valume);
},
stopMusic: function() {
this.playBGM = !1;
console.log("停止背景音乐");
this.couldPlaySfx = !1;
cc.audioEngine.setVolume(this.audioIndex, 0);
this.targetValue = 0;
(arguments.length <= 0 ? void 0 : arguments[0]) && (this.targetMinValue = arguments.length <= 0 ? void 0 : arguments[0]);
},
update: function(e) {
this.jinBiDurationTemp > 0 && (this.jinBiDurationTemp -= e);
if (this.playBGM) {
if (this.valume < 1) {
this.valume += .3 * e;
this.valume > 1 && (this.valume = 1);
cc.audioEngine.setVolume(this.audioIndex, this.valume);
}
} else if (this.valume > 0) {
this.valume -= .5 * e;
this.valume < this.targetMinValue && (this.valume = this.targetMinValue);
cc.audioEngine.setVolume(this.audioIndex, this.valume);
}
}
});
cc._RF.pop();
}, {} ],
baoXiangDialog: [ function(e, t) {
"use strict";
cc._RF.push(t, "eba5eCd3VpNB69/D3NLr6cN", "baoXiangDialog");
cc.Class({
extends: cc.Component,
properties: {
btnFree: cc.Node,
btnAD: cc.Node,
btnClose: cc.Node,
nodeFree: cc.Node,
nodeAD: cc.Node
},
start: function() {
Tools.resetDialog2(this.node, !0);
this.index = 0;
if (window.isSingle) this.node.width = cc.winSize.width; else {
this.node.width = cc.winSize.width / 2;
this.node.x < 0 ? this.index = 0 : this.index = 1;
}
this.isFree = !1;
this.nodeFree.active = this.isFree;
this.nodeAD.active = !this.isFree;
this.btnFree.active = this.isFree;
this.btnAD.active = !1;
this.btnClose.active = !this.isFree;
this.node.active = !1;
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "关闭":
Tools.resetDialog2(this.node, !1);
break;

case "领取":
this.getSucess();
break;

case "领取AD":
AD.showAD(this.getSucess, this);
}
},
getSucess: function() {
cc.director.emit("获得宝箱");
Tools.resetDialog2(this.node, !1);
if (this.isFree) {
for (var e = 0; e < 2; e++) cc.director.emit("掉落物资", "木头", window.gameScene.roleArr[this.index].position, this.index);
for (e = 0; e < 2; e++) cc.director.emit("掉落物资", "石头", window.gameScene.roleArr[this.index].position, this.index);
for (e = 0; e < 2; e++) cc.director.emit("掉落物资", "草", window.gameScene.roleArr[this.index].position, this.index);
for (e = 0; e < 1; e++) cc.director.emit("掉落物资", "胡萝卜", window.gameScene.roleArr[this.index].position, this.index);
} else {
for (e = 0; e < 5; e++) cc.director.emit("掉落物资", "木头", window.gameScene.roleArr[this.index].position, this.index);
for (e = 0; e < 5; e++) cc.director.emit("掉落物资", "石头", window.gameScene.roleArr[this.index].position, this.index);
for (e = 0; e < 5; e++) cc.director.emit("掉落物资", "草", window.gameScene.roleArr[this.index].position, this.index);
for (e = 0; e < 2; e++) cc.director.emit("掉落物资", "铁块", window.gameScene.roleArr[this.index].position, this.index);
}
window._liBaoIndex++;
}
});
cc._RF.pop();
}, {} ],
baoXiangMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "e7a06awlbxF1os1ZiCRoIc6", "baoXiangMng");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
window.baoXiangMngArr = new Array();
},
start: function() {
var e = this;
this.duration = 60;
this.lastIndex = -1;
cc.director.on("获得宝箱", function() {
e.hide();
}, this);
this.second = 0;
this.schedule(function() {
e.second++;
e.second == e.duration && e.show();
}, 1);
},
show: function() {
this.index = Tools.random(0, window.baoXiangMngArr.length - 1);
do {
this.index = Tools.random(0, window.baoXiangMngArr.length - 1);
} while (this.lastIndex == this.index);
for (var e = 0; e < window.baoXiangMngArr.length; e++) window.baoXiangMngArr[e].active = e == this.index;
this.lastIndex = this.index;
},
hide: function() {
this.second = 0;
for (var e = 0; e < window.baoXiangMngArr.length; e++) window.baoXiangMngArr[e].active = !1;
}
});
cc._RF.pop();
}, {} ],
baoXiang: [ function(e, t) {
"use strict";
cc._RF.push(t, "4902dPH1JxAprDGOUH/BU52", "baoXiang");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
window.baoXiangMngArr.push(this.node);
this.node.active = !1;
this.node.zIndex = -parseInt(this.node.y);
},
onBeginContact: function(e, t, i) {
if (66 == t.tag && 666 == i.tag) {
var a = i.node.getComponent("player");
a && cc.director.emit("显示打开按钮", a.index, "宝箱");
}
},
onEndContact: function(e, t, i) {
if (66 == t.tag && 666 == i.tag) {
var a = i.node.getComponent("player");
a && cc.director.emit("隐藏打开按钮", a.index, "宝箱");
}
}
});
cc._RF.pop();
}, {} ],
beiBaoMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "fed47MjBxFEGaUs/99a817E", "beiBaoMng");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab
},
onLoad: function() {
if (window.isSingle) this.create(0); else {
this.create(0);
this.create(1);
}
},
create: function(e) {
var t = cc.instantiate(this.item);
t.parent = this.node;
t.getComponent("beiBao").reset(e);
}
});
cc._RF.pop();
}, {} ],
beiBao: [ function(e, t) {
"use strict";
cc._RF.push(t, "a87c0d+PmdId6SQop/gI6rv", "beiBao");
cc.Class({
extends: cc.Component,
properties: {
beiBaoNode: cc.Node,
content: cc.Node,
itemTools: cc.Prefab,
btnJianTou: cc.Node
},
onLoad: function() {
var e = this;
cc.director.on("玩家死亡", function(t) {
e.index == t && (e.node.scale = 0);
}, this);
cc.director.on("复活玩家", function(t) {
e.index == t && (e.node.scale = 1);
}, this);
cc.director.on("救援玩家", function(t) {
e.index == t && (e.node.scale = 1);
}, this);
},
reset: function(e) {
var t = this;
this.index = e;
window.beiBaoJSArr[this.index] = this;
switch (this.index) {
case 0:
window.isSingle ? this.node.x = 0 : this.node.x = -cc.winSize.width / 4;
break;

case 1:
window.isSingle && (this.node.active = !1);
this.node.x = cc.winSize.width / 4;
break;

default:
this.node.x = 0;
}
this.createItem();
this.showY = -16;
this.hideY = -118;
this.couldChange = !0;
this.beiBaoNode.y = this.showY;
this.openNow = !0;
cc.director.on("打开仓库", function(e, i) {
t.index == i && 0 == t.openNow && t.change(e);
}, this);
cc.director.on("强行打开背包", function(e) {
t.index == e && t.change(!0);
}, this);
this.durationCreate = 0;
cc.director.on("更新背包资源", function(e) {
t.index == e && t.clear();
}, this);
},
createItem: function() {
this.dataIndexArr = new Array();
this.data = globalData.getToolData();
for (var e = 0; e < this.data.length; e++) this.data[e].hp > 0 && this.data[e].roleIndex == this.index && this.dataIndexArr.push(e);
for (e = 0; e < this.content.children.length; e++) this.content.children[e].removeAllChildren(!0);
for (e = 0; e < this.dataIndexArr.length; e++) {
var t = cc.instantiate(this.itemTools);
t.parent = this.content.children[e];
t.position = cc.v2(0, 0);
t.getComponent("UI_tools").reset(this.dataIndexArr[e]);
}
cc.director.emit("背包数量发生变化", this.index);
},
clear: function() {
this.dataIndexArr = null;
this.durationCreate = .2;
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "打开背包":
this.couldChange && this.change(!this.openNow);
}
},
change: function(e) {
var t = this;
if (this.openNow != e) {
this.couldChange = !1;
cc.director.emit("背包打开", e, this.index);
var i = 0;
this.openNow = e;
var a = 180;
if (e) {
i = this.showY;
a = 0;
} else i = this.hideY;
cc.tween(this.beiBaoNode).to(.2, {
y: i
}, {
easing: "sineInOut"
}).call(function() {
t.couldChange = !0;
t.openNow;
}).start();
cc.tween(this.btnJianTou).to(.2, {
angle: a
}, {
easing: "sineInOut"
}).start();
}
},
update: function(e) {
if (this.durationCreate > 0) {
this.durationCreate -= e;
this.durationCreate <= 0 && this.createItem();
}
}
});
cc._RF.pop();
}, {} ],
btnAddToDesk: [ function(e, t) {
"use strict";
cc._RF.push(t, "67970yoOPxFxpIDevL9+Xsx", "btnAddToDesk");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
if ("vivo" != AD.chanelName && "oppo" != AD.chanelName1 && "QQ" != AD.chanelName1) this.node.active = !1; else if (AD.wuDianRate <= 0) {
this.node.active = !1;
return;
}
this.node.on("touchend", function() {
console.log("addToDesk");
AD.addToDesk();
}, this);
}
});
cc._RF.pop();
}, {} ],
btnChooseModeAct: [ function(e, t) {
"use strict";
cc._RF.push(t, "04f93vXdN9GRpdyhDP16D1N", "btnChooseModeAct");
cc.Class({
extends: cc.Component,
properties: {
index: 0
},
start: function() {
this.yuanY = this.node.y;
0 == this.index ? cc.tween(this.node).repeatForever(cc.tween().to(3, {
scale: .97,
y: this.yuanY - 5
}, {
easing: "sineInOut"
}).to(3, {
scale: 1,
y: this.yuanY + 5
}, {
easing: "sineInOut"
})).start() : 1 == this.index && cc.tween(this.node).repeatForever(cc.tween().to(3, {
scale: 1,
y: this.yuanY + 5
}, {
easing: "sineInOut"
}).to(3, {
scale: .97,
y: this.yuanY - 5
}, {
easing: "sineInOut"
})).start();
}
});
cc._RF.pop();
}, {} ],
btnMiYinSi: [ function(e, t) {
"use strict";
cc._RF.push(t, "262aba2GY9PDJn098D1bFJ4", "btnMiYinSi");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
btn: function() {
AD_android.yinSi();
}
});
cc._RF.pop();
}, {} ],
btnsControl: [ function(e, t) {
"use strict";
cc._RF.push(t, "5b670PULKdKC5Wt2UaDbBqL", "btnsControl");
cc.Class({
extends: cc.Component,
properties: {
roleIndex: 0,
btns: [ cc.Node ]
},
start: function() {
var e = this;
this.skinIndex = this.roleIndex;
this.reset(this.roleIndex);
cc.director.on("切换选中角色", function(t, i) {
t == e.roleIndex && e.reset(i);
}, this);
cc.director.on("选定皮肤", function(t) {
t != e.roleIndex && e.reset(e.skinIndex);
}, this);
},
reset: function(e) {
this.skinIndex = e;
switch (globalData.getSkinUnlockState(e)) {
case 3:
for (var t = 0; t < 4; t++) this.btns[t].active = 0 == t;
break;

case 0:
if (window.isSingle) for (t = 0; t < 4; t++) this.btns[t].active = 2 == t; else if (0 == this.roleIndex) for (t = 0; t < 4; t++) this.btns[t].active = 2 == t; else for (t = 0; t < 4; t++) this.btns[t].active = 3 == t;
break;

case 1:
if (window.isSingle) ; else if (0 == this.roleIndex) for (t = 0; t < 4; t++) this.btns[t].active = 3 == t; else for (t = 0; t < 4; t++) this.btns[t].active = 2 == t;
break;

case 2:
for (t = 0; t < 4; t++) this.btns[t].active = 1 == t;
}
this.btns[2].active = !1;
this.btns[3].active = !1;
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "解锁":
AD.showAD(this.unlockSucess, this);
break;

case "选择":
this.unlockSucess();
}
},
unlockSucess: function() {
globalData.setSkinUnlockState(this.roleIndex, this.skinIndex);
this.reset(this.skinIndex);
globalData.getRoleSkinIndexArr();
window.chooseRole.choosedArr[this.roleIndex] = !0;
this.scheduleOnce(function() {
if (window.isSingle) {
globalData.getRoleSkinIndexArr();
cc.director.loadScene("juQingScene");
} else if (window.chooseRole.choosedArr[0] && window.chooseRole.choosedArr[1]) {
globalData.getRoleSkinIndexArr();
cc.director.loadScene("juQingScene");
}
}, .1);
cc.director.emit("选定皮肤", this.roleIndex);
}
});
cc._RF.pop();
}, {} ],
buildBar: [ function(e, t) {
"use strict";
cc._RF.push(t, "9130bTt485LJqrBMeJ+RVDW", "buildBar");
cc.Class({
extends: cc.Component,
properties: {
bar: cc.Sprite
},
start: function() {},
reset: function(e, t) {
this.bar.fillRange = e;
cc.tween(this.bar).to(t, {
fillRange: 1
}).start();
}
});
cc._RF.pop();
}, {} ],
camera: [ function(e, t) {
"use strict";
cc._RF.push(t, "76aeaQu26BDxq1i8X9oR33z", "camera");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
player: cc.Node
},
start: function() {
window.isSingle && (this.node.active = -1 == this.index);
this.node.getComponent(cc.BoxCollider).width = cc.winSize.width / 2;
-1 == this.index && (this.node.getComponent(cc.BoxCollider).width = cc.winSize.width);
this.jsPlayer = this.player.getComponent("player");
},
update: function() {
if (this.jsPlayer.posYuan) switch (this.index) {
case 0:
this.node.position = cc.v2(this.jsPlayer.posYuan.x - cc.winSize.width / 4, this.jsPlayer.posYuan.y);
break;

case 1:
this.node.position = cc.v2(this.jsPlayer.posYuan.x + cc.winSize.width / 4, this.jsPlayer.posYuan.y);
break;

case -1:
this.node.position = this.jsPlayer.posYuan;
}
},
onCollisionEnter: function(e) {
if (6666 == e.tag) {
var t = e.node.getSiblingIndex();
e.node.active = !1;
cc.director.emit("显示区域", t);
}
}
});
cc._RF.pop();
}, {} ],
chooseRole: [ function(e, t) {
"use strict";
cc._RF.push(t, "f81bfTnLnJKRJ2rWUKy4OI1", "chooseRole");
cc.Class({
extends: cc.Component,
properties: {
singleNode: cc.Node,
doubleNode: cc.Node
},
start: function() {
AD.chaPing();
AD.showBanner();
window.chooseRole = this;
window.chooseRole.choosedArr = [ !1, !1 ];
this.singleNode.active = window.isSingle;
this.doubleNode.active = !window.isSingle;
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "返回":
cc.director.loadScene("menuScene");
globalData.clearData(window.isSingle);
}
}
});
cc._RF.pop();
}, {} ],
dialogMng_build: [ function(e, t) {
"use strict";
cc._RF.push(t, "9cd6aisT7xNIpAz8hQances", "dialogMng_build");
cc.Class({
extends: cc.Component,
properties: {
built_water: cc.Prefab,
built_yingDi: cc.Prefab,
built_yeLianLu: cc.Prefab,
built_gongZuoTai: cc.Prefab,
baoXiangDialog: cc.Prefab
},
start: function() {
var e = this;
cc.director.on("打开营地", function(t) {
if (0 != e.check(e.built_yingDi.name, t)) {
var i = cc.instantiate(e.built_yingDi);
i.parent = e.node;
i.position = e.getPos(t);
e.showChaPing();
}
}, this);
cc.director.on("打开淡水收集器", function(t) {
if (0 != e.check(e.built_water.name, t)) {
var i = cc.instantiate(e.built_water);
i.parent = e.node;
i.position = e.getPos(t);
e.showChaPing();
}
}, this);
cc.director.on("打开冶炼炉", function(t) {
if (0 != e.check(e.built_yeLianLu.name, t)) {
var i = cc.instantiate(e.built_yeLianLu);
i.parent = e.node;
i.position = e.getPos(t);
e.showChaPing();
}
}, this);
cc.director.on("打开工作台", function(t) {
if (0 != e.check(e.built_gongZuoTai.name, t)) {
var i = cc.instantiate(e.built_gongZuoTai);
i.parent = e.node;
i.position = e.getPos(t);
e.showChaPing();
}
}, this);
cc.director.on("打开宝箱", function(t) {
if (0 != e.check(e.baoXiangDialog.name, t)) {
var i = cc.instantiate(e.baoXiangDialog);
i.parent = e.node;
i.position = e.getPos(t);
e.showChaPing();
}
}, this);
},
check: function(e, t) {
for (var i = !0, a = 0; a < this.node.children.length; a++) if (this.node.children[a].name == e) {
i = !1;
break;
}
if (0 == i) switch (e) {
case "弹窗_淡水收集器":
cc.director.emit("系统提示", "淡水收集器正在使用中", t);
break;

case "弹窗_营地":
cc.director.emit("系统提示", "营地正在使用中", t);
break;

case "弹窗_冶炼炉":
cc.director.emit("系统提示", "冶炼炉正在使用中", t);
break;

case "弹窗_工作台":
cc.director.emit("系统提示", "工作台正在使用中", t);
break;

case "弹窗_宝箱":
cc.director.emit("系统提示", "宝箱已被打开", t);
}
return i;
},
getPos: function(e) {
var t;
t = window.isSingle ? 0 : 0 == e ? -cc.winSize.width / 4 : cc.winSize.width / 4;
return cc.v2(t, 0);
},
showChaPing: function() {
if (window.gameScene.secondShowChaPing >= 30) {
AD.chaPing();
window.gameScene.secondShowChaPing = 0;
}
}
});
cc._RF.pop();
}, {} ],
dialogYinSi: [ function(e, t) {
"use strict";
cc._RF.push(t, "4e8aaVwPbpNiqwhAAearZYZ", "dialogYinSi");
cc.Class({
extends: cc.Component,
properties: {
panel1: cc.Node,
panelYinSi: cc.Node,
panelXieYi: cc.Node
},
onEnable: function() {
this.resetDialog(this.node, !0);
this.panel1.active = !0;
this.panelYinSi.active = !1;
this.panelXieYi.active = !1;
},
btnCallBack: function(e, t) {
switch (t) {
case "同意":
this.resetDialog(this.node, !1);
if (window.showYinSi) ; else {
cc.sys.localStorage.setItem(window.key_yinSi, 1);
this.node.parent.getComponent("yinSiPanel").checkPermission();
}
break;

case "不同意":
cc.game.end();
"vivo" == AD.chanelName ? qg.exitApplication() : "oppo" == AD.chanelName ? qg.exitApplication({
success: function() {},
fail: function() {},
complete: function() {}
}) : "QQ" == AD.chanelName && qq.exitMiniProgram({});
break;

case "关闭1":
this.resetDialog(this.node, !1);
break;

case "关闭隐私":
this.panelYinSi.active = !1;
this.panel1.active = !0;
break;

case "关闭用户协议":
this.panelXieYi.active = !1;
this.panel1.active = !0;
break;

case "隐私政策":
this.panel1.active = !1;
this.panelYinSi.active = !0;
break;

case "用户协议":
this.panel1.active = !1;
this.panelXieYi.active = !0;
}
},
resetDialog: function(e, t) {
var i = e.getChildByName("zheZhao"), a = e.getChildByName("bg");
if (t) {
e.active = !0;
i.opacity = 0;
a.scale = 0;
cc.tween(i).to(.2, {
opacity: 180
}).start();
cc.tween(a).to(.2, {
scale: 1
}).start();
} else {
cc.tween(i).to(.2, {
opacity: 0
}).start();
cc.tween(a).to(.2, {
scale: 0
}).call(function() {
e.active = !1;
}).start();
}
},
resetDialog2: function(e, t) {
var i = e.getChildByName("zheZhao"), a = e.getChildByName("bg");
if (t) {
e.active = !0;
i.opacity = 0;
a.scale = 0;
cc.tween(i).to(.2, {
opacity: 180
}).start();
cc.tween(a).to(.2, {
scale: 1
}).start();
} else {
cc.tween(i).to(.2, {
opacity: 0
}).start();
cc.tween(a).to(.2, {
scale: 0
}).call(function() {
e.destroy();
}).start();
}
}
});
cc._RF.pop();
}, {} ],
dialog_build_gongZuoTai_item: [ function(e, t) {
"use strict";
cc._RF.push(t, "375b0fKE6VM0qmc/sV68qBQ", "dialog_build_gongZuoTai_item");
cc.Class({
extends: cc.Component,
properties: {
btnJieSuo: cc.Node,
btnJieSuoAD: cc.Node,
hurtNumLabel: cc.Label,
iconSpriBg: cc.Sprite,
sprIconSpriBgArr: [ cc.SpriteFrame ],
iconSpri: cc.Sprite,
sprArr: [ cc.SpriteFrame ],
boxHaoCaiDi: cc.Node,
haoCaiIconArr: [ cc.SpriteFrame ],
descSpr: cc.Sprite,
descSprArr: [ cc.SpriteFrame ]
},
onLoad: function() {
var e = this;
cc.director.on("背包数量发生变化", function(t) {
t == e.roleIndex && e.checkEnough();
}, this);
},
reset: function(e, t) {
var i = this;
this.roleIndex = e;
this.index = t;
this.haoCaiTypeArr = [ "木头", "石头", "草", "铁块" ];
this.iconSpri.spriteFrame = this.sprArr[t - 1];
this.descSpr.spriteFrame = this.descSprArr[t - 1];
this.hurtNumLabel.string = "+" + window.jsonTool[this.index].Gongju_Hurt;
var a = window.jsonTool[this.index].Gongju_Price;
this.haoCaiArr = new Array();
for (var o = 0; o < this.boxHaoCaiDi.parent.children.length; o++) this.boxHaoCaiDi.parent.children[o] != this.boxHaoCaiDi && this.boxHaoCaiDi.parent.children[o].destroy();
var n = 1;
3 == globalData.roleSkinIndexArr[e] && (n = .7);
a = Tools.strToArr(a, ",");
this.numLabelArr = new Array();
for (o = 0; o < a.length; o++) {
this.haoCaiArr.push(Math.round(parseInt(a[o]) * n));
if (this.haoCaiArr[o] > 0) {
var s = this.boxHaoCaiDi;
0 != o && ((s = cc.instantiate(this.boxHaoCaiDi)).parent = this.boxHaoCaiDi.parent);
cc.find("icon", s).getComponent(cc.Sprite).spriteFrame = this.haoCaiIconArr[o];
cc.find("数量", s).getComponent(cc.Label).string = this.haoCaiArr[o];
this.numLabelArr.push(cc.find("数量", s));
} else this.numLabelArr.push(null);
}
var c;
this.type = window.jsonTool[this.index].Gongju_Name;
c = this.type.indexOf("木") >= 0 ? 0 : this.type.indexOf("石") >= 0 ? 1 : 2;
this.iconSpriBg.spriteFrame = this.sprIconSpriBgArr[c];
this.btnJieSuo.active = this.isEnough();
this.btnJieSuoAD.active = !1;
cc.director.on("工作台重置按钮", function() {
i.btnJieSuo.active = i.isEnough();
i.btnJieSuoAD.active = !1;
}, this);
this.checkEnough();
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "解锁":
if (globalData.getToolDataBeiBao(this.roleIndex) < 8) {
this.unlock();
cc.director.emit("工作台重置按钮");
} else cc.director.emit("系统提示", "背包空间不足,无法建造", this.roleIndex);
break;

case "解锁AD":
this.unlockAD();
break;
}
},
unlockAD: function() {
this.hp = globalData.getWuPinHp(this.type);
var e = {
name: this.type,
hp: this.hp,
roleIndex: this.roleIndex
};
0 == globalData.addToolData(e) ? cc.director.emit("系统提示", "背包空间不足", this.roleIndex) : cc.director.emit("更新背包资源", this.roleIndex);
},
onEnable: function() {
var e = this;
this.scheduleOnce(function() {
e.checkEnough();
}, .05);
},
unlock: function() {
for (var e = 0; e < this.haoCaiArr.length; e++) this.haoCaiArr[e] > 0 && globalData.setToolNumInBeiBao(this.roleIndex, this.haoCaiTypeArr[e], -this.haoCaiArr[e]);
this.unlockAD();
},
checkEnough: function() {
for (var e = 0; e < this.haoCaiArr.length; e++) this.haoCaiArr[e] > 0 && (globalData.getToolNumInBeiBao(this.roleIndex, this.haoCaiTypeArr[e]) < this.haoCaiArr[e] ? this.numLabelArr[e].color = new cc.Color(255, 0, 0) : this.numLabelArr[e].color = new cc.Color(255, 255, 255));
},
isEnough: function() {
for (var e = !0, t = 0; t < this.haoCaiArr.length; t++) if (this.haoCaiArr[t] > 0 && globalData.getToolNumInBeiBao(this.roleIndex, this.haoCaiTypeArr[t]) < this.haoCaiArr[t]) {
e = !1;
break;
}
return e;
}
});
cc._RF.pop();
}, {} ],
dialog_build_gongZuoTai: [ function(e, t) {
"use strict";
cc._RF.push(t, "6bf21CnYfJOkIcaqXltlpz1", "dialog_build_gongZuoTai");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Node
},
start: function() {
Tools.resetDialog2(this.node, !0);
this.index = 0;
if (window.isSingle) this.node.width = cc.winSize.width; else {
this.node.width = cc.winSize.width / 2;
this.node.x < 0 ? this.index = 0 : this.index = 1;
}
cc.director.emit("强行打开背包", this.index);
this.reset();
},
reset: function() {
for (var e = 1; e < window.jsonTool.length - 1; e++) if (1 == e) this.item.getComponent("dialog_build_gongZuoTai_item").reset(this.index, e); else {
var t = cc.instantiate(this.item);
t.parent = this.item.parent;
t.getComponent("dialog_build_gongZuoTai_item").reset(this.index, e);
}
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "关闭":
Tools.resetDialog2(this.node, !1);
}
}
});
cc._RF.pop();
}, {} ],
dialog_build_water: [ function(e, t) {
"use strict";
cc._RF.push(t, "1725f013aRA878qxyDWYBSY", "dialog_build_water");
cc.Class({
extends: cc.Component,
properties: {
bar: cc.Sprite,
numLabel: cc.Label
},
start: function() {
var e = this;
Tools.resetDialog2(this.node, !0);
this.index = 0;
if (window.isSingle) this.node.width = cc.winSize.width; else {
this.node.width = cc.winSize.width / 2;
this.node.x < 0 ? this.index = 0 : this.index = 1;
}
cc.director.emit("强行打开背包", this.index);
this.reset();
this.schedule(function() {
e.reset();
}, 1);
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "关闭":
Tools.resetDialog2(this.node, !1);
break;

case "收集":
if (this.numGet > 0) {
var i = {
name: "水",
hp: 1,
roleIndex: this.index
};
if (0 == globalData.addToolData(i)) this.getLose(); else {
this.getSucess();
cc.director.emit("更新背包资源", this.index);
}
} else cc.director.emit("系统提示", "还未完成收集", this.index);
}
},
getLose: function() {
cc.director.emit("系统提示", "背包空间不足", this.index);
},
getSucess: function() {
globalData.setBuildData("淡水时间", -20);
this.reset();
},
reset: function() {
var e = globalData.getBuildData("淡水时间");
this.numGet = parseInt(e / 20);
this.numGet > 5 && (this.numGet = 5);
this.numLabel.string = this.numGet;
this.bar.fillRange = e % 20 / 20;
}
});
cc._RF.pop();
}, {} ],
dialog_build_yeLianLu: [ function(e, t) {
"use strict";
cc._RF.push(t, "23936Gt3o1BUYqyKYRmAhh2", "dialog_build_yeLianLu");
cc.Class({
extends: cc.Component,
properties: {
numLabel_mood: cc.Label,
numLabel_tieKuang: cc.Label,
numLabel_tieKuai: cc.Label,
bar: cc.Sprite,
btnYeLian: cc.Node,
btnJia: cc.Node,
btnJian: cc.Node
},
start: function() {
var e = this;
Tools.resetDialog2(this.node, !0);
Tools.resetDialog2(this.node, !0);
this.index = 0;
if (window.isSingle) this.node.width = cc.winSize.width; else {
this.node.width = cc.winSize.width / 2;
this.node.x < 0 ? this.index = 0 : this.index = 1;
}
cc.director.emit("强行打开背包", this.index);
this.numNow = globalData.getBuildData("冶炼中数量");
this.numLabel_mood.string = "" + this.numNow;
this.numLabel_tieKuang.string = "" + this.numNow;
this.numLabel_tieKuai.string = "" + globalData.getBuildData("冶炼完成数量");
this.resetBtn();
this.schedule(function() {
e.resetBtn();
}, 1);
},
resetBtn: function() {
this.yeLianZhongNum = globalData.getBuildData("冶炼中数量");
this.hadCompleteNum = globalData.getBuildData("冶炼完成数量");
this.btnYeLian.active = !1;
this.btnJia.active = this.btnJian.active = !1;
if (this.yeLianZhongNum > 0) {
this.numLabel_mood.string = "" + globalData.getBuildData("冶炼中数量");
this.numLabel_tieKuang.string = "" + globalData.getBuildData("冶炼中数量");
this.numLabel_tieKuai.string = "" + globalData.getBuildData("冶炼完成数量");
} else {
this.bar.fillRange = 0;
if (this.hadCompleteNum <= 0) {
this.numLabel_mood.string = "" + this.numNow;
this.numLabel_tieKuai.string = "" + this.numNow;
this.numLabel_tieKuang.string = "" + this.numNow;
this.btnYeLian.active = this.numNow > 0;
this.btnJia.active = this.btnJian.active = !0;
} else {
this.numLabel_mood.string = "" + globalData.getBuildData("冶炼中数量");
this.numLabel_tieKuang.string = "" + globalData.getBuildData("冶炼中数量");
this.numLabel_tieKuai.string = "" + globalData.getBuildData("冶炼完成数量");
}
}
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "关闭":
Tools.resetDialog2(this.node, !1);
break;

case "+":
this.getMore();
this.resetBtn();
break;

case "-":
if (this.numNow <= 0) return;
this.numNow--;
this.numLabel_mood.string = "" + this.numNow;
this.numLabel_tieKuai.string = "" + this.numNow;
this.numLabel_tieKuang.string = "" + this.numNow;
this.resetBtn();
break;

case "收集":
if (globalData.getBuildData("冶炼完成数量") > 0) {
var i = {
name: "铁块",
hp: 1,
roleIndex: this.index
};
if (0 == globalData.addToolData(i)) this.getLose(); else {
this.getSucess();
cc.director.emit("更新背包资源", this.index);
}
} else cc.director.emit("系统提示", "没有可收集的资源", this.index);
break;

case "冶炼":
globalData.setToolNumInBeiBao(this.index, "木头", -this.numNow);
globalData.setToolNumInBeiBao(this.index, "铁矿", -this.numNow);
globalData.setBuildData("冶炼时间初重置");
globalData.setBuildData("冶炼中数量", this.numNow);
this.resetBtn();
this.numNow = 0;
}
},
getLose: function() {
cc.director.emit("系统提示", "背包空间不足", this.index);
},
getSucess: function() {
globalData.setBuildData("冶炼完成数量", -1);
this.numLabel_tieKuai.string = "" + globalData.getBuildData("冶炼完成数量");
this.numNow = 0;
this.resetBtn();
},
getMore: function() {
if (globalData.getToolNumInBeiBao(this.index, "木头") - this.numNow <= 0) {
cc.director.emit("系统提示", "木头数量不足", this.index);
console.log("铁矿数量不足");
} else if (globalData.getToolNumInBeiBao(this.index, "铁矿") - this.numNow <= 0) {
cc.director.emit("系统提示", "铁矿数量不足", this.index);
console.log("铁矿数量不足");
} else {
this.numNow++;
this.numLabel_mood.string = "" + this.numNow;
this.numLabel_tieKuai.string = "" + this.numNow;
this.numLabel_tieKuang.string = "" + this.numNow;
}
},
update: function() {
if (!(this.yeLianZhongNum <= 0)) {
var e = globalData.getBuildData("冶炼时间") / globalData.yeLianDuration;
this.bar.fillRange = e;
}
}
});
cc._RF.pop();
}, {} ],
dialog_build_yingDi_build_item: [ function(e, t) {
"use strict";
cc._RF.push(t, "f633bpESGpA4IwEvO23xWvd", "dialog_build_yingDi_build_item");
cc.Class({
extends: cc.Component,
properties: {
btnJieSuo: cc.Node,
btnYiJieSuo: cc.Node,
iconSpri: cc.Sprite,
sprArr: [ cc.SpriteFrame ],
boxHaoCaiDi: cc.Node,
haoCaiIconArr: [ cc.SpriteFrame ],
descSpr: cc.Sprite,
descSprArr: [ cc.SpriteFrame ]
},
onLoad: function() {
var e = this;
cc.director.on("背包数量发生变化", function(t) {
t == e.roleIndex && e.checkEnough();
}, this);
},
reset: function(e, t) {
this.roleIndex = e;
this.index = t;
this.haoCaiTypeArr = [ "木头", "石头", "草", "铁块" ];
this.iconSpri.spriteFrame = this.sprArr[t];
this.descSpr.spriteFrame = this.descSprArr[t];
this.nameBuild = globalData.getBuildJson("名称", this.index);
var i = globalData.getBuildJson("消耗", this.index);
this.haoCaiArr = new Array();
for (var a = 0; a < this.boxHaoCaiDi.parent.children.length; a++) this.boxHaoCaiDi.parent.children[a] != this.boxHaoCaiDi && this.boxHaoCaiDi.parent.children[a].destroy();
i = Tools.strToArr(i, ",");
this.numLabelArr = new Array();
for (a = 0; a < i.length; a++) {
this.haoCaiArr.push(parseInt(i[a]));
if (this.haoCaiArr[a] > 0) {
var o = this.boxHaoCaiDi;
0 != a && ((o = cc.instantiate(this.boxHaoCaiDi)).parent = this.boxHaoCaiDi.parent);
cc.find("icon", o).getComponent(cc.Sprite).spriteFrame = this.haoCaiIconArr[a];
cc.find("数量", o).getComponent(cc.Label).string = this.haoCaiArr[a];
this.numLabelArr.push(cc.find("数量", o));
} else this.numLabelArr.push(null);
}
this.durationBuild = globalData.getBuildJson("建造时长", this.index);
this.unlockState = globalData.getBuildData("建筑解锁状态", this.index);
this.btnJieSuo.active = 0 == this.unlockState;
this.btnYiJieSuo.active = 0 != this.unlockState;
this.checkEnough();
},
onEnable: function() {
var e = this;
this.scheduleOnce(function() {
e.checkEnough();
}, .05);
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "解锁":
this.unlock();
}
},
checkEnough: function() {
for (var e = 0; e < this.haoCaiArr.length; e++) this.haoCaiArr[e] > 0 && (globalData.getToolNumInBeiBao(this.roleIndex, this.haoCaiTypeArr[e]) < this.haoCaiArr[e] ? this.numLabelArr[e].color = new cc.Color(255, 0, 0) : this.numLabelArr[e].color = new cc.Color(255, 255, 255));
},
unlock: function() {
for (var e = !0, t = 0; t < this.haoCaiArr.length; t++) if (this.haoCaiArr[t] > 0 && globalData.getToolNumInBeiBao(this.roleIndex, this.haoCaiTypeArr[t]) < this.haoCaiArr[t]) {
e = !1;
break;
}
console.log("资源充足吗?  " + e);
if (e) {
for (t = 0; t < this.haoCaiArr.length; t++) this.haoCaiArr[t] > 0 && globalData.setToolNumInBeiBao(this.roleIndex, this.haoCaiTypeArr[t], -this.haoCaiArr[t]);
globalData.setBuildData("建筑解锁状态", this.index, 1);
this.unlockState = globalData.getBuildData("建筑解锁状态", this.index);
this.btnJieSuo.active = 0 == this.unlockState;
this.btnYiJieSuo.active = 0 != this.unlockState;
cc.director.emit("解锁建筑", this.index, this.roleIndex);
} else cc.director.emit("系统提示", "资源数量不足", this.roleIndex);
}
});
cc._RF.pop();
}, {} ],
dialog_build_yingDi_build: [ function(e, t) {
"use strict";
cc._RF.push(t, "656a8JpNc1OBKNE5fjpDrhy", "dialog_build_yingDi_build");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Node
},
reset: function(e) {
this.index = e;
var t = 6;
"骷髅岛" == globalData.modeType && (t = 5);
for (var i = 0; i < t; i++) if (0 == i) this.item.getComponent("dialog_build_yingDi_build_item").reset(this.index, i); else {
var a = cc.instantiate(this.item);
a.parent = this.item.parent;
a.getComponent("dialog_build_yingDi_build_item").reset(this.index, i);
}
},
start: function() {},
update: function() {}
});
cc._RF.pop();
}, {} ],
dialog_build_yingDi_fire: [ function(e, t) {
"use strict";
cc._RF.push(t, "bd82eBAADNP8qofaeZW2jLI", "dialog_build_yingDi_fire");
cc.Class({
extends: cc.Component,
properties: {
btnFire: cc.Node,
tipsFiring: cc.Node,
btnGetFood: cc.Node,
btnAddMood: cc.Node,
iconFood: cc.Node,
barFire: cc.Sprite,
barKaoZhi: cc.Sprite,
numLabel_mood: cc.Label,
numLabel_shengRou: cc.Label,
numLabel_shuRou: cc.Label,
iconShengRou: cc.Sprite,
iconShuRou: cc.Sprite,
sprShengRouArr: [ cc.SpriteFrame ],
sprShuRouArr: [ cc.SpriteFrame ]
},
onLoad: function() {
this.act = cc.tween(this.btnAddMood).repeatForever(cc.tween().to(.3, {
scale: 1.1
}).to(.3, {
scale: 1
}));
this.actFood = cc.tween(this.iconFood).repeatForever(cc.tween().to(.3, {
scale: 1.1
}).to(.3, {
scale: 1
}));
},
start: function() {},
reset: function(e) {
var t = this;
this.index = e;
window.indexOfBuildDialog = this.index;
this.resetFire(!0);
this.schedule(function() {
t.resetFire();
}, 1);
cc.director.on("放入生肉", function(e, i) {
if (e == t.index && (null == globalData.getBuildData("烤箱生肉类型") || globalData.getBuildData("烤箱生肉类型") == i)) {
globalData.setBuildData("烤箱生肉类型", i);
globalData.setBuildData("烤箱生肉数", 1);
console.log("放入生肉: " + i);
t.resetRouSpr();
}
}, this);
cc.director.on("放入木头", function(e) {
e == t.index && globalData.setBuildData("烧火木头", 1);
}, this);
this.resetRouSpr();
},
resetRouSpr: function() {
var e = -1;
"生肉" == globalData.getBuildData("烤箱生肉类型") ? e = 0 : "生螃蟹" == globalData.getBuildData("烤箱生肉类型") ? e = 1 : "生鱼肉" == globalData.getBuildData("烤箱生肉类型") && (e = 2);
if (-1 == e) {
this.iconShengRou.node.parent.active = !1;
this.iconShuRou.node.parent.active = !1;
} else {
this.iconShengRou.node.parent.active = !0;
this.iconShuRou.node.parent.active = !0;
this.iconShengRou.spriteFrame = this.sprShengRouArr[e];
this.iconShuRou.spriteFrame = this.sprShuRouArr[e];
}
},
onEnable: function() {
window.typeOfBuildDialog = "生火";
console.log("window.typeOfBuildDialog  " + window.typeOfBuildDialog);
window.indexOfBuildDialog = this.index;
this.barKaoZhi.fillRange = globalData.getBuildData("烤箱烤制时间") / globalData.kaoZhiDuration;
var e = globalData.getBuildData("点燃中");
this.tipsFiring.active = e;
this.btnFire.active = !e;
e ? this.actFood.start() : this.actFood.stop();
},
onDisable: function() {
window.typeOfBuildDialog = null;
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "点火":
if (globalData.getBuildData("点燃中")) {
cc.director.emit("系统提示", "火堆已经点燃", this.index);
return;
}
if (globalData.getBuildData("烧火木头") <= 0) {
cc.director.emit("系统提示", "需要添加木头", this.index);
this.act.start();
return;
}
this.tipsFiring.active = !0;
this.btnFire.active = !1;
this.act.stop();
this.actFood.start();
globalData.setBuildData("点燃中");
this.resetFire();
break;

case "收集熟肉":
if (globalData.getBuildData("烤箱熟肉数") <= 0) return;
var i = "熟肉";
"生鱼肉" == globalData.getBuildData("烤箱生肉类型") ? i = "熟鱼肉" : "生螃蟹" == globalData.getBuildData("烤箱生肉类型") && (i = "熟螃蟹");
var a = {
name: i,
hp: 1,
roleIndex: this.index
};
if (0 == globalData.addToolData(a)) this.getLose(); else {
this.getSucess();
cc.director.emit("更新背包资源", this.index);
}
break;

case "填木头":
if (globalData.getToolNumInBeiBao(this.index, "木头") > 0) {
globalData.setToolNumInBeiBao(this.index, "木头", -1);
globalData.setBuildData("烧火木头", 1);
} else cc.director.emit("系统提示", "木头数量不足", this.index);
break;

case "添加食物":
cc.director.emit("系统提示", "请在背包里选择需要烤制的食物", this.index);
}
},
getLose: function() {
cc.director.emit("系统提示", "背包空间不足", this.index);
},
getSucess: function() {
globalData.setBuildData("烤箱熟肉数", -1);
var e = globalData.getBuildData("烤箱生肉数"), t = globalData.getBuildData("烤箱熟肉数");
e <= 0 && t <= 0 && globalData.setBuildData("烤箱生肉类型", null);
this.resetRouSpr();
},
resetFire: function(e) {
if (globalData.getBuildData("点燃中")) {
var t = globalData.getBuildData("烧火时间") % globalData.fireMoodDuration / globalData.fireMoodDuration;
e && (this.barFire.fillRange = t);
cc.tween(this.barFire).to(1, {
fillRange: t
}).start();
} else this.barFire.fillRange = 0;
},
update: function(e) {
this.numLabel_mood.string = globalData.getBuildData("烧火木头");
this.numLabel_shengRou.string = globalData.getBuildData("烤箱生肉数");
this.numLabel_shuRou.string = globalData.getBuildData("烤箱熟肉数");
var t = globalData.getBuildData("烤箱烤制时间") / globalData.kaoZhiDuration;
this.barKaoZhi.fillRange < t ? this.barKaoZhi.fillRange += e : this.barKaoZhi.fillRange = t;
}
});
cc._RF.pop();
}, {} ],
dialog_build_yingDi: [ function(e, t) {
"use strict";
cc._RF.push(t, "78566L6JwVDb51/LXCOhEnp", "dialog_build_yingDi");
cc.Class({
extends: cc.Component,
properties: {
buildNode: cc.Node,
fireNode: cc.Node
},
onLoad: function() {
Tools.resetDialog2(this.node, !0);
},
start: function() {
var e = this;
this.index = 0;
if (window.isSingle) this.node.width = cc.winSize.width; else {
this.node.width = cc.winSize.width / 2;
this.node.x < 0 ? this.index = 0 : this.index = 1;
}
cc.director.emit("强行打开背包", this.index);
this.buildNode.getComponent("dialog_build_yingDi_build").reset(this.index);
this.fireNode.getComponent("dialog_build_yingDi_fire").reset(this.index);
cc.director.on("解锁建筑", function() {
Tools.resetDialog2(e.node, !1);
}, this);
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "关闭":
Tools.resetDialog2(this.node, !1);
}
},
update: function() {}
});
cc._RF.pop();
}, {} ],
dialog_over_level_btnGoOn: [ function(e, t) {
"use strict";
cc._RF.push(t, "a5ad0ubW95Iu5MP51X8OJiF", "dialog_over_level_btnGoOn");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.scale = 0;
},
start: function() {
var e = this;
this.chooseNum = [ 0, 0 ];
this.node.scale = 0;
cc.director.on("过关奖励选择完毕", function(t) {
e.chooseNum[t] = 1;
window.isSingle ? 1 == e.chooseNum[0] && e.show() : 1 == e.chooseNum[0] && 1 == e.chooseNum[1] && e.show();
}, this);
},
show: function() {
cc.director.resume();
cc.tween(this.node).to(.2, {
scale: 1
}).call(function() {
cc.director.pause();
}).start();
},
btnCallBack: function() {
window.audioMng.playSfx("按钮");
cc.director.emit("关闭过关结算");
this.node.destroy();
}
});
cc._RF.pop();
}, {} ],
dialog_over_level: [ function(e, t) {
"use strict";
cc._RF.push(t, "255f7vABLBF26ZZHaXQTIWe", "dialog_over_level");
cc.Class({
extends: cc.Component,
properties: {
btnGoOn: cc.Prefab,
itemArr: [ cc.Node ],
sprArr: [ cc.SpriteFrame ],
sprBgArr: [ cc.SpriteFrame ],
sprDescArr: [ cc.SpriteFrame ]
},
onLoad: function() {},
start: function() {
var e = this;
this.index = 0;
if (window.isSingle) this.node.width = cc.winSize.width; else {
this.node.width = cc.winSize.width / 2;
this.node.x < 0 ? this.index = 0 : this.index = 1;
}
cc.director.on("关闭过关结算", function() {
cc.director.resume();
Tools.resetDialog2(e.node, !1);
window.couldDayTime = !0;
}, this);
0 == this.index && (cc.instantiate(this.btnGoOn).parent = this.node.parent);
Tools.resetDialog2(this.node, !0);
this.arr = new Array();
for (var t = 0; t < 14; t++) this.arr.push(t);
this.arr = Tools.getNewArr(this.arr, this.arr.length);
this.create();
this.couldClick = [ !0, !0, !0 ];
this.scheduleOnce(function() {
cc.director.pause();
}, .3);
},
onDisable: function() {
AD.hideBanner();
},
btnCallBack: function(e) {
var t = this;
window.audioMng.playSfx("按钮");
var i = e.target.getSiblingIndex();
if (0 != this.couldClick[i]) {
this.couldClick[i] = !1;
this.scheduleOnce(function() {
t.couldClick[i] = !0;
}, 1);
this.btnIndex = i;
this.typeIndex = this.arr[i];
console.log(i + " 选择的类型是 " + this.typeIndex);
cc.find("AD", this.itemArr[this.btnIndex]).active || this.reward();
}
},
reward: function() {
cc.director.emit("过关奖励选择完毕", this.index);
cc.find("AD", this.itemArr[this.btnIndex]).active = !1;
cc.find("选择", this.itemArr[this.btnIndex]).active = !0;
for (var e = 0; e < 3; e++) {
var t = this.itemArr[e];
if (0 == cc.find("选择", t).active) {
cc.find("AD", t).active = !1;
this.couldClick[e] = !1;
}
}
switch (this.typeIndex) {
case 0:
cc.director.emit("百分比回血", this.index, .2);
break;

case 1:
cc.director.emit("百分比加饱食度", this.index, .15);
break;

case 2:
cc.director.emit("百分比补水", this.index, .15);
break;

case 3:
globalData.setJieSuanData(this.index, "攻击加成", .1);
break;

case 4:
globalData.setJieSuanData(this.index, "移速加成", .1);
break;

case 5:
globalData.setJieSuanData(this.index, "血量上限加成", .1);
break;

case 6:
var i = window.gameScene.roleArr[this.index];
for (e = 0; e < 2; e++) cc.director.emit("掉落物资", "木头", cc.v2(i.x, i.y + 50), this.index);
break;

case 7:
for (i = window.gameScene.roleArr[this.index], e = 0; e < 2; e++) cc.director.emit("掉落物资", "石头", cc.v2(i.x, i.y + 50), this.index);
break;

case 8:
for (i = window.gameScene.roleArr[this.index], e = 0; e < 2; e++) cc.director.emit("掉落物资", "草", cc.v2(i.x, i.y + 50), this.index);
break;

case 9:
for (i = window.gameScene.roleArr[this.index], e = 0; e < 1; e++) cc.director.emit("掉落物资", "铁块", cc.v2(i.x, i.y + 50), this.index);
break;

case 10:
for (i = window.gameScene.roleArr[this.index], e = 0; e < 1; e++) cc.director.emit("掉落物资", "胡萝卜", cc.v2(i.x, i.y + 50), this.index);
break;

case 11:
for (i = window.gameScene.roleArr[this.index], e = 0; e < 1; e++) cc.director.emit("掉落物资", "浆果", cc.v2(i.x, i.y + 50), this.index);
break;

case 12:
for (i = window.gameScene.roleArr[this.index], e = 0; e < 1; e++) cc.director.emit("掉落物资", "生肉", cc.v2(i.x, i.y + 50), this.index);
break;

case 13:
for (i = window.gameScene.roleArr[this.index], e = 0; e < 1; e++) cc.director.emit("掉落物资", "生鱼肉", cc.v2(i.x, i.y + 50), this.index);
}
},
create: function() {
for (var e = 0; e < 3; e++) {
var t = this.itemArr[e], i = this.arr[e], a = this.getNum(i);
a > 0 ? cc.find("num", t).getComponent(cc.Label).string = "x" + a : cc.find("num", t).active = !1;
cc.find("spr", t).getComponent(cc.Sprite).spriteFrame = this.sprArr[i];
t.getComponent(cc.Sprite).spriteFrame = this.sprBgArr[this.getBgIndex(i)];
cc.find("desc", t).getComponent(cc.Sprite).spriteFrame = this.sprDescArr[i];
cc.find("AD", t).active = !1;
cc.find("选择", t).active = !1;
}
},
getNum: function(e) {
var t = 0;
switch (e) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
break;

case 6:
case 7:
case 8:
t = 2;
break;

case 9:
case 10:
case 11:
case 12:
case 13:
t = 1;
}
return t;
},
getBgIndex: function(e) {
var t = 0;
switch (e) {
case 6:
case 7:
case 8:
case 9:
t = 1;
break;

case 10:
case 11:
case 12:
case 13:
t = 2;
}
return t;
}
});
cc._RF.pop();
}, {} ],
dialog_over_mng: [ function(e, t) {
"use strict";
cc._RF.push(t, "e15e9juDpFHdIJRj+ttYgc2", "dialog_over_mng");
cc.Class({
extends: cc.Component,
properties: {
levelComplete: cc.Prefab,
reviveNode: cc.Prefab,
winNode: cc.Prefab,
winAnimNode: cc.Prefab,
pauseNode: cc.Prefab,
tipsOneDay: cc.Prefab
},
start: function() {
var e = this;
cc.director.on("游戏中弹窗", function(t) {
e.createDialog(t);
}, this);
cc.director.on("关闭过关结算", function() {
e._tips && e._tips.destroy();
}, this);
},
createDialog: function(e) {
switch (e) {
case "过关":
AD.chaPing();
AD.showBanner();
if (window.isSingle) {
(i = cc.instantiate(this.levelComplete)).parent = this.node;
i.x = 0;
} else for (var t = 0; t < 2; t++) {
(i = cc.instantiate(this.levelComplete)).parent = this.node;
i.x = 0 == t ? -cc.winSize.width / 4 : cc.winSize.width / 4;
}
this._tips = cc.instantiate(this.tipsOneDay);
this._tips.parent = this.node;
this._tips.zIndex = 1;
break;

case "暂停":
AD.chaPing();
AD.showBanner();
(i = cc.instantiate(this.pauseNode)).parent = this.node;
break;

case "复活":
AD.chaPing();
AD.showBanner();
(i = cc.instantiate(this.reviveNode)).parent = this.node;
break;

case "通关":
AD.chaPing(!0);
AD.showBanner();
(i = cc.instantiate(this.winNode)).parent = this.node;
break;

case "通关动画":
var i;
(i = cc.instantiate(this.winAnimNode)).parent = this.node;
}
}
});
cc._RF.pop();
}, {} ],
dialog_over_win: [ function(e, t) {
"use strict";
cc._RF.push(t, "2795cabFXVBKJVSeUxWqi+x", "dialog_over_win");
cc.Class({
extends: cc.Component,
properties: {
daysLabel: cc.Label,
npcLabel: cc.Label,
moodLabel: cc.Label,
shiTouLabel: cc.Label,
caoLabel: cc.Label,
tieKuangLabel: cc.Label,
bestLabel: cc.Label
},
start: function() {
Tools.resetDialog2(this.node, !0);
window.audioMng.playSfx("结算通关");
this.setNumLabel();
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "返回主页":
cc.director.emit("过场动画进", "menuScene");
break;

case "重新开始":
"骷髅岛" == globalData.modeType ? cc.director.emit("过场动画进", "gameScene_js") : cc.director.emit("过场动画进", "gameScene");
}
globalData.clearData(window.isSingle);
},
setNumLabel: function() {
globalData.setBestScore(globalData.getLevelData()) && console.log("新纪录");
this.bestLabel.string = globalData.getBestScore() + 1 + "天";
this.daysLabel.string = globalData.getLevelData() + 1 + "天";
this.npcLabel.string = "x" + globalData.getTongGuanData("击杀npc数量");
this.moodLabel.string = "x" + globalData.getTongGuanData("木头数量");
this.shiTouLabel.string = "x" + globalData.getTongGuanData("石头数量");
this.caoLabel.string = "x" + globalData.getTongGuanData("草数量");
this.tieKuangLabel.string = "x" + globalData.getTongGuanData("铁矿数量");
}
});
cc._RF.pop();
}, {} ],
dialog_pause: [ function(e, t) {
"use strict";
cc._RF.push(t, "99100Nvyk1Cb4EWHoDBpsAs", "dialog_pause");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
Tools.resetDialog2(this.node, !0);
this.scheduleOnce(function() {
cc.director.pause();
}, .3);
},
onDisable: function() {
AD.hideBanner();
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
cc.director.resume();
switch (t) {
case "继续":
Tools.resetDialog2(this.node, !1);
break;

case "返回":
cc.director.emit("过场动画进", "menuScene");
}
}
});
cc._RF.pop();
}, {} ],
dialog_revive: [ function(e, t) {
"use strict";
cc._RF.push(t, "8ceb3Tv+ZlAk4l4F/A90Be4", "dialog_revive");
cc.Class({
extends: cc.Component,
properties: {
btnRevive: cc.Node,
dialogFuHuo: cc.Node,
queRenNode: cc.Node,
tipsNode: cc.Node,
anim1: sp.Skeleton,
anim2: sp.Skeleton
},
start: function() {
this.queRenNode.active = !1;
Tools.resetDialog2(this.node, !0);
cc.tween(this.btnRevive).repeatForever(cc.tween().to(.2, {
scale: 1.1
}).to(.2, {
scale: 1
})).start();
this.tipsNode.active = !1;
this.btnRevive.active = !1;
if (0 == window.isSingle) {
this.anim1.setSkin(this.anim1.skeletonData._skeletonJson.skins[globalData.roleSkinIndexArr[0] + 1].name);
this.anim2.setSkin(this.anim2.skeletonData._skeletonJson.skins[globalData.roleSkinIndexArr[1] + 1].name);
} else {
this.anim1.setSkin(this.anim1.skeletonData._skeletonJson.skins[globalData.roleSkinIndexArr[0] + 1].name);
this.anim1.node.x = -50;
this.anim2.node.active = !1;
}
},
btnCallBack: function(e, t) {
var i = this;
window.audioMng.playSfx("按钮");
cc.director.resume();
switch (t) {
case "复活":
AD.showAD(this.revive, this);
break;

case "二次确认":
this.queRenNode.active = !0;
break;

case "关闭":
cc.tween(this.dialogFuHuo).to(.2, {
scale: 0
}).delay(.3).call(function() {
window.audioMng.playSfx("游戏失败");
i.tipsNode.active = !0;
cc.tween(i.tipsNode).delay(2.5).to(.5, {
opacity: 0
}).call(function() {
console.log("跳转会 menuScene");
globalData.clearData(window.isSingle);
cc.director.emit("过场动画进", "menuScene");
}).start();
}).start();
}
},
onDisable: function() {
AD.hideBanner();
},
revive: function() {
Tools.resetDialog2(this.node, !1);
window.gameOver = !1;
cc.director.emit("复活玩家", 0);
cc.director.emit("复活玩家", 1);
}
});
cc._RF.pop();
}, {} ],
dialog_win_anim: [ function(e, t) {
"use strict";
cc._RF.push(t, "1da8ahe8UpLl44z+DKOPtCa", "dialog_win_anim");
cc.Class({
extends: cc.Component,
properties: {
anim: cc.Node,
zheZhao: cc.Node,
bg: cc.Node,
sfx: cc.AudioClip
},
start: function() {
var e = this;
this.node.opacity = 0;
this.zheZhao.active = !0;
this.anim.active = !1;
this.bg.active = !1;
this.zheZhao.opacity = 255;
cc.tween(this.node).to(2.5, {
opacity: 255
}).delay(1).call(function() {
e.bg.active = !0;
cc.tween(e.zheZhao).to(1.5, {
opacity: 0
}).call(function() {
e.anim.active = !0;
}).delay(6.5).call(function() {
cc.director.emit("游戏中弹窗", "通关");
}).start();
}).start();
this.valume = 0;
this.sfxIndex = cc.audioEngine.play(this.sfx, !0, 0);
window.audioMng.stopMusic();
},
update: function(e) {
if (this.valume < 1) {
this.valume += .1 * e;
cc.audioEngine.setVolume(this.sfxIndex, this.valume);
}
},
onDisable: function() {
cc.audioEngine.stop(this.sfxIndex);
}
});
cc._RF.pop();
}, {} ],
duiHuaMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "223d2Zid0dEnYBU9zh1m1Q0", "duiHuaMng");
cc.Class({
extends: cc.Component,
properties: {
contentLabel: cc.Label
},
start: function() {
this.node.scale = 0;
this.index = this.node.parent.getComponent("player").index;
this.actShow = cc.tween(this.node).to(.2, {
scale: 1
}).delay(5).to(.2, {
scale: 0
});
this.initChaBo();
this.initLunBo();
},
initChaBo: function() {
var e = this;
this.chaBoCD = 50;
this.durationArr = new Array();
cc.director.on("对话", function(t, i) {
e.index == t && e.check(i);
}, this);
},
check: function(e) {
for (var t = this, i = -1, a = 0; a < this.durationArr.length; a++) if (this.durationArr[a].content == e) {
i = a;
if (this.durationArr[a].cd > 0) return !1;
}
if (-1 != i) this.durationArr[i].cd = 50; else {
var o = {
content: e,
cd: 50
};
this.durationArr.push(o);
i = this.durationArr.length - 1;
}
this.scheduleOnce(function() {
t.durationArr[i].cd = 0;
}, this.chaBoCD);
this.show(e);
},
initLunBo: function() {
var e = this;
this.lunBoIndex = 0;
"骷髅岛" == globalData.modeType ? this.lunBoArr1 = [ "找找附近有没有能用的资源", "小心岛上的僵尸", "烤熟的肉味道更美味", "岸边可以捡到一些漂上来的物资", "浆果可以恢复生命值", "多余的物品可以放到仓库里" ] : "海岛" == globalData.modeType && (this.lunBoArr1 = [ "找找附近有没有能用的资源", "造出烽火台就能发求救信号了", "烤熟的肉味道更美味", "岸边可以捡到一些漂上来的物资", "浆果可以恢复生命值", "多余的物品可以放到仓库里" ]);
this.lunBoArr2 = new Array();
this.lunBoArr2.push(this.lunBoArr1[0]);
for (var t = this.lunBoArr1.length - 1; t > 0; t--) this.lunBoArr2.push(this.lunBoArr1[t]);
this.lunBoArr = [ this.lunBoArr1, this.lunBoArr2 ];
this.scheduleOnce(function() {
e.show(e.lunBoArr[e.index][e.lunBoIndex % e.lunBoArr1.length]);
e.schedule(function() {
e.lunBoIndex++;
e.show(e.lunBoArr[e.index][e.lunBoIndex % e.lunBoArr1.length]);
}, 50);
}, 1);
},
show: function(e) {
var t = this;
this.actShow.stop();
if (this.node.scale > 0) cc.tween(this.node).to(.2, {
scale: 0
}).delay(.2).call(function() {
t.show(e);
}).start(); else {
this.contentLabel.string = e;
this.actShow.start();
}
}
});
cc._RF.pop();
}, {} ],
effectMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "12c03w/chJOZ6LPCgY3qlc3", "effectMng");
cc.Class({
extends: cc.Component,
properties: {
parentUI: cc.Node,
tipsAddOne: cc.Prefab,
jianXue: cc.Prefab,
effect_tips_byte: cc.Prefab,
chiHe: cc.Prefab,
effectTree: cc.Prefab
},
onLoad: function() {
var e = this;
this.duration = 0;
this.num = 0;
this.createNow = !1;
this.tipsAddOnePool = new cc.NodePool();
cc.director.on("特效+1", function(t, i, a) {
e.duration = .2;
e.num++;
e.createNow = !0;
e._type = t;
e._roleIndex = i;
e._pos = a;
e.data = arguments.length <= 3 ? void 0 : arguments[3];
}, this);
this.jianXuePool = new cc.NodePool();
cc.director.on("减血数字", function(t, i, a) {
e.createJianXueByte(t, i, a);
}, this);
this.levelTipsPool = new cc.NodePool();
cc.director.on("关卡节奏文字提示", function(t) {
e.createLevelTips(t);
}, this);
this.chiHePool = new cc.NodePool();
cc.director.on("吃喝数字", function(t, i, a) {
e.createChiHe(t, i, a);
}, this);
this.treePool = new cc.NodePool();
cc.director.on("树木倒下", function(t) {
e.createEffectTree(t);
}, this);
},
createChiHe: function(e, t, i) {
var a = this, o = null;
(o = this.chiHePool.size() > 0 ? this.chiHePool.get() : cc.instantiate(this.chiHe)).parent = this.node;
o.position = cc.v2(t.x + Tools.random(-10, 10), t.y + Tools.random(-5, 5));
o.opacity = 255;
i = parseInt(i);
o.getComponent(cc.Label).string = e + " +" + i;
cc.tween(o).by(.5, {
y: 20
}, {
easing: "sineIn"
}).delay(.5).to(.2, {
opacity: 0
}).call(function() {
a.chiHePool.put(o);
}).start();
},
createLevelTips: function(e) {
switch (e) {
case "开始闯关":
window.audioMng.playSfx("危险警告");
}
var t = null;
(t = this.levelTipsPool.size() > 0 ? this.levelTipsPool.get() : cc.instantiate(this.effect_tips_byte)).parent = this.parentUI;
t.getComponent("effect_tips_byte").reset(e, this.levelTipsPool);
},
createJianXueByte: function(e, t, i) {
var a = this, o = null;
(o = this.jianXuePool.size() > 0 ? this.jianXuePool.get() : cc.instantiate(this.jianXue)).parent = this.node;
o.position = cc.v2(e.x + Tools.random(-10, 10), e.y + Tools.random(-5, 5));
o.opacity = 255;
t = parseInt(t);
o.getComponent(cc.Label).string = "-" + t;
o.scale = i ? 1.5 : 1;
cc.tween(o).by(.2, {
y: 15
}, {
easing: "sineIn"
}).to(.2, {
opacity: 0
}).call(function() {
a.jianXuePool.put(o);
}).start();
},
create: function(e, t, i, a) {
var o = null;
switch (e) {
case "资源+1":
(o = this.tipsAddOnePool.size() > 0 ? this.tipsAddOnePool.get() : cc.instantiate(this.tipsAddOne)).parent = this.node;
o.position = cc.v2(window.gameScene.roleArr[t].x, window.gameScene.roleArr[t].y + 100);
o.getComponent("effect_tips_ziYuanAddOne").reset(t, a, this.num, this.tipsAddOnePool);
}
},
createEffectTree: function(e) {
window.audioMng.playSfx("树倒下");
var t = null;
(t = this.treePool.size() > 0 ? this.treePool.get() : cc.instantiate(this.effectTree)).parent = this.node;
t.position = e;
t.getComponent(cc.ParticleSystem).resetSystem();
this.scheduleOnce(function() {}, 1);
},
update: function(e) {
if (this.createNow) {
this.duration -= e;
if (this.duration <= 0) {
this.create(this._type, this._roleIndex, this._pos, this.data);
this.createNow = !1;
this.num = 0;
}
}
}
});
cc._RF.pop();
}, {} ],
effect_jianXue: [ function(e, t) {
"use strict";
cc._RF.push(t, "8eeefW1Wa1Ex5ek3QdiddgH", "effect_jianXue");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
effect_tips_byte: [ function(e, t) {
"use strict";
cc._RF.push(t, "0c527LNtt9PQKuJTDKXYtlW", "effect_tips_byte");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
reset: function(e, t) {
var i = this;
this.node.width = 0;
for (var a = 0; a < this.node.children.length; a++) this.node.children[a].active = this.node.children[a].name == e;
cc.tween(this.node).to(.6, {
width: 1600
}, {
easing: "sineInOut"
}).delay(3).to(.6, {
width: 0
}, {
easing: "sineInOut"
}).call(function() {
t.put(i.node);
}).start();
}
});
cc._RF.pop();
}, {} ],
effect_tips_ziYuanAddOne: [ function(e, t) {
"use strict";
cc._RF.push(t, "05ab0eyRGpKh6+9DUPkp2Vd", "effect_tips_ziYuanAddOne");
cc.Class({
extends: cc.Component,
properties: {},
reset: function(e, t, i, a) {
var o = this;
window.audioMng.playSfx("收集物资");
this.node.scale = 0;
this.node.opacity = 255;
this.node.children[0].getComponent(cc.Label).string = t + "+" + i;
cc.tween(this.node).by(.2, {
scale: 1
}).delay(.3).by(.2, {
opacity: -255,
y: 50
}).call(function() {
a.put(o.node);
}).start();
}
});
cc._RF.pop();
}, {} ],
effect_zhongJiZhiZhan: [ function(e, t) {
"use strict";
cc._RF.push(t, "56060QdwSpAfpdg+caVLMhJ", "effect_zhongJiZhiZhan");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this;
Tools.resetDialog2(this.node, !0);
this.scheduleOnce(function() {
Tools.resetDialog2(e.node, !1);
}, 2);
}
});
cc._RF.pop();
}, {} ],
fenLan_kuang: [ function(e, t) {
"use strict";
cc._RF.push(t, "0c7acD1NwdNCYMEHJjYOeHL", "fenLan_kuang");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
window.isSingle && (this.node.active = !1);
}
});
cc._RF.pop();
}, {} ],
firstScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "56aacbBIVVLZoftVErm8VgI", "firstScene");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
window.audioMng.playMusic();
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
cc.director.resume();
switch (t) {
case "开始":
window.RES.loadScene("menuScene");
}
}
});
cc._RF.pop();
}, {} ],
gameScene_js: [ function(e, t) {
"use strict";
cc._RF.push(t, "f51e5j6e7NFXbl1Aw4tk8yd", "gameScene_js");
cc.Class({
extends: cc.Component,
properties: {
cameras: [ cc.Node ],
unitParent: cc.Node,
anim_sleep: cc.Node,
anim_gouHuo: cc.Node,
yingDi: cc.Node
},
onLoad: function() {
var e = this;
window.gameScene = this;
AD.hideBanner();
this.secondShowChaPing = 0;
this.schedule(function() {
window.gameScene.secondShowChaPing++;
}, 1);
this.initData();
this.scheduleOnce(function() {
window.audioMng.playMusic();
}, .1);
cc.director.on("游戏失败", function() {
console.log("游戏失败了");
e.scheduleOnce(function() {
cc.director.emit("游戏中弹窗", "复活");
}, 1.5);
}, this);
cc.director.on("天亮了", function() {
console.log("天亮了==>游戏过关");
if (window.isLastLevel) ; else {
cc.director.emit("关卡节奏文字提示", "过关");
globalData.setLevelData();
e.scheduleOnce(function() {
window.couldDayTime = !1;
cc.director.emit("游戏中弹窗", "过关");
}, 3.5);
}
}, this);
window.audioMng.playSfx("僵尸随意播放");
this.schedule(function() {
if (window.isNight) {
window.audioMng.playSfx("夜晚氛围");
window.audioMng.playSfx("僵尸随意播放");
} else window.audioMng.playSfx("僵尸随意播放");
}, 10);
},
lastLevel: function() {
var e = this;
2 == window.fengHuoTaiState && this.scheduleOnce(function() {
cc.director.emit("关卡节奏文字提示", "终极之战开始");
e.scheduleOnce(function() {
console.log("终极之战 开始");
window.isLastLevel = !0;
cc.director.emit("终极之战");
}, 3);
}, 1);
},
onDisable: function() {
cc.audioEngine.stopAll();
},
initData: function() {
var e = this;
"骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.newGame[0] = !1 : globalData.data_kuLou.newGame[1] = !1 : window.isSingle ? globalData.data.newGame[0] = !1 : globalData.data.newGame[1] = !1;
window._liBaoIndex = 0;
window.waterFreeIndex = 0;
globalData.getWaterFree().length <= 0 ? window.isWaterFreeFirst = !0 : window.isWaterFreeFirst = !1;
window.gameOver = !1;
window.tongGuanSwitch = !1;
window.gameScene.roleArr = [ null, null ];
window.gameScene.rolePosArr = [ null, null ];
this.cameras[0].active = !window.isSingle;
this.cameras[1].active = !window.isSingle;
this.cameras[2].active = window.isSingle;
window.isLastLevel = !1;
window.gameScene.levelNow = globalData.getLevelData();
window.fengHuoTaiState = globalData.getBuildData("建筑解锁状态", 5);
cc.director.on("烽火台建造完毕", function() {
window.fengHuoTaiState = globalData.getBuildData("建筑解锁状态", 5);
}, this);
window.beiBaoArr = [ 0, 0 ];
window.speedRateByWater = [ 0, 0 ];
window.typeOfBuildDialog = null;
cc.director.on("睡觉", function(t, i) {
if (e.roleArr[t]) {
e.roleArr[t].active = !i;
e.sleepFunc(t, i);
}
}, this);
this.anim_sleep.active = !1;
window.isSleeping = [ !1, !1 ];
this.sleepSecond = [ 0, 0 ];
this.funcSleep1 = function() {
e.sleepSecond[0]++;
e.sleepSecond[0] % 5 == 4 && cc.director.emit("睡觉回血", 0, 8);
};
this.funcSleep2 = function() {
e.sleepSecond[1]++;
e.sleepSecond[1] % 5 == 4 && cc.director.emit("睡觉回血", 1, 8);
};
this.anim_gouHuo.active = globalData.getBuildData("点燃中");
cc.director.on("点燃篝火", function(t) {
e.anim_gouHuo.active = t;
}, this);
window.beiBaoJSArr = [ null, null ];
},
sleepFunc: function(e, t) {
this.anim_sleep.active = t;
if (t) switch (e) {
case 0:
this.sleepSecond[0] = 0;
this.schedule(this.funcSleep1, 1);
break;

case 1:
this.sleepSecond[1] = 0;
this.schedule(this.funcSleep2, 1);
} else switch (e) {
case 0:
this.sleepSecond[0] = 0;
this.unschedule(this.funcSleep1);
break;

case 1:
this.sleepSecond[1] = 0;
this.unschedule(this.funcSleep2);
}
},
start: function() {},
btnCallBack: function() {}
});
cc._RF.pop();
}, {} ],
gameScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "2eae0ZQEjFMEbLmSMuj7OSW", "gameScene");
cc.Class({
extends: cc.Component,
properties: {
cameras: [ cc.Node ],
unitParent: cc.Node,
anim_sleep: cc.Node,
anim_gouHuo: cc.Node,
yingDi: cc.Node
},
onLoad: function() {
var e = this;
window.gameScene = this;
AD.hideBanner();
this.secondShowChaPing = 0;
this.schedule(function() {
window.gameScene.secondShowChaPing++;
}, 1);
this.initData();
this.scheduleOnce(function() {
window.audioMng.playMusic();
}, .1);
cc.director.on("游戏失败", function() {
console.log("游戏失败了");
e.scheduleOnce(function() {
cc.director.emit("游戏中弹窗", "复活");
}, 1.5);
}, this);
cc.director.on("天亮了", function() {
console.log("天亮了==>游戏过关");
if (window.isLastLevel) ; else {
cc.director.emit("关卡节奏文字提示", "过关");
globalData.setLevelData();
e.scheduleOnce(function() {
window.couldDayTime = !1;
cc.director.emit("游戏中弹窗", "过关");
}, 3.5);
}
}, this);
this.schedule(function() {
window.isNight ? window.audioMng.playSfx("夜晚氛围") : window.audioMng.playSfx("白天氛围");
}, 10);
},
lastLevel: function() {
var e = this;
2 == window.fengHuoTaiState && this.scheduleOnce(function() {
cc.director.emit("关卡节奏文字提示", "终极之战开始");
e.scheduleOnce(function() {
console.log("终极之战 开始");
window.isLastLevel = !0;
cc.director.emit("终极之战");
}, 3);
}, 1);
},
onDisable: function() {
cc.audioEngine.stopAll();
},
initData: function() {
var e = this;
"骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.newGame[0] = !1 : globalData.data_kuLou.newGame[1] = !1 : window.isSingle ? globalData.data.newGame[0] = !1 : globalData.data.newGame[1] = !1;
window._liBaoIndex = 0;
window.waterFreeIndex = 0;
globalData.getWaterFree().length <= 0 ? window.isWaterFreeFirst = !0 : window.isWaterFreeFirst = !1;
window.gameOver = !1;
window.tongGuanSwitch = !1;
window.gameScene.roleArr = [ null, null ];
window.gameScene.rolePosArr = [ null, null ];
this.cameras[0].active = !window.isSingle;
this.cameras[1].active = !window.isSingle;
this.cameras[2].active = window.isSingle;
window.isLastLevel = !1;
window.gameScene.levelNow = globalData.getLevelData();
window.fengHuoTaiState = globalData.getBuildData("建筑解锁状态", 5);
this.lastLevel();
cc.director.on("烽火台建造完毕", function() {
window.fengHuoTaiState = globalData.getBuildData("建筑解锁状态", 5);
e.lastLevel();
}, this);
window.beiBaoArr = [ 0, 0 ];
window.speedRateByWater = [ 0, 0 ];
window.typeOfBuildDialog = null;
cc.director.on("睡觉", function(t, i) {
if (e.roleArr[t]) {
e.roleArr[t].active = !i;
e.sleepFunc(t, i);
}
}, this);
this.anim_sleep.active = !1;
window.isSleeping = [ !1, !1 ];
this.sleepSecond = [ 0, 0 ];
this.funcSleep1 = function() {
e.sleepSecond[0]++;
e.sleepSecond[0] % 5 == 4 && cc.director.emit("睡觉回血", 0, 5);
};
this.funcSleep2 = function() {
e.sleepSecond[1]++;
e.sleepSecond[1] % 5 == 4 && cc.director.emit("睡觉回血", 1, 5);
};
this.anim_gouHuo.active = globalData.getBuildData("点燃中");
cc.director.on("点燃篝火", function(t) {
e.anim_gouHuo.active = t;
}, this);
window.beiBaoJSArr = [ null, null ];
},
sleepFunc: function(e, t) {
this.anim_sleep.active = t;
if (t) switch (e) {
case 0:
this.sleepSecond[0] = 0;
this.schedule(this.funcSleep1, 1);
break;

case 1:
this.sleepSecond[1] = 0;
this.schedule(this.funcSleep2, 1);
} else switch (e) {
case 0:
this.sleepSecond[0] = 0;
this.unschedule(this.funcSleep1);
break;

case 1:
this.sleepSecond[1] = 0;
this.unschedule(this.funcSleep2);
}
},
start: function() {},
btnCallBack: function() {}
});
cc._RF.pop();
}, {} ],
globalDataT: [ function(e, t) {
"use strict";
cc._RF.push(t, "4ca54WXbSVD75Ad2krlEWWJ", "globalDataT");
window.globalDataT = {
dataT: {
debug: !0,
cangKuUnlockNum: 15,
bestScore: [ 200, 200 ],
skinUnlockState: [ 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
skinUnlockStateDouble: [ 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
hadReviveFree: [ [ !1, !1 ], [ !1, !1 ] ],
newGame: [ !0, !0 ],
levelData: [ 0, 0 ],
tongGuanData: [ {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
}, {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
} ],
jieSuanData: [ [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ], [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
}, {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ] ],
ziYuanData: [ {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
}, {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
} ],
roleData: [ [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ], [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
}, {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ] ],
toolArrSingleT: [],
toolArrDoubleT: []
}
};
cc._RF.pop();
}, {} ],
globalData: [ function(e, t) {
"use strict";
cc._RF.push(t, "37e47EAwvNCabY0GCXm4k+8", "globalData");
window.globalData = {
clearDataNow: !1,
keyFirst: "key_first新海岛求生_骷髅_9",
keyData: "key_data新海岛求生_海岛_9",
keyData_kuLou: "key_data新海岛求生_骷髅岛_9",
modeType: "海岛",
roleSkinIndexArr: [ 0, 1 ],
speedNormal: 4,
maxNumOfPerTypeTool: 20,
fireMoodDuration: 60,
kaoZhiDuration: 30,
yeLianDuration: 10,
secondLastLevel: 90,
dayDuration: 180,
dayDurationHuangHun: 30,
durationCreateNpcJiangShi: 180,
data: {
unlockKuLouMode: !1,
cangKuUnlockNum: 15,
bestScore: [ 200, 200 ],
skinUnlockState: [ 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
skinUnlockStateDouble: [ 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
waterFree: [ [], [] ],
hadReviveFree: [ [ !1, !1 ], [ !1, !1 ] ],
newGame: [ !0, !0 ],
levelData: [ 0, 0 ],
tongGuanData: [ {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
}, {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
} ],
jieSuanData: [ [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ], [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
}, {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ] ],
ziYuanData: [ {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
}, {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
} ],
roleData: [ [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ], [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
}, {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ] ],
toolArrSingle: [],
toolArrDouble: []
},
data_kuLou: {
cangKuUnlockNum: 15,
bestScore: [ 200, 200 ],
skinUnlockState: [ 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
skinUnlockStateDouble: [ 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
levelScore: [ 0, 0 ],
waterFree: [ [], [] ],
hadReviveFree: [ [ !1, !1 ], [ !1, !1 ] ],
newGame: [ !0, !0 ],
levelData: [ 0, 0 ],
tongGuanData: [ {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
}, {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
} ],
jieSuanData: [ [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ], [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
}, {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ] ],
ziYuanData: [ {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
}, {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
} ],
roleData: [ [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ], [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
}, {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ] ],
toolArrSingle: [],
toolArrDouble: []
},
getUnlockKuLouMode: function() {
return this.data.unlockKuLouMode;
},
setUnlockKuLouMode: function() {
this.data.unlockKuLouMode = !0;
this.saveData();
},
getLevelScore: function(e) {
return this.data_kuLou.levelData[e];
},
setLevelScore: function(e, t) {
window.isSingle ? this.data_kuLou.levelData[0] += t : this.data_kuLou.levelData[1] += t;
cc.director.emit("npc得分变化");
},
getNewGame: function(e) {
return "骷髅岛" == globalData.modeType ? globalData.data_kuLou.newGame[e] : globalData.data.newGame[e];
},
getWaterFree: function() {
if ("骷髅岛" == globalData.modeType) {
var e = globalData.data_kuLou.waterFree[0];
window.isSingle || (e = globalData.data_kuLou.waterFree[1]);
} else {
e = globalData.data.waterFree[0];
window.isSingle || (e = globalData.data.waterFree[1]);
}
return e;
},
setWaterFree: function(e, t) {
if ("骷髅岛" == globalData.modeType) {
var i = globalData.data_kuLou.waterFree[0];
window.isSingle || (i = globalData.data_kuLou.waterFree[1]);
} else {
i = globalData.data.waterFree[0];
window.isSingle || (i = globalData.data.waterFree[1]);
}
-1 != e ? i[e] = t : i.push(t);
},
clearData: function(e) {
if ("骷髅岛" == globalData.modeType) if (e) {
globalData.data_kuLou.levelScore[0] = 0;
globalData.data_kuLou.waterFree[0] = [];
globalData.data_kuLou.hadReviveFree[0] = [ !1, !1 ];
for (var t = 0; t < globalData.data_kuLou.skinUnlockState.length; t++) 3 != globalData.data_kuLou.skinUnlockState[t] && (globalData.data_kuLou.skinUnlockState[t] = 2);
globalData.data_kuLou.newGame[0] = !0;
globalData.data_kuLou.levelData[0] = 0;
globalData.data_kuLou.tongGuanData[0] = {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
};
globalData.data_kuLou.jieSuanData[0] = [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ];
globalData.data_kuLou.ziYuanData[0] = {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
};
globalData.data_kuLou.roleData[0] = [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ];
globalData.data_kuLou.toolArrSingle = [];
} else {
globalData.data_kuLou.levelScore[1] = 0;
globalData.data_kuLou.waterFree[1] = [];
globalData.data_kuLou.hadReviveFree[1] = [ !1, !1 ];
for (t = 0; t < globalData.data_kuLou.skinUnlockStateDouble.length; t++) 3 != globalData.data_kuLou.skinUnlockStateDouble[t] && (globalData.data_kuLou.skinUnlockStateDouble[t] = 2);
globalData.data_kuLou.newGame[1] = !0;
globalData.data_kuLou.levelData[1] = 0;
globalData.data_kuLou.tongGuanData[1] = {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
}, globalData.data_kuLou.jieSuanData[1] = [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
}, {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ];
globalData.data_kuLou.ziYuanData[1] = {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
};
globalData.data_kuLou.roleData[1] = [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
}, {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ];
globalData.data_kuLou.toolArrDouble = [];
} else if (e) {
globalData.data.waterFree[0] = [];
globalData.data.hadReviveFree[0] = [ !1, !1 ];
for (t = 0; t < globalData.data.skinUnlockState.length; t++) 3 != globalData.data.skinUnlockState[t] && (globalData.data.skinUnlockState[t] = 2);
globalData.data.newGame[0] = !0;
globalData.data.levelData[0] = 0;
globalData.data.tongGuanData[0] = {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
};
globalData.data.jieSuanData[0] = [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ];
globalData.data.ziYuanData[0] = {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
};
globalData.data.roleData[0] = [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ];
globalData.data.toolArrSingle = [];
} else {
globalData.data.waterFree[1] = [];
globalData.data.hadReviveFree[1] = [ !1, !1 ];
for (t = 0; t < globalData.data.skinUnlockStateDouble.length; t++) 3 != globalData.data.skinUnlockStateDouble[t] && (globalData.data.skinUnlockStateDouble[t] = 2);
globalData.data.newGame[1] = !0;
globalData.data.levelData[1] = 0;
globalData.data.tongGuanData[1] = {
killNum: 0,
moodNum: 0,
shiTouNum: 0,
caoNum: 0,
teiKuangNum: 0
}, globalData.data.jieSuanData[1] = [ {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
}, {
hurtAdd: 0,
speedAdd: 0,
hpSumAdd: 0
} ];
globalData.data.ziYuanData[1] = {
unlock_build: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_duration: [ 0, 0, 0, 0, 0, 0 ],
unlock_build_speed: [ 1, 1, 1, 1, 1, 1 ],
firing: !1,
fire_mood_num: 0,
fireSecond: 0,
kaoXiang_unit_type: null,
kaoXiang_unit_shengRou_num: 0,
kaoXiang_unit_shuRou_num: 0,
kaoXiang_second: 0,
waterSecond: 0,
yeLianSecond: 0,
yeLianNum: 0,
yeLianCompleteNum: 0
};
globalData.data.roleData[1] = [ {
isNew: !0,
hp: 0,
food: 0,
water: 0
}, {
isNew: !0,
hp: 0,
food: 0,
water: 0
} ];
globalData.data.toolArrDouble = [];
}
this.saveData();
},
getHadReviveFree: function(e) {
if ("骷髅岛" == globalData.modeType) {
var t = globalData.data_kuLou.hadReviveFree[0];
window.isSingle || (t = globalData.data_kuLou.hadReviveFree[1]);
return t[e];
}
t = globalData.data.hadReviveFree[0];
window.isSingle || (t = globalData.data.hadReviveFree[1]);
return t[e];
},
setHadReviveFree: function(e) {
if ("骷髅岛" == globalData.modeType) {
var t = globalData.data_kuLou.hadReviveFree[0];
window.isSingle || (t = globalData.data_kuLou.hadReviveFree[1]);
t[e] = !0;
} else {
t = globalData.data.hadReviveFree[0];
window.isSingle || (t = globalData.data.hadReviveFree[1]);
t[e] = !0;
}
this.saveData();
},
getRoleSkinIndexArr: function() {
if ("骷髅岛" == globalData.modeType) if (window.isSingle) {
for (var e = 0; e < globalData.data_kuLou.skinUnlockState.length; e++) if (0 == globalData.data_kuLou.skinUnlockState[e]) {
globalData.roleSkinIndexArr[0] = e;
break;
}
} else for (e = 0; e < globalData.data_kuLou.skinUnlockStateDouble.length; e++) 0 == globalData.data_kuLou.skinUnlockStateDouble[e] ? globalData.roleSkinIndexArr[0] = e : 1 == globalData.data_kuLou.skinUnlockStateDouble[e] && (globalData.roleSkinIndexArr[1] = e); else if (window.isSingle) {
for (e = 0; e < globalData.data.skinUnlockState.length; e++) if (0 == globalData.data.skinUnlockState[e]) {
globalData.roleSkinIndexArr[0] = e;
break;
}
} else for (e = 0; e < globalData.data.skinUnlockStateDouble.length; e++) 0 == globalData.data.skinUnlockStateDouble[e] ? globalData.roleSkinIndexArr[0] = e : 1 == globalData.data.skinUnlockStateDouble[e] && (globalData.roleSkinIndexArr[1] = e);
},
getSkinUnlockState: function(e) {
return "骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.skinUnlockState[e] : globalData.data_kuLou.skinUnlockStateDouble[e] : window.isSingle ? globalData.data.skinUnlockState[e] : globalData.data.skinUnlockStateDouble[e];
},
setSkinUnlockState: function(e, t) {
if ("骷髅岛" == globalData.modeType) if (3 == globalData.data.skinUnlockState[t]) if (window.isSingle) {
for (var i = 0; i < globalData.data_kuLou.skinUnlockState.length; i++) 3 != globalData.data_kuLou.skinUnlockState[i] && (globalData.data_kuLou.skinUnlockState[i] = 2);
globalData.data_kuLou.skinUnlockState[t] = 0;
globalData.data_kuLou.skinUnlockStateDouble[t] = 2;
} else {
globalData.data_kuLou.skinUnlockState[t] = 2;
for (i = 0; i < globalData.data_kuLou.skinUnlockStateDouble.length; i++) globalData.data_kuLou.skinUnlockStateDouble[i] == e && (globalData.data_kuLou.skinUnlockStateDouble[i] = 2);
globalData.data_kuLou.skinUnlockStateDouble[t] = e;
} else if (window.isSingle) {
for (i = 0; i < globalData.data_kuLou.skinUnlockState.length; i++) 3 != globalData.data_kuLou.skinUnlockState[i] && (globalData.data_kuLou.skinUnlockState[i] = 2);
globalData.data_kuLou.skinUnlockState[t] = 0;
} else {
if (2 != globalData.data_kuLou.skinUnlockStateDouble[t]) {
cc.director.emit("系统提示", "改皮肤已被使用", e);
return;
}
for (i = 0; i < globalData.data_kuLou.skinUnlockStateDouble.length; i++) globalData.data_kuLou.skinUnlockStateDouble[i] == e && (his.data.skinUnlockStateDouble[i] = 2);
globalData.data_kuLou.skinUnlockStateDouble[t] = e;
} else if (3 == globalData.data.skinUnlockState[t]) if (window.isSingle) {
for (i = 0; i < globalData.data.skinUnlockState.length; i++) 3 != globalData.data.skinUnlockState[i] && (globalData.data.skinUnlockState[i] = 2);
globalData.data.skinUnlockState[t] = 0;
globalData.data.skinUnlockStateDouble[t] = 2;
} else {
globalData.data.skinUnlockState[t] = 2;
for (i = 0; i < globalData.data.skinUnlockStateDouble.length; i++) globalData.data.skinUnlockStateDouble[i] == e && (globalData.data.skinUnlockStateDouble[i] = 2);
globalData.data.skinUnlockStateDouble[t] = e;
} else if (window.isSingle) {
for (i = 0; i < globalData.data.skinUnlockState.length; i++) 3 != globalData.data.skinUnlockState[i] && (globalData.data.skinUnlockState[i] = 2);
globalData.data.skinUnlockState[t] = 0;
} else {
if (2 != globalData.data.skinUnlockStateDouble[t]) {
cc.director.emit("系统提示", "改皮肤已被使用", e);
return;
}
for (i = 0; i < globalData.data.skinUnlockStateDouble.length; i++) globalData.data.skinUnlockStateDouble[i] == e && (his.data.skinUnlockStateDouble[i] = 2);
globalData.data.skinUnlockStateDouble[t] = e;
}
this.saveData();
},
getBestScore: function() {
return "骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.bestScore[0] : globalData.data_kuLou.bestScore[1] : window.isSingle ? globalData.data.bestScore[0] : globalData.data.bestScore[1];
},
setBestScore: function(e) {
if ("骷髅岛" == globalData.modeType) {
if (window.isSingle) {
if (e < globalData.data_kuLou.bestScore[0]) {
globalData.data_kuLou.bestScore[0] = e;
this.saveData();
return !0;
}
} else if (e < globalData.data_kuLou.bestScore[1]) {
globalData.data_kuLou.bestScore[1] = e;
this.saveData();
return !0;
}
} else if (window.isSingle) {
if (e < globalData.data.bestScore[0]) {
globalData.data.bestScore[0] = e;
this.saveData();
return !0;
}
} else if (e < globalData.data.bestScore[1]) {
globalData.data.bestScore[1] = e;
this.saveData();
return !0;
}
return !1;
},
getTongGuanData: function(e) {
if ("骷髅岛" == globalData.modeType) {
var t = globalData.data_kuLou.tongGuanData[0];
0 == window.isSingle && (t = globalData.data_kuLou.tongGuanData[1]);
} else {
t = globalData.data.tongGuanData[0];
0 == window.isSingle && (t = globalData.data.tongGuanData[1]);
}
var i = null;
switch (e) {
case "击杀npc数量":
i = t.killNum;
break;

case "木头数量":
i = t.moodNum;
break;

case "石头数量":
i = t.shiTouNum;
break;

case "草数量":
i = t.caoNum;
break;

case "铁矿数量":
i = t.teiKuangNum;
}
if (null == i) {
console.warn("通关数量获取失败 " + e);
return -1;
}
return i;
},
setTongGuanData: function(e, t) {
if ("骷髅岛" == globalData.modeType) {
var i = globalData.data_kuLou.tongGuanData[0];
0 == window.isSingle && (i = globalData.data_kuLou.tongGuanData[1]);
} else {
i = globalData.data.tongGuanData[0];
0 == window.isSingle && (i = globalData.data.tongGuanData[1]);
}
switch (e) {
case "击杀npc数量":
i.killNum += t;
break;

case "木头数量":
i.moodNum += t;
break;

case "石头数量":
i.shiTouNum += t;
break;

case "草数量":
i.caoNum += t;
break;

case "铁矿数量":
i.teiKuangNum += t;
}
this.saveData();
},
getLevelData: function() {
return "骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.levelData[0] : globalData.data_kuLou.levelData[1] : window.isSingle ? globalData.data.levelData[0] : globalData.data.levelData[1];
},
setLevelData: function() {
"骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.levelData[0]++ : globalData.data_kuLou.levelData[1]++ : window.isSingle ? globalData.data.levelData[0]++ : globalData.data.levelData[1]++;
},
getJieSuanData: function(e, t) {
var i;
i = "骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.jieSuanData[0][e] : globalData.data_kuLou.jieSuanData[1][e] : window.isSingle ? globalData.data.jieSuanData[0][e] : globalData.data.jieSuanData[1][e];
var a = null;
switch (t) {
case "攻击加成":
a = i.hurtAdd;
break;

case "移速加成":
a = i.speedAdd;
break;

case "血量上限加成":
a = i.hpSumAdd;
}
if (null != a) return a;
console.warn("结算 数值获取失败  " + t);
},
setJieSuanData: function(e, t, i) {
var a = null;
a = "骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.jieSuanData[0][e] : globalData.data_kuLou.jieSuanData[1][e] : window.isSingle ? globalData.data.jieSuanData[0][e] : globalData.data.jieSuanData[1][e];
switch (t) {
case "攻击加成":
a.hurtAdd += i;
cc.director.emit("攻击加成", e);
break;

case "移速加成":
a.speedAdd += i;
cc.director.emit("移速加成", e);
break;

case "血量上限加成":
a.hpSumAdd += i;
cc.director.emit("血量上限加成", e);
}
this.saveData();
},
getBuildData: function(e) {
var t = null;
t = "骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.ziYuanData[0] : globalData.data_kuLou.ziYuanData[1] : window.isSingle ? globalData.data.ziYuanData[0] : globalData.data.ziYuanData[1];
for (var i = null, a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
switch (e) {
case "建筑解锁状态":
i = t.unlock_build[o[0]];
break;

case "建筑建造时间":
i = t.unlock_build_duration[o[0]];
break;

case "建造速度":
i = t.unlock_build_speed[o[0]];
break;

case "淡水时间":
i = t.waterSecond;
break;

case "点燃中":
i = t.firing;
break;

case "烧火时间":
i = t.firing ? t.fireSecond : 0;
break;

case "烧火木头":
i = t.fire_mood_num;
break;

case "烤箱生肉类型":
i = t.kaoXiang_unit_type;
break;

case "烤箱生肉数":
i = t.kaoXiang_unit_shengRou_num;
break;

case "烤箱熟肉数":
i = t.kaoXiang_unit_shuRou_num;
break;

case "烤箱烤制时间":
i = t.kaoXiang_second;
break;

case "冶炼时间":
i = t.yeLianSecond;
break;

case "冶炼中数量":
i = t.yeLianNum;
break;

case "冶炼完成数量":
i = t.yeLianCompleteNum;
}
if (null != i) return i;
},
setBuildData: function(e, t, i) {
var a = 0;
window.isSingle || (a = 1);
if ("骷髅岛" == globalData.modeType) switch (e) {
case "建筑解锁状态":
globalData.data_kuLou.ziYuanData[a].unlock_build[t] = i;
break;

case "建筑建造时间":
globalData.data_kuLou.ziYuanData[a].unlock_build_duration[t]++;
globalData.data_kuLou.ziYuanData[a].unlock_build_duration[t] >= globalData.getBuildJson("建造时长", t) && (globalData.data_kuLou.ziYuanData[a].unlock_build_duration[t] = globalData.getBuildJson("建造时长", t));
break;

case "建造速度":
globalData.data_kuLou.ziYuanData[a].unlock_build_speed[t] = i;
break;

case "淡水时间":
globalData.data_kuLou.ziYuanData[a].waterSecond += t;
globalData.data_kuLou.ziYuanData[a].waterSecond > 100 && (globalData.data_kuLou.ziYuanData[a].waterSecond = 100);
break;

case "点燃中":
cc.director.emit("点燃篝火", !0);
globalData.data_kuLou.ziYuanData[a].firing = !0;
globalData.data_kuLou.ziYuanData[a].fire_mood_num--;
globalData.data_kuLou.ziYuanData[a].fireSecond = globalData.fireMoodDuration;
break;

case "烧火时间":
if (globalData.data_kuLou.ziYuanData[a].firing) {
globalData.data_kuLou.ziYuanData[a].fireSecond += t;
if (t < 0) {
if (0 == globalData.data_kuLou.ziYuanData[a].fireSecond) if (globalData.data_kuLou.ziYuanData[a].fire_mood_num > 0) {
globalData.data_kuLou.ziYuanData[a].fire_mood_num--;
globalData.data_kuLou.ziYuanData[a].fireSecond = globalData.fireMoodDuration;
} else {
globalData.data_kuLou.ziYuanData[a].fireSecond = 0;
globalData.data_kuLou.ziYuanData[a].firing = !1;
cc.director.emit("点燃篝火", !1);
}
} else globalData.data_kuLou.ziYuanData[a].fireSecond >= globalData.fireMoodDuration && (globalData.data_kuLou.ziYuanData[a].fireSecond = globalData.fireMoodDuration);
}
break;

case "烧火木头":
globalData.data_kuLou.ziYuanData[a].fire_mood_num += t;
break;

case "烤箱生肉类型":
globalData.data_kuLou.ziYuanData[a].kaoXiang_unit_type = t;
break;

case "烤箱生肉数":
globalData.data_kuLou.ziYuanData[a].kaoXiang_unit_shengRou_num += t;
break;

case "烤箱熟肉数":
globalData.data_kuLou.ziYuanData[a].kaoXiang_unit_shuRou_num += t;
break;

case "烤箱烤制时间":
globalData.data_kuLou.ziYuanData[a].kaoXiang_second += t;
if (globalData.data_kuLou.ziYuanData[a].kaoXiang_second >= globalData.kaoZhiDuration) {
globalData.data_kuLou.ziYuanData[a].kaoXiang_second = 0;
this.setBuildData("烤箱生肉数", -1);
this.setBuildData("烤箱熟肉数", 1);
}
break;

case "冶炼时间初重置":
globalData.data_kuLou.ziYuanData[a].yeLianSecond = 0;
break;

case "冶炼时间":
globalData.data_kuLou.ziYuanData[a].yeLianSecond += t;
break;

case "冶炼中数量":
globalData.data_kuLou.ziYuanData[a].yeLianNum += t;
break;

case "冶炼完成数量":
globalData.data_kuLou.ziYuanData[a].yeLianCompleteNum += t;
} else switch (e) {
case "建筑解锁状态":
globalData.data.ziYuanData[a].unlock_build[t] = i;
break;

case "建筑建造时间":
globalData.data.ziYuanData[a].unlock_build_duration[t]++;
globalData.data.ziYuanData[a].unlock_build_duration[t] >= globalData.getBuildJson("建造时长", t) && (globalData.data.ziYuanData[a].unlock_build_duration[t] = globalData.getBuildJson("建造时长", t));
break;

case "建造速度":
globalData.data.ziYuanData[a].unlock_build_speed[t] = i;
break;

case "淡水时间":
globalData.data.ziYuanData[a].waterSecond += t;
globalData.data.ziYuanData[a].waterSecond > 100 && (globalData.data.ziYuanData[a].waterSecond = 100);
break;

case "点燃中":
cc.director.emit("点燃篝火", !0);
globalData.data.ziYuanData[a].firing = !0;
globalData.data.ziYuanData[a].fire_mood_num--;
globalData.data.ziYuanData[a].fireSecond = globalData.fireMoodDuration;
break;

case "烧火时间":
if (globalData.data.ziYuanData[a].firing) {
globalData.data.ziYuanData[a].fireSecond += t;
if (t < 0) {
if (0 == globalData.data.ziYuanData[a].fireSecond) if (globalData.data.ziYuanData[a].fire_mood_num > 0) {
globalData.data.ziYuanData[a].fire_mood_num--;
globalData.data.ziYuanData[a].fireSecond = globalData.fireMoodDuration;
} else {
globalData.data.ziYuanData[a].fireSecond = 0;
globalData.data.ziYuanData[a].firing = !1;
cc.director.emit("点燃篝火", !1);
}
} else globalData.data.ziYuanData[a].fireSecond >= globalData.fireMoodDuration && (globalData.data.ziYuanData[a].fireSecond = globalData.fireMoodDuration);
}
break;

case "烧火木头":
globalData.data.ziYuanData[a].fire_mood_num += t;
break;

case "烤箱生肉类型":
globalData.data.ziYuanData[a].kaoXiang_unit_type = t;
break;

case "烤箱生肉数":
globalData.data.ziYuanData[a].kaoXiang_unit_shengRou_num += t;
break;

case "烤箱熟肉数":
globalData.data.ziYuanData[a].kaoXiang_unit_shuRou_num += t;
break;

case "烤箱烤制时间":
globalData.data.ziYuanData[a].kaoXiang_second += t;
if (globalData.data.ziYuanData[a].kaoXiang_second >= globalData.kaoZhiDuration) {
globalData.data.ziYuanData[a].kaoXiang_second = 0;
this.setBuildData("烤箱生肉数", -1);
this.setBuildData("烤箱熟肉数", 1);
}
break;

case "冶炼时间初重置":
globalData.data.ziYuanData[a].yeLianSecond = 0;
break;

case "冶炼时间":
globalData.data.ziYuanData[a].yeLianSecond += t;
break;

case "冶炼中数量":
globalData.data.ziYuanData[a].yeLianNum += t;
break;

case "冶炼完成数量":
globalData.data.ziYuanData[a].yeLianCompleteNum += t;
}
this.saveData();
},
getCangKuUnlockNum: function() {
return "骷髅岛" == globalData.modeType ? globalData.data_kuLou.cangKuUnlockNum : globalData.data.cangKuUnlockNum;
},
setCangKuUnlockNum: function() {
"骷髅岛" == globalData.modeType ? globalData.data_kuLou.cangKuUnlockNum += 5 : globalData.data.cangKuUnlockNum += 5;
this.saveData();
},
getToolData: function() {
return "骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.toolArrSingle : globalData.data_kuLou.toolArrDouble : window.isSingle ? globalData.data.toolArrSingle : globalData.data.toolArrDouble;
},
setToolData: function(e, t, i) {
if ("骷髅岛" == globalData.modeType) switch (t) {
case "血量":
window.isSingle ? globalData.data_kuLou.toolArrSingle[e].hp-- : globalData.data_kuLou.toolArrDouble[e].hp--;
this.saveData();
break;

case "归属":
var a = globalData.data_kuLou.toolArrDouble;
window.isSingle && (a = globalData.data_kuLou.toolArrSingle);
for (var o = a[e].name, n = !1, s = 0; s < window.jsonTool.length; s++) if (window.jsonTool[s].Gongju_Name.indexOf(o) >= 0) {
n = !0;
break;
}
var c = a[e].hp, l = a[e].roleIndex;
if (window.isSingle) if (n) switch (i) {
case -1:
if (!(globalData.getCangKuUsefulNum() > 0)) return !1;
globalData.clearToolData(e);
var r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data_kuLou.toolArrSingle.push(r);
cc.director.emit("仓库添加新物品", globalData.data_kuLou.toolArrSingle.length - 1);
this.saveData();
break;

default:
if (globalData.getToolDataBeiBao(i) >= 8) return !1;
globalData.clearToolData(e);
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data_kuLou.toolArrSingle.push(r);
cc.director.emit("更新背包资源", i);
this.saveData();
} else switch (i) {
case -1:
for (s = 0; s < globalData.data_kuLou.toolArrSingle.length; s++) if (globalData.data_kuLou.toolArrSingle[s].name == o && globalData.data_kuLou.toolArrSingle[s].roleIndex == i) {
if (!(c > 0)) break;
if (globalData.data_kuLou.toolArrSingle[s].hp < globalData.maxNumOfPerTypeTool) {
(d = globalData.maxNumOfPerTypeTool - globalData.data_kuLou.toolArrSingle[s].hp) > c && (d = c);
globalData.data_kuLou.toolArrSingle[s].hp += d;
c -= d;
cc.director.emit("原有物品数量发生变化", s);
}
}
if (c > 0) {
if (!(globalData.getCangKuUsefulNum() > 0)) {
globalData.data_kuLou.toolArrSingle[e].hp = c;
globalData.data_kuLou.toolArrSingle[e].roleIndex = l;
cc.director.emit("原有物品数量发生变化", e);
this.saveData();
return !1;
}
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data_kuLou.toolArrSingle.push(r);
cc.director.emit("仓库添加新物品", globalData.data_kuLou.toolArrSingle.length - 1);
globalData.clearToolData(e);
this.saveData();
} else {
globalData.clearToolData(e);
this.saveData();
}
break;

default:
for (s = 0; s < globalData.data_kuLou.toolArrSingle.length; s++) if (globalData.data_kuLou.toolArrSingle[s].name == o && globalData.data_kuLou.toolArrSingle[s].roleIndex == i) {
if (!(c > 0)) break;
if (globalData.data_kuLou.toolArrSingle[s].hp < globalData.maxNumOfPerTypeTool) {
(d = globalData.maxNumOfPerTypeTool - globalData.data_kuLou.toolArrSingle[s].hp) > c && (d = c);
globalData.data_kuLou.toolArrSingle[s].hp += d;
c -= d;
cc.director.emit("原有物品数量发生变化", s);
}
}
if (c > 0) {
if (!(globalData.getToolDataBeiBao(i) < 8)) {
globalData.data_kuLou.toolArrSingle[e].hp = c;
globalData.data_kuLou.toolArrSingle[e].roleIndex = l;
cc.director.emit("原有物品数量发生变化", e);
this.saveData();
return !1;
}
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data_kuLou.toolArrSingle.push(r);
cc.director.emit("更新背包资源", i);
globalData.clearToolData(e);
this.saveData();
} else {
globalData.clearToolData(e);
this.saveData();
}
} else if (n) switch (i) {
case -1:
if (!(globalData.getCangKuUsefulNum() > 0)) return !1;
globalData.clearToolData(e);
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data_kuLou.toolArrDouble.push(r);
cc.director.emit("仓库添加新物品", globalData.data_kuLou.toolArrDouble.length - 1);
this.saveData();
break;

default:
if (globalData.getToolDataBeiBao(i) >= 8) return !1;
globalData.clearToolData(e);
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data_kuLou.toolArrDouble.push(r);
cc.director.emit("更新背包资源", i);
this.saveData();
} else switch (i) {
case -1:
for (s = 0; s < globalData.data_kuLou.toolArrDouble.length; s++) if (globalData.data_kuLou.toolArrDouble[s].name == o && globalData.data_kuLou.toolArrDouble[s].roleIndex == i) {
if (!(c > 0)) break;
if (globalData.data_kuLou.toolArrDouble[s].hp < globalData.maxNumOfPerTypeTool) {
(d = globalData.maxNumOfPerTypeTool - globalData.data_kuLou.toolArrDouble[s].hp) > c && (d = c);
globalData.data_kuLou.toolArrDouble[s].hp += d;
c -= d;
cc.director.emit("原有物品数量发生变化", s);
}
}
if (c > 0) {
if (!(globalData.getCangKuUsefulNum() > 0)) {
globalData.data_kuLou.toolArrDouble[e].hp = c;
globalData.data_kuLou.toolArrDouble[e].roleIndex = l;
cc.director.emit("原有物品数量发生变化", e);
this.saveData();
return !1;
}
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data_kuLou.toolArrDouble.push(r);
cc.director.emit("仓库添加新物品", globalData.data_kuLou.toolArrDouble.length - 1);
globalData.clearToolData(e);
this.saveData();
} else {
globalData.clearToolData(e);
this.saveData();
}
break;

default:
for (s = 0; s < globalData.data_kuLou.toolArrDouble.length; s++) if (globalData.data_kuLou.toolArrDouble[s].name == o && globalData.data_kuLou.toolArrDouble[s].roleIndex == i) {
if (!(c > 0)) break;
if (globalData.data_kuLou.toolArrDouble[s].hp < globalData.maxNumOfPerTypeTool) {
(d = globalData.maxNumOfPerTypeTool - globalData.data_kuLou.toolArrDouble[s].hp) > c && (d = c);
globalData.data_kuLou.toolArrDouble[s].hp += d;
c -= d;
cc.director.emit("原有物品数量发生变化", s);
}
}
if (c > 0) {
if (!(globalData.getToolDataBeiBao(i) < 8)) {
globalData.data_kuLou.toolArrDouble[e].hp = c;
globalData.data_kuLou.toolArrDouble[e].roleIndex = l;
cc.director.emit("原有物品数量发生变化", e);
this.saveData();
return !1;
}
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data_kuLou.toolArrDouble.push(r);
cc.director.emit("更新背包资源", i);
globalData.clearToolData(e);
this.saveData();
} else {
globalData.clearToolData(e);
this.saveData();
}
}
} else switch (t) {
case "血量":
window.isSingle ? globalData.data.toolArrSingle[e].hp-- : globalData.data.toolArrDouble[e].hp--;
this.saveData();
break;

case "归属":
a = globalData.data.toolArrDouble;
window.isSingle && (a = globalData.data.toolArrSingle);
for (o = a[e].name, n = !1, s = 0; s < window.jsonTool.length; s++) if (window.jsonTool[s].Gongju_Name.indexOf(o) >= 0) {
n = !0;
break;
}
c = a[e].hp, l = a[e].roleIndex;
if (window.isSingle) if (n) switch (i) {
case -1:
if (!(globalData.getCangKuUsefulNum() > 0)) return !1;
globalData.clearToolData(e);
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data.toolArrSingle.push(r);
cc.director.emit("仓库添加新物品", globalData.data.toolArrSingle.length - 1);
this.saveData();
break;

default:
if (globalData.getToolDataBeiBao(i) >= 8) return !1;
globalData.clearToolData(e);
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data.toolArrSingle.push(r);
cc.director.emit("更新背包资源", i);
this.saveData();
} else switch (i) {
case -1:
for (s = 0; s < globalData.data.toolArrSingle.length; s++) if (globalData.data.toolArrSingle[s].name == o && globalData.data.toolArrSingle[s].roleIndex == i) {
if (!(c > 0)) break;
if (globalData.data.toolArrSingle[s].hp < globalData.maxNumOfPerTypeTool) {
(d = globalData.maxNumOfPerTypeTool - globalData.data.toolArrSingle[s].hp) > c && (d = c);
globalData.data.toolArrSingle[s].hp += d;
c -= d;
cc.director.emit("原有物品数量发生变化", s);
}
}
if (c > 0) {
if (!(globalData.getCangKuUsefulNum() > 0)) {
globalData.data.toolArrSingle[e].hp = c;
globalData.data.toolArrSingle[e].roleIndex = l;
cc.director.emit("原有物品数量发生变化", e);
this.saveData();
return !1;
}
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data.toolArrSingle.push(r);
cc.director.emit("仓库添加新物品", globalData.data.toolArrSingle.length - 1);
globalData.clearToolData(e);
this.saveData();
} else {
globalData.clearToolData(e);
this.saveData();
}
break;

default:
for (s = 0; s < globalData.data.toolArrSingle.length; s++) if (globalData.data.toolArrSingle[s].name == o && globalData.data.toolArrSingle[s].roleIndex == i) {
if (!(c > 0)) break;
if (globalData.data.toolArrSingle[s].hp < globalData.maxNumOfPerTypeTool) {
(d = globalData.maxNumOfPerTypeTool - globalData.data.toolArrSingle[s].hp) > c && (d = c);
globalData.data.toolArrSingle[s].hp += d;
c -= d;
cc.director.emit("原有物品数量发生变化", s);
}
}
if (c > 0) {
if (!(globalData.getToolDataBeiBao(i) < 8)) {
globalData.data.toolArrSingle[e].hp = c;
globalData.data.toolArrSingle[e].roleIndex = l;
cc.director.emit("原有物品数量发生变化", e);
this.saveData();
return !1;
}
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data.toolArrSingle.push(r);
cc.director.emit("更新背包资源", i);
globalData.clearToolData(e);
this.saveData();
} else {
globalData.clearToolData(e);
this.saveData();
}
} else if (n) switch (i) {
case -1:
if (!(globalData.getCangKuUsefulNum() > 0)) return !1;
globalData.clearToolData(e);
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data.toolArrDouble.push(r);
cc.director.emit("仓库添加新物品", globalData.data.toolArrDouble.length - 1);
this.saveData();
break;

default:
if (globalData.getToolDataBeiBao(i) >= 8) return !1;
globalData.clearToolData(e);
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data.toolArrDouble.push(r);
cc.director.emit("更新背包资源", i);
this.saveData();
} else switch (i) {
case -1:
for (s = 0; s < globalData.data.toolArrDouble.length; s++) if (globalData.data.toolArrDouble[s].name == o && globalData.data.toolArrDouble[s].roleIndex == i) {
if (!(c > 0)) break;
if (globalData.data.toolArrDouble[s].hp < globalData.maxNumOfPerTypeTool) {
(d = globalData.maxNumOfPerTypeTool - globalData.data.toolArrDouble[s].hp) > c && (d = c);
globalData.data.toolArrDouble[s].hp += d;
c -= d;
cc.director.emit("原有物品数量发生变化", s);
}
}
if (c > 0) {
if (!(globalData.getCangKuUsefulNum() > 0)) {
globalData.data.toolArrDouble[e].hp = c;
globalData.data.toolArrDouble[e].roleIndex = l;
cc.director.emit("原有物品数量发生变化", e);
this.saveData();
return !1;
}
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data.toolArrDouble.push(r);
cc.director.emit("仓库添加新物品", globalData.data.toolArrDouble.length - 1);
globalData.clearToolData(e);
this.saveData();
} else {
globalData.clearToolData(e);
this.saveData();
}
break;

default:
for (s = 0; s < globalData.data.toolArrDouble.length; s++) if (globalData.data.toolArrDouble[s].name == o && globalData.data.toolArrDouble[s].roleIndex == i) {
if (!(c > 0)) break;
if (globalData.data.toolArrDouble[s].hp < globalData.maxNumOfPerTypeTool) {
var d;
(d = globalData.maxNumOfPerTypeTool - globalData.data.toolArrDouble[s].hp) > c && (d = c);
globalData.data.toolArrDouble[s].hp += d;
c -= d;
cc.director.emit("原有物品数量发生变化", s);
}
}
if (c > 0) {
if (!(globalData.getToolDataBeiBao(i) < 8)) {
globalData.data.toolArrDouble[e].hp = c;
globalData.data.toolArrDouble[e].roleIndex = l;
cc.director.emit("原有物品数量发生变化", e);
this.saveData();
return !1;
}
r = {
name: o,
hp: c,
roleIndex: i
};
globalData.data.toolArrDouble.push(r);
cc.director.emit("更新背包资源", i);
globalData.clearToolData(e);
this.saveData();
} else {
globalData.clearToolData(e);
this.saveData();
}
}
}
this.saveData();
return !0;
},
addToolData: function(e) {
if ("骷髅岛" == globalData.modeType) {
for (var t = !1, i = 0; i < window.jsonTool.length; i++) if (window.jsonTool[i].Gongju_Name.indexOf(e.name) >= 0) {
t = !0;
break;
}
if (!window.isSingle) {
if (t) {
if (globalData.getToolDataBeiBao(e.roleIndex) < 8) {
globalData.data_kuLou.toolArrDouble.push(e);
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !1;
}
for (a = globalData.data_kuLou.toolArrDouble, o = !1, i = 0; i < a.length; i++) if (a[i].name == e.name && a[i].roleIndex == e.roleIndex && globalData.data_kuLou.toolArrDouble[i].hp + e.hp <= globalData.maxNumOfPerTypeTool) {
globalData.data_kuLou.toolArrDouble[i].hp += e.hp;
o = !0;
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
break;
}
if (o) return !0;
if (globalData.getToolDataBeiBao(e.roleIndex) < 8) {
globalData.data_kuLou.toolArrDouble.push(e);
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !1;
}
if (t) {
if (globalData.getToolDataBeiBao(e.roleIndex) < 8) {
globalData.data_kuLou.toolArrSingle.push(e);
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !1;
}
var a = globalData.data_kuLou.toolArrSingle, o = !1;
for (i = 0; i < a.length; i++) if (a[i].name == e.name && a[i].roleIndex == e.roleIndex && globalData.data_kuLou.toolArrSingle[i].hp + e.hp <= globalData.maxNumOfPerTypeTool) {
globalData.data_kuLou.toolArrSingle[i].hp += e.hp;
o = !0;
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
if (!o) {
if (globalData.getToolDataBeiBao(e.roleIndex) < 8) {
globalData.data_kuLou.toolArrSingle.push(e);
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
return !1;
}
} else {
for (t = !1, i = 0; i < window.jsonTool.length; i++) if (window.jsonTool[i].Gongju_Name.indexOf(e.name) >= 0) {
t = !0;
break;
}
if (!window.isSingle) {
if (t) {
if (globalData.getToolDataBeiBao(e.roleIndex) < 8) {
globalData.data.toolArrDouble.push(e);
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !1;
}
for (a = globalData.data.toolArrDouble, o = !1, i = 0; i < a.length; i++) if (a[i].name == e.name && a[i].roleIndex == e.roleIndex && globalData.data.toolArrDouble[i].hp + e.hp <= globalData.maxNumOfPerTypeTool) {
globalData.data.toolArrDouble[i].hp += e.hp;
o = !0;
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
break;
}
if (o) return !0;
if (globalData.getToolDataBeiBao(e.roleIndex) < 8) {
globalData.data.toolArrDouble.push(e);
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !1;
}
if (t) {
if (globalData.getToolDataBeiBao(e.roleIndex) < 8) {
globalData.data.toolArrSingle.push(e);
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !1;
}
a = globalData.data.toolArrSingle, o = !1;
for (i = 0; i < a.length; i++) if (a[i].name == e.name && a[i].roleIndex == e.roleIndex && globalData.data.toolArrSingle[i].hp + e.hp <= globalData.maxNumOfPerTypeTool) {
globalData.data.toolArrSingle[i].hp += e.hp;
o = !0;
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
if (!o) {
if (globalData.getToolDataBeiBao(e.roleIndex) < 8) {
globalData.data.toolArrSingle.push(e);
cc.director.emit("更新背包资源", e.roleIndex);
this.saveData();
return !0;
}
return !1;
}
}
},
getToolDataBeiBao: function(e) {
if ("骷髅岛" == globalData.modeType) {
var t = 0, i = null;
i = window.isSingle ? globalData.data_kuLou.toolArrSingle : globalData.data_kuLou.toolArrDouble;
for (var a = 0; a < i.length; a++) i[a].roleIndex == e && t++;
return t;
}
t = 0, i = null;
i = window.isSingle ? globalData.data.toolArrSingle : globalData.data.toolArrDouble;
for (a = 0; a < i.length; a++) i[a].roleIndex == e && t++;
return t;
},
getCangKuUsefulNum: function() {
if ("骷髅岛" == globalData.modeType) {
var e = globalData.data_kuLou.toolArrDouble;
window.isSingle && (e = globalData.data_kuLou.toolArrSingle);
var t = 0;
e.forEach(function(e) {
-1 == e.roleIndex && t++;
});
return globalData.getCangKuUnlockNum() - t;
}
e = globalData.data.toolArrDouble;
window.isSingle && (e = globalData.data.toolArrSingle);
t = 0;
e.forEach(function(e) {
-1 == e.roleIndex && t++;
});
return globalData.getCangKuUnlockNum() - t;
},
getToolNumInBeiBao: function(e, t) {
if ("骷髅岛" == globalData.modeType) {
for (var i = 0, a = !1, o = 0; o < window.jsonTool.length; o++) if (window.jsonTool[o].Gongju_Name.indexOf(t) >= 0) {
a = !0;
break;
}
var n = null;
n = window.isSingle ? globalData.data_kuLou.toolArrSingle : globalData.data_kuLou.toolArrDouble;
if (a) for (o = 0; o < n.length; o++) n[o].roleIndex == e && n[o].name == t && (i += 1); else for (o = 0; o < n.length; o++) n[o].roleIndex == e && n[o].name == t && (i += n[o].hp);
return i;
}
for (i = 0, a = !1, o = 0; o < window.jsonTool.length; o++) if (window.jsonTool[o].Gongju_Name.indexOf(t) >= 0) {
a = !0;
break;
}
n = null;
n = window.isSingle ? globalData.data.toolArrSingle : globalData.data.toolArrDouble;
if (a) for (o = 0; o < n.length; o++) n[o].roleIndex == e && n[o].name == t && (i += 1); else for (o = 0; o < n.length; o++) n[o].roleIndex == e && n[o].name == t && (i += n[o].hp);
return i;
},
setToolNumInBeiBao: function(e, t, i) {
if ("骷髅岛" == globalData.modeType) {
for (var a = !1, o = 0; o < window.jsonTool.length; o++) if (window.jsonTool[o].Gongju_Name.indexOf(t) >= 0) {
a = !0;
break;
}
var n = null;
n = window.isSingle ? globalData.data_kuLou.toolArrSingle : globalData.data_kuLou.toolArrDouble;
if (a) {
for (o = 0; o < n.length; o++) if (n[o].roleIndex == e && n[o].name == t) {
i < 0 ? globalData.clearToolData(o) : globalData.getToolDataBeiBao(e);
cc.director.emit("更新背包资源", e, o);
}
} else if (i < 0) {
var s = -i;
for (o = 0; o < n.length; o++) if (n[o].roleIndex == e && n[o].name == t && s > 0) if (n[o].hp - s <= 0) {
s -= n[o].hp;
n[o].hp = 0;
globalData.clearToolData(o);
cc.director.emit("更新背包资源", e, o);
} else {
n[o].hp -= s;
s = 0;
cc.director.emit("更新背包资源", e, o);
}
} else {
for (s = i, o = 0; o < n.length; o++) if (n[o].roleIndex == e && n[o].name == t) {
if (!(s > 0)) break;
if (n[o].hp < globalData.maxNumOfPerTypeTool) {
(l = globalData.maxNumOfPerTypeTool - n[o].hp) > s && (l = s);
n[o].hp += l;
s -= l;
cc.director.emit("原有物品数量发生变化", o);
}
}
if (s > 0) if (globalData.getToolDataBeiBao(e) < 8) {
var c = {
name: t,
hp: s,
roleIndex: e
};
n.push(c);
cc.director.emit("更新背包资源", e);
this.saveData();
} else {
cc.director.emit("系统提示", "背包空间不足", e);
console.log("没被转移的资源数量是 " + s);
}
}
} else {
for (a = !1, o = 0; o < window.jsonTool.length; o++) if (window.jsonTool[o].Gongju_Name.indexOf(t) >= 0) {
a = !0;
break;
}
n = null;
n = window.isSingle ? globalData.data.toolArrSingle : globalData.data.toolArrDouble;
if (a) {
for (o = 0; o < n.length; o++) if (n[o].roleIndex == e && n[o].name == t) {
i < 0 ? globalData.clearToolData(o) : globalData.getToolDataBeiBao(e);
cc.director.emit("更新背包资源", e, o);
}
} else if (i < 0) {
for (s = -i, o = 0; o < n.length; o++) if (n[o].roleIndex == e && n[o].name == t && s > 0) if (n[o].hp - s <= 0) {
s -= n[o].hp;
n[o].hp = 0;
globalData.clearToolData(o);
cc.director.emit("更新背包资源", e, o);
} else {
n[o].hp -= s;
s = 0;
cc.director.emit("更新背包资源", e, o);
}
} else {
for (s = i, o = 0; o < n.length; o++) if (n[o].roleIndex == e && n[o].name == t) {
if (!(s > 0)) break;
if (n[o].hp < globalData.maxNumOfPerTypeTool) {
var l;
(l = globalData.maxNumOfPerTypeTool - n[o].hp) > s && (l = s);
n[o].hp += l;
s -= l;
cc.director.emit("原有物品数量发生变化", o);
}
}
if (s > 0) if (globalData.getToolDataBeiBao(e) < 8) {
c = {
name: t,
hp: s,
roleIndex: e
};
n.push(c);
cc.director.emit("更新背包资源", e);
this.saveData();
} else {
cc.director.emit("系统提示", "背包空间不足", e);
console.log("没被转移的资源数量是 " + s);
}
}
}
this.saveData();
},
getToolWeaponIndexBeiBao: function(e, t, i) {
var a, o = {
name: null,
cfgIndex: -1
};
a = "骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.toolArrSingle : globalData.data_kuLou.toolArrDouble : window.isSingle ? globalData.data.toolArrSingle : globalData.data.toolArrDouble;
if (-1 != t) if (a[t].roleIndex == e) if (a[t].hp > 0) {
o.name = a[t].name;
o.cfgIndex = t;
} else {
var n = this.getWeaponInBeiBao(e, a, i);
o.name = n.name;
o.cfgIndex = n.cfgIndex;
} else {
n = this.getWeaponInBeiBao(e, a, i);
o.name = n.name;
o.cfgIndex = n.cfgIndex;
} else {
n = this.getWeaponInBeiBao(e, a, i);
o.name = n.name;
o.cfgIndex = n.cfgIndex;
}
return o;
},
getWeaponInBeiBao: function(e, t, i) {
var a = {
name: null,
cfgIndex: -1
};
switch (i) {
case "斧":
for (var o = 0; o < t.length; o++) if (t[o].name.indexOf("斧") > -1 && t[o].roleIndex == e && t[o].hp > 0) {
a.name = t[o].name;
a.cfgIndex = o;
break;
}
break;

case "镐":
for (o = 0; o < t.length; o++) if (t[o].name.indexOf("镐") > -1 && t[o].roleIndex == e && t[o].hp > 0) {
a.name = t[o].name;
a.cfgIndex = o;
break;
}
break;

case "武器":
for (o = 0; o < t.length; o++) if (t[o].name.indexOf("铁剑") > -1 || t[o].name.indexOf("石矛") > -1 || t[o].name.indexOf("木棍") > -1) {
if (t[o].roleIndex == e && t[o].hp > 0) {
a.name = t[o].name;
a.cfgIndex = o;
}
break;
}
}
return a;
},
clearToolData: function(e) {
if ("骷髅岛" == globalData.modeType) {
var t = -1;
if (window.isSingle) {
globalData.data_kuLou.toolArrSingle[e].hp = 0;
t = globalData.data_kuLou.toolArrSingle[e].roleIndex;
globalData.data_kuLou.toolArrSingle[e].roleIndex = -100;
} else {
globalData.data_kuLou.toolArrDouble[e].hp = 0;
t = globalData.data_kuLou.toolArrDouble[e].roleIndex;
globalData.data_kuLou.toolArrDouble[e].roleIndex = -100;
}
0 != t && 1 != t || cc.director.emit("角色背包道具减少", t);
this.saveData();
} else {
t = -1;
if (window.isSingle) {
globalData.data.toolArrSingle[e].hp = 0;
t = globalData.data.toolArrSingle[e].roleIndex;
globalData.data.toolArrSingle[e].roleIndex = -100;
} else {
globalData.data.toolArrDouble[e].hp = 0;
t = globalData.data.toolArrDouble[e].roleIndex;
globalData.data.toolArrDouble[e].roleIndex = -100;
}
0 != t && 1 != t || cc.director.emit("角色背包道具减少", t);
this.saveData();
}
},
clearToolDataAll: function() {
for (var e = 0; e < globalData.data_kuLou.toolArrSingle.length; e++) 0 == globalData.data_kuLou.toolArrSingle[e].hp && Tools.removeElementFromArr2(globalData.data_kuLou.toolArrSingle, globalData.data_kuLou.toolArrSingle[e]);
for (e = 0; e < globalData.data_kuLou.toolArrDouble.length; e++) 0 == globalData.data_kuLou.toolArrDouble[e].hp && Tools.removeElementFromArr2(globalData.data_kuLou.toolArrDouble, globalData.data_kuLou.toolArrDouble[e]);
for (e = 0; e < globalData.data.toolArrSingle.length; e++) 0 == globalData.data.toolArrSingle[e].hp && Tools.removeElementFromArr2(globalData.data.toolArrSingle, globalData.data.toolArrSingle[e]);
for (e = 0; e < globalData.data.toolArrDouble.length; e++) 0 == globalData.data.toolArrDouble[e].hp && Tools.removeElementFromArr2(globalData.data.toolArrDouble, globalData.data.toolArrDouble[e]);
this.saveData();
},
getRoleData: function(e, t) {
var i;
if (null != (i = "骷髅岛" == globalData.modeType ? window.isSingle ? globalData.data_kuLou.roleData[0][0] : globalData.data_kuLou.roleData[1][e] : window.isSingle ? globalData.data.roleData[0][0] : globalData.data.roleData[1][e])) {
var a = null;
switch (t) {
case "初始化":
a = i.isNew;
break;

case "血量":
a = i.hp;
break;

case "饱食度":
a = i.food;
break;

case "饥渴度":
a = i.water;
}
if (null != a) return a;
console.warn("玩家数值获取失败  " + t + " 单人?" + window.isSingle);
} else console.warn("玩家数值获取失败  " + e + " 单人?" + window.isSingle);
},
setRoleData: function(e, t, i) {
if ("骷髅岛" == globalData.modeType) switch (t) {
case "初始化":
window.isSingle ? globalData.data_kuLou.roleData[0][0].isNew = i : globalData.data_kuLou.roleData[1][e].isNew = i;
break;

case "血量":
window.isSingle ? globalData.data_kuLou.roleData[0][0].hp = i : globalData.data_kuLou.roleData[1][e].hp = i;
break;

case "饱食度":
window.isSingle ? globalData.data_kuLou.roleData[0][0].food = i : globalData.data_kuLou.roleData[1][e].food = i;
break;

case "饥渴度":
window.isSingle ? globalData.data_kuLou.roleData[0][0].water = i : globalData.data.roleData[1][e].water = i;
} else switch (t) {
case "初始化":
window.isSingle ? globalData.data.roleData[0][0].isNew = i : globalData.data.roleData[1][e].isNew = i;
break;

case "血量":
window.isSingle ? globalData.data.roleData[0][0].hp = i : globalData.data.roleData[1][e].hp = i;
break;

case "饱食度":
window.isSingle ? globalData.data.roleData[0][0].food = i : globalData.data.roleData[1][e].food = i;
break;

case "饥渴度":
window.isSingle ? globalData.data.roleData[0][0].water = i : globalData.data.roleData[1][e].water = i;
}
this.saveData();
},
getSkinJson: function(e, t) {
var i;
if (!(e < window.jsonRole.length)) {
console.warn("角色配置属性获取失败  " + e);
return null;
}
i = window.jsonRole[e];
var a = null;
switch (t) {
case "名称":
a = i.Player_Name;
break;

case "血量":
a = i.Player_Hp;
break;

case "攻击力":
a = i.Player_Atk;
break;

case "移速":
a = i.Player_Agile;
break;

case "食物消耗速度":
a = i.Player_Food;
break;

case "水消耗速度":
a = i.Player_Water;
}
if (null == a) {
console.warn("角色配置属性获取失败  " + t);
return null;
}
return a;
},
getWeapon: function(e) {
for (var t = null, i = 0; i < window.jsonTool.length; i++) if (window.jsonTool[i].Gongju_Name.indexOf(e) >= 0) {
t = window.jsonTool[i];
break;
}
return t;
},
getFoodJson: function(e) {
for (var t = null, i = 0; i < window.jsonFood.length; i++) if (window.jsonFood[i].Food_Name.indexOf(e) >= 0) {
t = window.jsonFood[i];
break;
}
null == t && console.warn("食物属性获取失败 " + e);
return t;
},
getWuPinHp: function(e) {
return globalData.getWeapon(e) ? globalData.getWeapon(e).Gongju_ : 1;
},
getBuildJson: function(e, t) {
var i = window.jsonBuild[t], a = null;
switch (e) {
case "名称":
a = i.Building_Name;
break;

case "消耗":
a = i.Building_Price;
break;

case "建造时长":
a = i.Building_Time;
}
return a;
},
getDataAll: function() {
this.clearDataNow && globalData.clearAllData();
cc.debug.setDisplayStats(!1);
if (1 != cc.sys.localStorage.getItem(globalData.keyFirst)) {
cc.sys.localStorage.setItem(globalData.keyFirst, 1);
globalData.saveData();
cc.log("首次进入游戏");
globalData.getData();
} else {
cc.log("非首次进入游戏 " + cc.sys.localStorage.getItem(globalData.keyFirst));
globalData.getData();
}
window.keyData = this.keyData;
this.clearToolDataAll();
},
clearAllData: function() {
cc.sys.localStorage.removeItem(globalData.keyFirst);
cc.sys.localStorage.removeItem(globalData.keyData);
cc.sys.localStorage.removeItem(globalData.keyData_kuLou);
},
saveData: function() {
cc.sys.localStorage.setItem(globalData.keyData, JSON.stringify(globalData.data));
cc.sys.localStorage.setItem(globalData.keyData_kuLou, JSON.stringify(globalData.data_kuLou));
},
getData: function() {
var e = cc.sys.localStorage.getItem(globalData.keyData);
null != e && (globalData.data = JSON.parse(e));
var t = cc.sys.localStorage.getItem(globalData.keyData_kuLou);
null != t && (globalData.data_kuLou = JSON.parse(t));
}
};
cc._RF.pop();
}, {} ],
globalNode: [ function(e, t) {
"use strict";
cc._RF.push(t, "d093aBJ3WBOdY5MJbdGh2rx", "globalNode");
cc.Class({
extends: cc.Component,
properties: {
tips: cc.Node,
iconParent: cc.Node
},
onLoad: function() {
cc.game.addPersistRootNode(this.node);
this.frame = 0;
this.frameDuration = 0;
window.frameRate = 1;
this.initBuild();
},
initBuild: function() {},
start: function() {
var e = this;
this.node.x = cc.winSize.width / 2;
this.node.y = cc.winSize.height / 2;
this.tips.active = !1;
this.couldCreateTips = [ !0, !0 ];
cc.director.on("系统提示", function(t, i) {
if (0 != e.couldCreateTips[i]) {
e.couldCreateTips[i] = !1;
e.scheduleOnce(function() {
e.couldCreateTips[i] = !0;
}, .3);
e.node.x = cc.winSize.width / 2;
e.node.y = cc.winSize.height / 2;
var a = 0;
0 == window.isSingle && (0 == i ? a -= cc.winSize.width / 4 : a += cc.winSize.width / 4);
var o = cc.instantiate(e.tips);
o.parent = e.node;
o.active = !0;
o.position = cc.v2(a, 100);
o.scaleY = 0;
o.children[1].getComponent(cc.Label).string = t;
cc.tween(o).to(.2, {
scaleY: 1
}, {
easing: "sineInOut"
}).delay(1).to(.2, {
scaleY: 0
}, {
easing: "sineInOut"
}).call(function() {
o.destroy();
}).start();
}
}, this);
window.iconArr = new Array();
for (var t = 0; t < this.iconParent.children.length; t++) window.iconArr.push(this.iconParent.children[t].getComponent(cc.Sprite).spriteFrame);
},
update: function() {}
});
cc._RF.pop();
}, {} ],
guoChang: [ function(e, t) {
"use strict";
cc._RF.push(t, "e470btYza1OYoUpXL2F7Xhx", "guoChang");
cc.Class({
extends: cc.Component,
properties: {
bg: cc.Node,
tips: cc.Node
},
onLoad: function() {
var e = this;
cc.game.addPersistRootNode(this.node);
cc.director.on("过场动画变黑", function(t) {
e._nextScene = t;
e.close();
}, this);
this.node.position = cc.v2(cc.winSize.width / 2, 360);
this.bg.active = !1;
for (var t = 0; t < 3; t++) this.tips.children[t].opacity = 0;
},
close: function() {
for (var e = this, t = 0; t < 3; t++) this.tips.children[t].opacity = 0;
this.tips.opacity = 255;
var i = this;
this.bg.active = !0;
this.bg.opacity = 0;
cc.tween(this.bg).to(1, {
opacity: 255
}).delay(1.2).call(function() {
cc.tween(e.tips.children[0]).to(.8, {
opacity: 255
}).start();
}).delay(2.3).call(function() {
cc.tween(e.tips.children[1]).to(.8, {
opacity: 255
}).start();
}).delay(2.3).call(function() {
cc.tween(e.tips.children[2]).to(.8, {
opacity: 255
}).start();
}).delay(2).call(function() {
cc.tween(e.tips).to(.8, {
opacity: 0
}).start();
}).call(function() {
cc.director.loadScene(e._nextScene, function() {
i.openFunc();
});
}).start();
},
openFunc: function() {
var e = this;
cc.tween(this.bg).to(1, {
opacity: 0
}).call(function() {
e.bg.active = !1;
}).start();
}
});
cc._RF.pop();
}, {} ],
guoDu_normal: [ function(e, t) {
"use strict";
cc._RF.push(t, "3c4f2FUNNdPCq932x5p4ZeK", "guoDu_normal");
cc.Class({
extends: cc.Component,
properties: {
anim: cc.Animation
},
onLoad: function() {
var e = this;
cc.game.addPersistRootNode(this.node);
this.node.zIndex = 1;
this.node.scale = 0;
this.couldOut = !1;
cc.director.on("过场动画进", function(t) {
e.node.scale = 1;
e.node.position = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
e.anim.play("guoChang_in");
e.targetScene = t;
e.couldOut = !1;
}, this);
},
in: function() {
var e = this;
window.RES.loadScene(this.targetScene, this.open, this);
this.scheduleOnce(function() {
e.couldOut = !0;
}, 1);
},
out: function() {
this.node.scale = 0;
},
start: function() {},
open: function() {
var e = this;
this.couldOut ? this.anim.play("guoChang_out") : this.scheduleOnce(function() {
e.open();
}, .1);
}
});
cc._RF.pop();
}, {} ],
jianKangZhongGao: [ function(e, t) {
"use strict";
cc._RF.push(t, "0cc55+Uu0NFH62YoGH16XfC", "jianKangZhongGao");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
"oppo" != AD.chanelName1 && "huaWei" != AD.chanelName1 && (cc.winSize.width > cc.winSize.height ? this.node.getComponent(cc.Label).string = "健康游戏忠告\n抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。" : this.node.getComponent(cc.Label).string = "健康游戏忠告\n抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。");
}
});
cc._RF.pop();
}, {} ],
jianTouZhiYinMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "4c996z92aFOBb51hJ17iJ6Y", "jianTouZhiYinMng");
cc.Class({
extends: cc.Component,
properties: {
jianTou1: cc.Node,
jianTou1_role: cc.Node,
jianTou2: cc.Node
},
onLoad: function() {
if (window.isSingle) {
this.jianTou1.active = !0;
this.jianTou2.active = !1;
this.jianTou1_role.active = !1;
this.jianTou1.position = cc.v2(0, 0);
} else {
this.jianTou1.active = !0;
this.jianTou2.active = !0;
this.jianTou1.position = cc.v2(-cc.winSize.width / 4, 0);
this.jianTou2.position = cc.v2(cc.winSize.width / 4, 0);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
jianTouZhiYin: [ function(e, t) {
"use strict";
cc._RF.push(t, "9cbe2+OAWdC/pZplkQGM+67", "jianTouZhiYin");
cc.Class({
extends: cc.Component,
properties: {
startNode: cc.Node,
targetNode: cc.Node,
iconRole: cc.Sprite
},
start: function() {
var e = this;
this.begin = !1;
this.node.opacity = 0;
this.scheduleOnce(function() {
e.init();
}, .5);
},
init: function() {
var e = this;
this.begin = !0;
this.touXiang = this.node.children[0];
if (window.isSingle) {
this.hideDisW = cc.winSize.width / 2;
this.hideDisH = cc.winSize.height / 2;
} else {
this.hideDisW = cc.winSize.width / 4;
this.hideDisH = cc.winSize.height / 2;
}
this.radius = Math.sqrt(Math.pow(this.hideDisW, 2) + Math.pow(this.hideDisH, 2));
this.node.opacity = 0;
this.disUpDown = 50;
this.disZuoYou = 50;
this.angleLast = Tools.getAngle(this.targetNode.position, cc.v2(this.startNode.x, this.startNode.y + 60));
this.index = null;
this.scheduleOnce(function() {
window.isSingle ? e.index = 0 : e.node.parent.x < 0 ? e.index = 0 : e.index = 1;
e.beiBaoJS = window.beiBaoJSArr[e.index];
if (e.targetNode.name.indexOf("角色") >= 0) {
var t = e.targetNode.getComponent("player");
if (t) {
var i = globalData.roleSkinIndexArr[t.index];
e.iconRole.spriteFrame = window.iconArr[i];
}
}
}, .02);
this.tempHDi = 0;
this.targetNode.name.indexOf("营地") >= 0 && cc.director.on("关卡节奏文字提示", function(t) {
"开始闯关" == t && cc.director.emit("对话", e.index, "天黑了，最好快点回营地");
}, this);
this.frame = 0;
},
update: function(e) {
if (0 != this.begin && null != this.index) if (Math.abs(this.targetNode.x - this.startNode.x) < this.hideDisW + 50 && Math.abs(this.targetNode.y - this.startNode.y) < this.hideDisH + 50) 0 != this.node.opacity && (this.node.opacity = 0); else {
if (255 != this.node.opacity) {
this.node.opacity = 255;
this.angleLast = Tools.getAngle(this.targetNode.position, cc.v2(this.startNode.x, this.startNode.y + 60));
}
var t = Tools.getAngle(this.targetNode.position, cc.v2(this.startNode.x, this.startNode.y + 60));
if (this.angleLast != t) {
Math.abs(t - this.angleLast) > 180 && (t > 180 ? t -= 360 : t += 360);
this.angleLast += (t - this.angleLast) / 10;
}
this.node.angle = this.angleLast;
this.touXiang.angle = -this.angleLast;
var i = Tools.angleToRadian(this.angleLast + 180), a = Math.sin(i) * this.radius, o = -Math.cos(i) * this.radius;
a > this.hideDisW - this.disZuoYou ? a = this.hideDisW - this.disZuoYou : a < -(this.hideDisW - this.disZuoYou) && (a = -(this.hideDisW - this.disZuoYou));
if (o > this.hideDisH - this.disUpDown) o = this.hideDisH - this.disUpDown; else {
this.beiBaoJS.openNow ? this.tempHDi < 80 && (this.tempHDi += 400 * e) : this.tempHDi > 0 && (this.tempHDi -= 400 * e);
o < -(this.hideDisH - this.disUpDown - this.tempHDi) && (o = -(this.hideDisH - this.disUpDown - this.tempHDi));
}
this.node.position = cc.v2(a, o);
}
}
});
cc._RF.pop();
}, {} ],
juQingScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "9c7f3aEQcpLuL0QZPb2N5cQ", "juQingScene");
cc.Class({
extends: cc.Component,
properties: {
anim: sp.Skeleton,
sfxArr: [ cc.AudioClip ]
},
start: function() {
cc.audioEngine.stopAll();
this.change = !1;
var e = this;
this.anim.setCompleteListener(function() {
e.changeNow();
});
this.anim.setEventListener(function(t, i) {
if (0 == e.change) {
var a = parseInt(i.data.name);
cc.audioEngine.play(e.sfxArr[a - 1]);
}
});
},
btnCallBack: function() {
this.changeNow();
},
changeNow: function() {
if (0 == this.change) {
this.change = !0;
"骷髅岛" == globalData.modeType ? cc.director.emit("过场动画进", "gameScene_js") : cc.director.emit("过场动画进", "gameScene");
}
}
});
cc._RF.pop();
}, {} ],
littleMap: [ function(e, t) {
"use strict";
cc._RF.push(t, "bbd84mfkTBHiatGET9qEaWc", "littleMap");
cc.Class({
extends: cc.Component,
properties: {
role1: cc.Node,
role2: cc.Node,
jiDi: cc.Node,
role1Big: cc.Node,
role2Big: cc.Node,
jiDiBig: cc.Node
},
start: function() {
this.biLiChi = this.node.width / 1e4;
this.jiDi.position = cc.v2(this.jiDiBig.x * this.biLiChi, this.jiDiBig.y * this.biLiChi);
},
update: function() {
this.role1.position = cc.v2(this.role1Big.x * this.biLiChi, this.role1Big.y * this.biLiChi);
this.role2.position = cc.v2(this.role2Big.x * this.biLiChi, this.role2Big.y * this.biLiChi);
}
});
cc._RF.pop();
}, {} ],
loadScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "2b7938t9yJLv6jPq/HT9UUt", "loadScene");
cc.Class({
extends: cc.Component,
properties: {
bar: cc.Sprite
},
onLoad: function() {
this.initPhysics();
globalData.getDataAll();
},
start: function() {
this.loadJSON();
},
loadJSON: function() {
var e = this;
this.numNow = this.numSum = 0;
this.numSum++;
cc.resources.load("GongJuData", function(t, i) {
window.jsonTool = i.json;
e.numNow++;
});
this.numSum++;
cc.resources.load("ZiYuanData", function(t, i) {
window.jsonZiYuan = i.json;
e.numNow++;
});
this.numSum++;
cc.resources.load("FoodData", function(t, i) {
window.jsonFood = i.json;
e.numNow++;
});
this.numSum++;
cc.resources.load("PlayerData", function(t, i) {
window.jsonRole = i.json;
e.numNow++;
});
this.numSum++;
cc.resources.load("CampData", function(t, i) {
window.jsonBuild = i.json;
e.numNow++;
});
this.numSum++;
cc.resources.load("NpcData", function(t, i) {
window.jsonNpc = i.json;
e.numNow++;
});
this.numSum++;
cc.resources.load("LevelData", function(t, i) {
window.jsonLevel = i.json;
e.numNow++;
});
},
initPhysics: function() {
cc.director.getPhysicsManager().enabled = !0;
cc.director.getPhysicsManager().gravity = cc.v2(0, 0);
cc.director.getCollisionManager().enabled = !0;
},
update: function() {
this.bar.fillRange = window.RES.progress;
}
});
cc._RF.pop();
}, {} ],
lunPan: [ function(e, t) {
"use strict";
cc._RF.push(t, "ebc97LZqB1M6ZgEkURnbZNS", "lunPan");
cc.Class({
extends: cc.Component,
properties: {
bg: cc.Node,
gan: cc.Node,
max_R: 100,
player: cc.Node
},
onLoad: function() {
var e = this;
this.playerJS = this.player.getComponent("player");
this.index = this.playerJS.index;
if (window.isSingle) if (1 == this.index) this.node.destroy(); else {
this.node.x = cc.winSize.width / 2;
this.node.width = cc.winSize.width;
} else this.node.width = cc.winSize.width / 2;
cc.director.on("睡觉", function(t, i) {
e.index == t && (e.node.active = !i);
}, this);
},
start: function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
},
touchStart: function(e) {
this.bg.active = this.gan.active = !0;
this.bg.position = this.gan.position = this.bg.parent.convertToNodeSpaceAR(e.getLocation());
cc.director.emit("轮盘按下", this.index);
},
touchMove: function(e) {
this.couldShoot = !1;
var t = e.getLocation(), i = this.gan.parent.convertToNodeSpaceAR(t), a = this.bg.convertToNodeSpaceAR(t);
if (this.getDistance(i, this.bg.position) < this.max_R) {
this.gan.x = i.x;
this.gan.y = i.y;
} else {
var o = a.normalizeSelf();
this.gan.x = this.bg.x + o.x * this.max_R;
this.gan.y = this.bg.y + o.y * this.max_R;
}
var n = Tools.getAngle(this.bg.position, this.gan.position);
this.playerJS.angleMove = n;
},
touchEnd: function() {
this.gan.position = this.bg.position;
this.playerJS.angleMove = null;
},
getDistance: function(e, t) {
return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
});
cc._RF.pop();
}, {} ],
mapItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "13064AfVydFA4zqFF/MdCjE", "mapItem");
cc.Class({
extends: cc.Component,
properties: {},
reset: function(e) {
this.parentNode = e;
this.check();
},
check: function() {
var e = this;
this.node.children.forEach(function(t) {
var i = t.parent.convertToWorldSpaceAR(t.position);
i = e.parentNode.convertToNodeSpaceAR(i);
t.parent = e.parentNode;
t.position = i;
t.zIndex = -parseInt(t.y);
});
this.scheduleOnce(function() {
e.node.childrenCount > 0 && e.check();
}, .1);
},
start: function() {},
update: function() {
this.node.color != window.bgColor.color && (this.node.color = window.bgColor.color);
}
});
cc._RF.pop();
}, {} ],
mapMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "98863uEiuBIGp1mmYwtKaH2", "mapMng");
cc.Class({
extends: cc.Component,
properties: {
parentNode: cc.Node,
mapItem: [ cc.Prefab ]
},
onLoad: function() {
for (var e = this, t = 0; t < this.node.children.length; t++) this.node.children[t].active = !1;
this.arr = new Array();
for (t = 0; t < this.mapItem.length; t++) this.arr.push(0);
cc.director.on("显示区域", function(t) {
e.show(t);
}, this);
},
show: function(e) {
if (0 == this.arr[e]) {
this.arr[e] = 1;
var t = cc.instantiate(this.mapItem[e]);
t.active = !0;
t.parent = this.node;
t.color = new cc.Color(255, 255, 255);
var i = t.getComponent("mapItem");
i ? i.reset(this.parentNode) : console.warn("区域未获取到脚本 " + e);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
map_ground_build: [ function(e, t) {
"use strict";
cc._RF.push(t, "5c3edBZ2adJBruOKL0LbnNo", "map_ground_build");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
update: function() {
this.node.color != window.bgColor.color && (this.node.color = window.bgColor.color);
}
});
cc._RF.pop();
}, {} ],
menuScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "d65d2AwNxBGBbTRV2No6DT4", "menuScene");
cc.Class({
extends: cc.Component,
properties: {
chooseJinDu: cc.Node,
btnsHaiDao: cc.Node,
btnsKuLou: cc.Node,
lightHaiDao: cc.Node,
lightKuLou: cc.Node,
shiPinIcon: cc.Node
},
start: function() {
this.chooseJinDu.active = !1;
window.audioMng.playMusic();
AD.chaPing();
AD.showBanner();
globalData.modeType = null;
globalData.setUnlockKuLouMode();
this.btnsHaiDao.active = "海岛" == globalData.modeType;
this.btnsKuLou.active = "骷髅岛" == globalData.modeType;
this.lightHaiDao.active = "海岛" == globalData.modeType;
this.lightKuLou.active = "骷髅岛" == globalData.modeType;
this.shiPinIcon.active = !1;
},
resetMode: function(e) {
globalData.modeType = e;
this.btnsHaiDao.active = "海岛" == globalData.modeType;
this.btnsKuLou.active = "骷髅岛" == globalData.modeType;
this.lightHaiDao.active = "海岛" == globalData.modeType;
this.lightKuLou.active = "骷髅岛" == globalData.modeType;
},
unlockMode: function() {
globalData.setUnlockKuLouMode();
this.shiPinIcon.active = !globalData.getUnlockKuLouMode();
this.resetMode("骷髅岛");
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
cc.director.resume();
switch (t) {
case "海岛":
this.resetMode(t);
break;

case "骷髅岛":
globalData.getUnlockKuLouMode() && this.resetMode(t);
break;

case "返回":
cc.director.loadScene("firstScene");
break;

case "单人模式":
window.isSingle = !0;
if (1 == globalData.getNewGame(0)) this.chooseRole(); else {
this.chooseJinDu.active = !0;
AD.chaPing();
AD.showBanner();
}
break;

case "双人模式":
window.isSingle = !1;
if (1 == globalData.getNewGame(1)) this.chooseRole(); else {
this.chooseJinDu.active = !0;
AD.chaPing();
AD.showBanner();
}
break;

case "新的冒险":
globalData.clearData(window.isSingle);
globalData.saveData();
this.chooseRole();
break;

case "继续游戏":
this.startGame();
break;

case "关闭选进度":
this.chooseJinDu.active = !1;
}
},
chooseRole: function() {
cc.director.loadScene("chooseRole");
},
startGame: function() {
globalData.getRoleSkinIndexArr();
"骷髅岛" == globalData.modeType ? cc.director.emit("过场动画进", "gameScene_js") : cc.director.emit("过场动画进", "gameScene");
}
});
cc._RF.pop();
}, {} ],
newTips: [ function(e, t) {
"use strict";
cc._RF.push(t, "55ee09+oPZP7JpB/4q0TJh8", "newTips");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this;
this.node.scale = 0;
cc.tween(this.node).delay(.3).to(.3, {
scale: 1
}, {
easing: "sineInOut"
}).call(function() {
cc.tween(e.node).repeatForever(cc.tween().delay(2).to(.2, {
angle: 8
}, {
easing: "sineInOut"
}).to(.4, {
angle: -8
}, {
easing: "sineInOut"
}).to(.4, {
angle: 8
}, {
easing: "sineInOut"
}).to(.4, {
angle: -6.4
}, {
easing: "sineInOut"
}).to(.4, {
angle: 6.4
}, {
easing: "sineInOut"
}).to(.4, {
angle: -4
}, {
easing: "sineInOut"
}).to(.4, {
angle: 4
}, {
easing: "sineInOut"
}).to(.4, {
angle: 0
}, {
easing: "sineInOut"
})).start();
}).start();
}
});
cc._RF.pop();
}, {} ],
nightMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "faaebk71GxIzp+/FG/3G6vW", "nightMng");
cc.Class({
extends: cc.Component,
properties: {
node1: cc.Node,
node2: cc.Node,
sprYeShi: cc.SpriteFrame
},
start: function() {
var e = this;
this.colorLastLevel = new cc.Color(255, 125, 125, 255);
this.colorNight = new cc.Color(95, 108, 244, 255);
this.colorDay = new cc.Color(255, 255, 255, 255);
window.bgColor = {
color: this.colorDay
};
8 == globalData.roleSkinIndexArr[0] && (this.node1.active = !1);
8 == globalData.roleSkinIndexArr[1] && (this.node2.active = !1);
this.node.scale = 0;
window.isNight = !1;
this.secondDay = 0;
this.durationDay = globalData.dayDuration;
window.couldDayTime = !0;
this.isLastLevel = !1;
cc.director.on("终极之战", function() {
window.audioMng.playSfx("终极之战");
e.isLastLevel = !0;
cc.tween(e.node).to(1, {
opacity: 0
}).call(function() {
e.node.scale = 0;
}).start();
}, this);
this.schedule(function() {
if (!e.isLastLevel && 0 != window.couldDayTime) {
e.secondDay++;
if (e.secondDay == e.durationDay - globalData.dayDurationHuangHun) {
e.node.opacity = 0;
e.node.scale = e.scaleFire;
e.checkFire();
cc.tween(window.bgColor).to(globalData.dayDurationHuangHun, {
color: e.colorNight
}).start();
cc.tween(e.node).to(globalData.dayDurationHuangHun, {
opacity: 255
}).start();
}
e.secondDay == e.durationDay ? e.change(!0) : e.secondDay < e.durationDay && cc.director.emit("白天变化", e.secondDay / e.durationDay);
}
}, 1);
cc.director.on("npc清理完毕", function() {
e.isLastLevel ? e.scheduleOnce(function() {
e.change(!1);
console.log("终极之战 白天了");
}, 3) : window.isNight && e.scheduleOnce(function() {
e.change(!1);
}, 5);
}, this);
cc.director.on("终极之战", function() {
cc.tween(window.bgColor).to(1, {
color: e.colorLastLevel
}).start();
}, this);
this.checkFire();
cc.director.on("点燃篝火", function() {
e.scheduleOnce(function() {
e.checkFire();
}, .05);
}, this);
},
checkFire: function() {
window.gameScene.anim_gouHuo.active ? "海岛" == globalData.modeType ? this.scaleFire = 1.5 : "骷髅岛" == globalData.modeType && (this.scaleFire = 2.2) : this.scaleFire = 1;
0 != this.node.scale && (this.node.scale = this.scaleFire);
},
change: function(e) {
var t = this;
window.isNight = e;
cc.director.emit("昼夜变化", e);
this.scheduleOnce(function() {
window.audioMng.playMusic();
}, .1);
if (e) {
cc.director.emit("天黑了");
this.node.scale = this.scaleFire;
cc.tween(this.node).to(1, {
opacity: 255
}).call(function() {
cc.director.emit("关卡节奏文字提示", "开始闯关");
}).start();
} else {
cc.tween(window.bgColor).to(1, {
color: this.colorDay
}).start();
window.gameScene.levelNow++;
this.secondDay = 0;
cc.director.emit("天亮了变化");
cc.tween(this.node).delay(.5).to(1, {
opacity: 0
}).call(function() {
t.node.scale = 0;
cc.director.emit("天亮了");
window.audioMng.playSfx("鸡叫");
t.isLastLevel && console.log("游戏通关");
}).start();
}
}
});
cc._RF.pop();
}, {} ],
nigthJiQiRen: [ function(e, t) {
"use strict";
cc._RF.push(t, "99308Z5DWJP4b4WunW9tPKT", "nigthJiQiRen");
cc.Class({
extends: cc.Component,
properties: {
node1: cc.Node,
node2: cc.Node
},
start: function() {
var e = this;
if (window.isSingle) {
this.node1.x = 0;
this.node1.width = cc.winSize.width;
} else {
this.node1.width = cc.winSize.width / 2;
this.node2.width = cc.winSize.width / 2;
this.node1.x = -cc.winSize.width / 4;
this.node2.x = cc.winSize.width / 4;
}
this.node1.active = !1;
this.node2.active = !1;
8 == globalData.roleSkinIndexArr[0] && (this.node1.active = !0);
8 == globalData.roleSkinIndexArr[1] && (this.node2.active = !0);
this.node.scale = 0;
this.node.opacity = 0;
cc.director.on("昼夜变化", function(t) {
e.change(t);
}, this);
},
change: function(e) {
var t = this;
if (e) {
this.node.scale = 1;
this.node.opacity = 0;
cc.tween(this.node).to(1, {
opacity: 255
}).call(function() {
cc.director.emit("关卡节奏文字提示", "开始闯关");
}).start();
} else cc.tween(this.node).delay(.5).to(1, {
opacity: 0
}).call(function() {
t.node.scale = 0;
}).start();
}
});
cc._RF.pop();
}, {} ],
npcCreator: [ function(e, t) {
"use strict";
cc._RF.push(t, "405f5fSx/xIzrODpsTi7DAI", "npcCreator");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this;
this.node.opacity = 0;
this.createNpc();
cc.director.on("重置npc生成器", function(t) {
t == e.node && e.scheduleOnce(function() {
e.createNpc();
}, globalData.durationCreateNpcJiangShi);
}, this);
},
createNpc: function() {
var e;
e = Tools.random(1, 100) <= 5 ? 3 : Tools.random(0, 2);
var t = cc.instantiate(window.npcMng.npcArr[e]);
t.parent = window.npcMng.parentNode;
t.position = this.node.position;
t.getComponent("npc").init(!0, this.node);
}
});
cc._RF.pop();
}, {} ],
npcMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "a2b2ahLCutEZIZMePmvu5B9", "npcMng");
cc.Class({
extends: cc.Component,
properties: {
parentNode: cc.Node,
secondLabel: cc.Label,
npcArr: [ cc.Prefab ]
},
onLoad: function() {
window.npcMng = this;
this.posArr = this.node.children;
this.maxRandomDis = 100;
this.durationCreateNpc = 7;
for (var e = 0; e < this.posArr.length; e++) this.posArr[e].active = !1;
this.secondLabel.node.parent.active = !1;
},
start: function() {
var e = this;
this.isLastLevel = !1;
window.lastLevelProgress = 0;
cc.director.on("终极之战", function() {
window.audioMng.stopMusic();
e.scheduleOnce(function() {
window.audioMng.playMusic();
}, 1);
e.secondLastLevel = e.secondLastLevelSum = globalData.secondLastLevel;
e.secondLabel.node.parent.active = !0;
e.isLastLevel = !0;
e.npcNumNeedCreate = 0;
e.levelArrLast = new Array();
var t = window.jsonLevel[window.jsonLevel.length - 1];
e.levelArrLast.push(t.Npc_Dog);
e.levelArrLast.push(t.Npc_Wolf);
e.levelArrLast.push(t.Npc_WolfKing);
e.levelArrLast.push(t.Npc_Pig);
e.unschedule(e.func);
e.arrIndex = [ 0, 1, 2, 3, 4, 5 ];
window.isSingle ? e.maxNumLastLevel = 5 : e.maxNumLastLevel = 10;
e.scheduleOnce(function() {
e.schedule(function() {
if (window.isSingle) var t = Tools.getNewArr(e.arrIndex, 3); else t = Tools.getNewArr(e.arrIndex, 6);
for (var i = 0; i < t.length; i++) {
console.log("随机到的npc类型是 " + a);
if (e.npcNumNow < e.maxNumLastLevel) {
for (var a = 0, o = Tools.random(1, 100), n = 0, s = 0; s < e.levelArrLast.length; s++) if (o < (n += e.levelArrLast[s])) {
a = s;
break;
}
t[i] >= 0 && t[i] < 6 && e.createNpc(a, e.posArr[t[i]].position);
}
}
}, e.durationCreateNpc);
}, 1);
}, this);
this.npcNumNow = 0;
this.func = function() {
e.createNow();
};
cc.director.on("昼夜变化", function(t) {
t ? e.createNpcSum() : e.unschedule(e.func);
}, this);
cc.director.on("npc死亡", function() {
e.npcNumNow--;
globalData.setTongGuanData("击杀npc数量", 1);
e.npcNumNow <= 0 && e.npcNumNeedCreate <= 0 && cc.director.emit("npc清理完毕");
}, this);
},
createNpcSum: function() {
var e = window.gameScene.levelNow;
e > window.jsonLevel.length - 2 && (e = window.jsonLevel.length - 2);
if (this.isLastLevel) {
e = window.jsonLevel.length - 1;
console.log("终极之战 npc开始生成");
}
var t = window.jsonLevel[e], i = 1;
window.isSingle || (i = 2);
this.npcNumArr = new Array();
this.npcNumArr.push(t.Npc_Dog * i);
this.npcNumArr.push(t.Npc_Wolf * i);
this.npcNumArr.push(t.Npc_WolfKing);
this.npcNumArr.push(t.Npc_Pig);
this.npcNumNeedCreate = 0;
for (var a = 0; a < this.npcNumArr.length; a++) this.npcNumNeedCreate += this.npcNumArr[a];
console.log("npcNumNeedCreate " + this.npcNumNeedCreate);
var o = this.durationCreateNpc / i;
this.schedule(this.func, o);
},
createNow: function() {
var e, t = this.getNpcType();
if ((e = this.getPos()) && null != t) {
this.npcNumArr[t]--;
this.createNpc(t, e);
}
},
getNpcType: function() {
for (var e = 0; e < this.npcNumArr.length; e++) if (0 != this.npcNumArr[e]) return e;
return null;
},
getPos: function() {
for (var e = new Array(), t = 0; t < this.posArr.length; t++) {
var i = !1;
if (window.isSingle) {
var a = Math.abs(this.posArr[t].x - window.gameScene.rolePosArr[0].x), o = Math.abs(this.posArr[t].y - window.gameScene.rolePosArr[0].y);
a < cc.winSize.width / 2 + this.maxRandomDis && o < cc.winSize.height / 2 + this.maxRandomDis && (i = !0);
} else {
Math.abs(this.posArr[t].x - window.gameScene.rolePosArr[0].x) < cc.winSize.width / 4 + this.maxRandomDis && Math.abs(this.posArr[t].y - window.gameScene.rolePosArr[0].y) < cc.winSize.height / 2 + this.maxRandomDis && (i = !0);
0 == i && Math.abs(this.posArr[t].x - window.gameScene.rolePosArr[1].x) < cc.winSize.width / 4 + this.maxRandomDis && Math.abs(this.posArr[t].y - window.gameScene.rolePosArr[1].y) < cc.winSize.height / 2 + this.maxRandomDis && (i = !0);
}
i || e.push(this.posArr[t]);
}
if (e.length <= 0) console.warn("屏幕外没有npc的生成点"); else {
if (window.isSingle) {
var n = null, s = window.gameScene.rolePosArr[0], c = 1e4;
for (t = 0; t < e.length; t++) if ((l = Tools.getDistance(s, e[t].position)) < c) {
n = e[t].position;
c = l;
}
if (null == n) {
console.warn("npc的生成点获取失败");
return;
}
return n;
}
for (n = null, s = window.gameScene.rolePosArr[0], c = 1e4, t = 0; t < e.length; t++) if ((l = Tools.getDistance(s, e[t].position)) < c) {
n = e[t].position;
c = l;
}
s = window.gameScene.rolePosArr[1];
for (t = 0; t < e.length; t++) {
var l;
if ((l = Tools.getDistance(s, e[t].position)) < c) {
n = e[t].position;
c = l;
}
}
if (null != n) return n;
console.warn("npc的生成点获取失败");
}
},
createNpc: function(e, t) {
this.npcNumNow++;
this.npcNumNeedCreate--;
var i = cc.instantiate(this.npcArr[e]);
i.getComponent("npc").init(!1, this.node);
i.parent = this.parentNode;
i.position = t;
},
update: function(e) {
if (!window.gameOver && this.isLastLevel) {
this.secondLastLevel -= e;
if (this.secondLastLevel <= 0) {
window.tongGuanSwitch = !0;
window.gameOver = !0;
this.secondLabel.node.parent.active = !1;
cc.director.emit("通关了");
this.scheduleOnce(function() {
cc.director.emit("游戏中弹窗", "通关动画");
}, 2);
}
window.lastLevelProgress = (this.secondLastLevelSum - this.secondLastLevel) / this.secondLastLevelSum;
var t = parseInt(this.secondLastLevel), i = this.secondLastLevel - t;
(i = "" + parseInt(100 * i.toFixed(2))).length > 2 && (i = "" + i[0] + i[1]);
this.secondLabel.string = i >= 10 ? this.getSecond(t) + ":" + i : this.getSecond(t) + ":0" + i;
}
},
getSecond: function(e) {
var t, i = parseInt(e / 3600), a = parseInt((e - 3600 * i) / 60);
t = a >= 10 ? a : "0" + a;
var o = parseInt(e - 3600 * i - 60 * a);
return t + ":" + (o >= 10 ? o : "0" + o);
}
});
cc._RF.pop();
}, {} ],
npc: [ function(e, t) {
"use strict";
cc._RF.push(t, "46018qMDgVP1Iuy9XpXSsFu", "npc");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
bar: cc.Sprite,
anim: sp.Skeleton,
jianXueY: 40
},
init: function(e, t) {
this.isSpecial = e;
this.parentNode = t;
},
start: function() {
this.kuLouRate = 1;
this.level = parseInt(window.gameScene.levelNow / 2);
var e = window.jsonNpc[this.index];
this.hp = this.hpSum = e.Npc_Health + e.Npc_HealthUp * this.level;
this.hurtNum = e.Npc_Hurt + e.Npc_HurtUp * this.level;
this.speed = globalData.speedNormal + .5;
"骷髅岛" == globalData.modeType && (this.speed = 1.5);
this.hurtDuration = e.Npc_AttackTime;
this.rewardNum = e.Npc_Reward;
this.bar.fillRange = this.hp / this.hpSum;
this.attackDis = 360;
this.initAnim();
this.frame = 0;
this.vx = 0;
this.vy = 0;
this.targetRole = null;
this.targetZhangPeng = null;
this.couldAttack = !0;
this.isStatic = !1;
this.durationStatic = 0;
this.posLast = this.node.position;
this.speedRate = 1;
if (this.isSpecial) {
this.autoMove = !0;
this.reset();
}
},
reset: function() {
this.duration = 0;
this.angle = Tools.random(1, 360);
this.vxT = 1 * -Math.sin(Tools.angleToRadian(this.angle));
this.vyT = 1 * Math.cos(Tools.angleToRadian(this.angle));
},
beHurt: function(e, t) {
var i = this;
if (!(this.hp <= 0)) {
this.hp -= e;
cc.director.emit("减血数字", cc.v2(this.node.x, this.node.y + this.jianXueY), e);
if (this.hp <= 0) {
window.audioMng.playSfx("僵尸死亡");
if ("骷髅岛" == globalData.modeType) {
var a = 0;
0 == window.isSingle && (a = 1);
var o = 1;
2 == this.index ? o = 2 : 3 == this.index && (o = 5);
globalData.setLevelScore(a, o);
this.isSpecial && cc.director.emit("重置npc生成器", this.parentNode);
} else {
window.audioMng.playSfx("狗死亡");
if (Tools.random(1, 100) < 20) for (var n = 0; n < this.rewardNum; n++) cc.director.emit("掉落物资", "生肉", cc.v2(this.node.x, this.node.y + 50), t);
}
var s = new cc.Color(255, 255, 255, 255);
this.anim.node.color = s;
this.bar.node.parent.active = !1;
this.playAct("死亡");
0 == this.isSpecial ? cc.director.emit("npc死亡") : globalData.setTongGuanData("击杀npc数量", 1);
this.node.getComponent(cc.PhysicsCircleCollider).enabled = !1;
this.node.getComponent(cc.PhysicsBoxCollider).enabled = !1;
cc.tween(this.node).delay(2).to(.4, {
opacity: 0
}).call(function() {
i.node.destroy();
}).start();
} else {
Tools.random(1, 100) < 20 && this.playAct("受击");
this.bar.fillRange = this.hp / this.hpSum;
var c = new cc.Color(255, 0, 0, 255);
s = new cc.Color(255, 255, 255, 255);
this.anim.node.color = c;
this.scheduleOnce(function() {
i.anim.node.color = s;
}, .1);
}
}
},
update: function(e) {
if (window.gameOver) this.hp > 0 && this.playAct("待机"); else if (!(this.hp <= 0) && "受击" != this.anim.animation) {
this.node.zIndex = -parseInt(this.node.y);
this.frame++;
this.isSpecial ? this.inAttRange(e) : this.attack(e);
}
},
inAttRange: function(e) {
var t = !1;
Tools.getDistance(this.node.position, window.gameScene.rolePosArr[0]) < this.attackDis && (t = !0);
window.isSingle || 0 == t && Tools.getDistance(this.node.position, window.gameScene.rolePosArr[1]) < this.attackDis && (t = !0);
if (t) {
this.autoMove = !1;
this.attack(e);
} else {
this.autoMove = !0;
this.duration += e;
this.duration >= 3 && this.reset();
this.node.x += this.vxT * window.frameRate;
this.node.y += this.vyT * window.frameRate;
this.node.zIndex = -parseInt(this.node.y);
this.vxT < 0 ? this.anim.node.scaleX = 1 : this.anim.node.scaleX = -1;
this.playAct("移动");
}
},
attack: function(e) {
if (this.targetRole && this.couldAttack) {
this.targetRole.x < this.node.x ? this.anim.node.scaleX = 1 : this.anim.node.scaleX = -1;
this.playAct("攻击");
} else if (this.targetZhangPeng && (window.isSleeping[0] || window.isSleeping[1]) && this.couldAttack) {
this.targetZhangPeng.x < this.node.x ? this.anim.node.scaleX = 1 : this.anim.node.scaleX = -1;
this.playAct("攻击");
} else this.follow(e);
},
follow: function(e) {
if (0 != this.couldAttack && "攻击" != this.anim.animation) {
if (this.frame % 3 == 0) {
var t = null;
if (window.isSingle) t = window.gameScene.rolePosArr[0]; else if (window.gameScene.rolePosArr[0] && window.gameScene.rolePosArr[1]) {
var i = Tools.getDistance(this.node.position, window.gameScene.rolePosArr[0]), a = Tools.getDistance(this.node.position, window.gameScene.rolePosArr[1]);
window.gameScene.roleArr[0].getComponent("player").dieing && (i = 1e4);
window.gameScene.roleArr[1].getComponent("player").dieing && (a = 1e4);
t = i < a ? window.gameScene.rolePosArr[0] : window.gameScene.rolePosArr[1];
}
if (t) {
var o = Tools.getAngle(this.node.position, t);
if (this.isStatic) {
o += 90 * this.randomAngle;
this.durationStatic -= e;
this.durationStatic <= 0 && (this.isStatic = !1);
}
var n = Tools.angleToRadian(o);
this.vx = Math.sin(n) * this.speed;
this.vy = -Math.cos(n) * this.speed;
}
}
this.node.x += this.vx * window.frameRate * this.speedRate;
this.node.y += this.vy * window.frameRate * this.speedRate;
if (this.vx || this.vy) {
this.playAct("移动");
this.vx < 0 ? this.anim.node.scaleX = 1 : this.anim.node.scaleX = -1;
if (this.posLast && 0 == this.isStatic) {
var s = 20;
"骷髅岛" == globalData.modeType && (s = 10);
if (Tools.getDistance(this.posLast, this.node.position) < s) {
this.durationStatic += e;
if (this.durationStatic >= .3) {
this.randomAngle = Tools.random(0, 1);
0 == this.randomAngle && (this.randomAngle = -1);
this.isStatic = !0;
}
} else {
this.durationStatic = 0;
this.posLast = this.node.position;
}
}
}
}
},
initAnim: function() {
var e = this, t = this;
this.anim.setEventListener(function(i, a) {
switch (a.data.name) {
case "攻击":
if (t.targetRole && (1 == t.anim.node.scaleX && e.node.x > t.targetRole.x || -1 == t.anim.node.scaleX && e.node.x < t.targetRole.x)) {
cc.director.emit("npc攻击", t.targetRole, t.hurtNum * t.kuLouRate);
return;
}
if (t.targetZhangPeng && (window.isSleeping[0] || window.isSleeping[1])) {
cc.director.emit("npc攻击", t.targetZhangPeng, t.hurtNum * t.kuLouRate);
console.log("攻击帐篷 " + t.targetZhangPeng.name);
return;
}
}
});
this.anim.setCompleteListener(function(e) {
switch (e.animation.name) {
case "攻击":
t.playAct("待机");
t.couldAttack = !1;
t.targetRole && t.scheduleOnce(function() {
t.couldAttack = !0;
}, t.hurtDuration);
if (t.targetZhangPeng) {
(window.isSleeping[0] || window.isSleeping[1]) && (t.couldAttack = !1);
t.scheduleOnce(function() {
t.couldAttack = !0;
}, t.hurtDuration);
}
t.targetRole || t.targetZhangPeng || t.scheduleOnce(function() {
t.couldAttack = !0;
}, .3);
break;

case "受击":
t.playAct("待机");
}
});
this.playAct("待机");
if ("骷髅岛" == globalData.modeType) {
cc.director.on("天黑了", function() {
e.kuLouRate = 1.2;
e.playAct("红眼");
}, this);
cc.director.on("天亮了", function() {
e.kuLouRate = 1;
e.playAct("普通眼");
}, this);
if (window.isNight) {
this.playAct("红眼");
this.kuLouRate = 1.2;
}
}
},
onBeginContact: function(e, t, i) {
this.autoMove && this.isSpecial && this.reset();
if (555 == t.tag) if (666 == i.tag) {
var a = i.node;
if (a.getComponent("player")) {
this.targetRole = a;
this.couldAttack = !0;
this.playAct("攻击");
}
"帐篷" == a.name && (this.targetZhangPeng = a);
} else if (668 == i.tag && "篝火" == i.node.name) {
this.speedRate = .6;
this.anim.timeScale = this.speedRate;
}
},
onEndContact: function(e, t, i) {
if (555 == t.tag) if (666 == i.tag) {
var a = i.node;
a.getComponent("player") && (this.targetRole = null);
"帐篷" == a.name && (this.targetZhangPeng = null);
} else if (668 == i.tag && "篝火" == i.node.name) {
this.speedRate = 1;
this.anim.timeScale = this.speedRate;
}
},
playAct: function(e) {
switch (e) {
case "移动":
"移动" != this.anim.animation && this.anim.setAnimation(0, "移动", !0);
break;

case "待机":
"待机" != this.anim.animation && this.anim.setAnimation(0, "待机", !0);
break;

case "受击":
"受击" != this.anim.animation && this.anim.setAnimation(0, "受击", !1);
break;

case "攻击":
"攻击" != this.anim.animation && this.anim.setAnimation(0, "攻击", !1);
break;

case "死亡":
"死亡" != this.anim.animation && this.anim.setAnimation(0, "死亡", !1);
break;

case "红眼":
"红眼" != this.anim.animation && this.anim.setAnimation(1, "红眼", !1);
break;

case "普通眼":
"普通眼" != this.anim.animation && this.anim.setAnimation(1, "普通眼", !1);
}
}
});
cc._RF.pop();
}, {} ],
onlineSwitch: [ function(e, t) {
"use strict";
cc._RF.push(t, "7e78dAQhShF9asRliSnZzbj", "onlineSwitch");
var i = e("LabelUtils2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
if ("uc" != AD.chanelName1 && "BD" != AD.chanelName1 && "android" != AD.chanelName1) {
cc.game.addPersistRootNode(this.node);
if (AD.chanelName == AD.chanelName1) {
this.getSwitchKey();
i.getInstance().initLabel(this.key);
var e = function e() {
if (1 == i.getInstance().getLabel(this.switch)) {
this.switchOn();
this.unschedule(e);
}
};
this.schedule(e, .05, 40, 1);
this.schedule(e, 5);
}
}
},
start: function() {
if ("uc" != AD.chanelName1 && "BD" != AD.chanelName1 && "android" != AD.chanelName1) {
if ("WX" == AD.chanelName1) {
this.yuanShengSecond = 0;
this.schedule(function() {
if (0 == AD_WX.yuanShengIsOk) {
AD_WX.showYuanSheng();
this.yuanShengSecond = 0;
} else {
this.yuanShengSecond++;
30 == this.yuanShengSecond && AD_WX.hideYuanSheng();
}
}, 1);
}
if ("huaWei" == AD.chanelName1) {
cc.game.on(cc.game.EVENT_HIDE, function() {
console.log("------------\x3e后台了");
}, this);
cc.game.on(cc.game.EVENT_SHOW, function() {
console.log("------------\x3e前台了,开始上报");
cc.director.emit("chaPingReportAdShow");
}, this);
}
}
},
getSwitchKey: function() {
switch (AD.chanelName1) {
case "touTiao":
this.key = "";
this.switch = "switch";
break;

case "oppo":
this.key = "srhdqs2_srhdqs2oppo_100_oppo_xyx_20240506";
this.switch = "switch2";
break;

case "vivo":
this.key = "srhdqs2_srhdqs2vivo_100_vivo_xyx_20240425";
this.switch = "switch2";
break;

case "huaWei":
this.key = "tksdzz_tksdzzhw_100_other_apk_20220712";
this.switch = "switch2";
break;

case "QQ":
this.key = "tksdzz_tksdzzqq_100_qq_apk_20220329";
this.switch = "switch";
break;

case "WX":
case "4399Box":
case "BD":
this.key = "";
this.switch = "switch";
}
},
switchOn: function() {
switch (this.chanelName1) {
case "vivo":
AD_vivo.switchOn();
break;

case "oppo":
AD_oppo.switchOn();
break;

case "huaWei":
AD_HuaWei.switchOn();
break;

default:
AD.wuDianRate = 1;
}
}
});
cc._RF.pop();
}, {
LabelUtils2: "LabelUtils2"
} ],
pageViewSelf: [ function(e, t) {
"use strict";
cc._RF.push(t, "a2d35v8abJOKZzh37FzlcnT", "pageViewSelf");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
conent: cc.Node,
distance: {
default: 0,
type: cc.Float,
displayName: "x间隔"
},
minScale: {
default: .8,
type: cc.Float,
displayName: "scale:最小"
},
duration: {
default: .2,
type: cc.Float,
displayName: "移动用时"
},
distanceMove: {
default: 50,
type: cc.Float,
displayName: "滑动触发距离"
},
offsetH: {
default: 50,
type: cc.Float,
displayName: "Y值错位"
}
},
onLoad: function() {
this.arr = this.conent.children;
this.num = this.arr.length;
},
start: function() {
this.pageIndex = this.index;
this.init();
this.conent.on("touchstart", this.touchStart, this);
this.conent.on("touchend", this.touchEnd, this);
this.conent.on("touchcancel", this.touchEnd, this);
},
touchStart: function(e) {
this.posStart = e.getLocation();
},
touchEnd: function(e) {
e.getLocation().x - this.posStart.x > this.distanceMove ? this.pageToNext(!0) : e.getLocation().x - this.posStart.x < -this.distanceMove && this.pageToNext(!1);
},
init: function() {
this.couldChange = !0;
this.leftXTarget = 2 * -this.distance;
this.rightXTarget = (this.num - 1) * this.distance;
this.distanceSum = (this.num - 1) * this.distance;
for (var e = 0; e < this.num; e++) {
this.arr[e].x = (e - this.pageIndex) * this.distance;
this.arr[e].zIndex = -parseInt(Math.abs(this.arr[e].x));
this.arr[e].scale = 1 - parseInt(Math.abs(this.arr[e].x)) / this.distance * this.minScale;
this.arr[e].y = parseInt(Math.abs(this.arr[e].x)) / this.distance * 50;
this.arr[e].y > this.offsetH && (this.arr[e].y = this.offsetH);
this.arr[e].scale < this.minScale && (this.arr[e].scale = this.minScale);
}
for (e = 0; e < this.num; e++) this.arr[e].x >= this.rightXTarget - this.distance ? this.arr[e].x -= this.distanceSum + this.distance : this.arr[e].x < this.leftXTarget && (this.arr[e].x += this.distanceSum + this.distance);
console.log("当前页" + this.pageIndex);
cc.director.emit("切换选中角色", this.index, this.pageIndex);
},
pageToNext: function(e) {
var t = this;
if (0 != this.couldChange) {
this.couldChange = !1;
this.scheduleOnce(function() {
t.couldChange = !0;
cc.director.emit("切换选中角色", t.index, t.pageIndex);
}, this.duration + .02);
if (e) {
this.pageIndex--;
this.pageIndex < 0 && (this.pageIndex = this.num - 1);
console.log("当前页" + this.pageIndex);
for (var i = 0; i < this.num; i++) cc.tween(this.arr[i]).by(this.duration, {
x: this.distance
}).start();
} else {
this.pageIndex++;
this.pageIndex >= this.num && (this.pageIndex = 0);
console.log("当前页" + this.pageIndex);
for (i = 0; i < this.num; i++) cc.tween(this.arr[i]).by(this.duration, {
x: -this.distance
}).start();
}
}
},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "左":
this.pageToNext(!0);
break;

case "右":
this.pageToNext(!1);
}
},
changePage: function() {},
update: function() {
if (0 == this.couldChange) for (var e = 0; e < this.num; e++) {
this.arr[e].x >= this.rightXTarget - this.distance ? this.arr[e].x -= this.distanceSum + this.distance : this.arr[e].x < this.leftXTarget && (this.arr[e].x += this.distanceSum + this.distance);
this.arr[e].zIndex = -parseInt(Math.abs(this.arr[e].x));
this.arr[e].scale = 1 - parseInt(Math.abs(this.arr[e].x)) / this.distance * this.minScale;
this.arr[e].y = parseInt(Math.abs(this.arr[e].x)) / this.distance * this.offsetH;
this.arr[e].y > this.offsetH && (this.arr[e].y = this.offsetH);
this.arr[e].scale < this.minScale && (this.arr[e].scale = this.minScale);
}
}
});
cc._RF.pop();
}, {} ],
pauseBtn: [ function(e, t) {
"use strict";
cc._RF.push(t, "cdef0LUHC1FTY2Q0+Nr87g1", "pauseBtn");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
btnCallBack: function(e, t) {
window.audioMng.playSfx("按钮");
switch (t) {
case "暂停":
cc.director.emit("游戏中弹窗", "暂停");
}
}
});
cc._RF.pop();
}, {} ],
piaoLiu_control: [ function(e, t) {
"use strict";
cc._RF.push(t, "0f061JsZ75EKoX1wHnyAofx", "piaoLiu_control");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this;
this.arr = this.node.children;
this.schedule(function() {
e.createNow();
}, 2);
this.createNow();
for (var t = 0; t < this.arr.length; t++) {
this.arr[t].getComponent(cc.Sprite).enabled = !1;
this.arr[t].children[0].getComponent(cc.Sprite).enabled = !1;
}
},
createNow: function() {
for (var e = new Array(), t = 0; t < this.arr.length; t++) 1 == this.arr[t].childrenCount && e.push(this.arr[t]);
if (!(e.length <= 0)) {
e = Tools.getNewArr(e, e.length);
var i = "水", a = Tools.random(1, 100);
a < 25 ? i = "木头" : a < 50 && (i = "草");
cc.director.emit("漂流物资", i, e[0], e[0].children[0].position);
}
}
});
cc._RF.pop();
}, {} ],
playerSanWei: [ function(e, t) {
"use strict";
cc._RF.push(t, "bade5hFgHFCLbVCmSTWTmS7", "playerSanWei");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
sprArr: [ cc.SpriteFrame ]
},
start: function() {
var e = this;
this.index = this.node.parent.getComponent("player").index;
this.spr = this.node.children[0].getComponent(cc.Sprite);
this.healthArr = [ 1, 1, 1 ];
cc.director.on("玩家健康", function(t, i, a, o) {
if (e.index == i) {
e.healthArr[t] = o;
e.node.scale = 0;
for (var n = 0; n < 3; n++) if (e.healthArr[n] <= .3) {
e.node.scale = 1;
e.spr.spriteFrame = e.sprArr[n];
break;
}
}
}, this);
cc.tween(this.spr.node).repeatForever(cc.tween().to(.4, {
opacity: 100
}).to(.4, {
opacity: 255
})).start();
}
});
cc._RF.pop();
}, {} ],
player: [ function(e, t) {
"use strict";
cc._RF.push(t, "82d5epRD2hNz4jKu0OwOxbu", "player");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
body: cc.Node,
barRevive: cc.Sprite,
shadowFire: cc.Node,
shadowNormal: cc.Node
},
onLoad: function() {
var e = this;
if (1 == this.index && window.isSingle) this.node.destroy(); else {
this.initNormalData();
this.initAnim();
cc.director.on("更换角色", function(t) {
globalData.roleSkinIndexArr[e.index] = t;
e.resetSkin();
}, this);
cc.director.on("物品移除", function(t) {
t == e.cfgIndex && cc.director.emit("更换武器", e.index, "空手", -1);
}, this);
cc.director.on("更换武器", function(t, i, a) {
if (e.index == t && e.cfgIndex != a) {
e.weaponType = i;
e.cfgIndex = a;
e.getHurtNum();
e.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !1;
e.scheduleOnce(function() {
e.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !0;
}, .01);
e.playAct("更换武器");
e.weaponType.indexOf("空手") > -1 || (e.weaponType.indexOf("斧") > -1 ? e.weaponTree = a : e.weaponType.indexOf("镐") > -1 ? e.weaponStone = a : (e.weaponType.indexOf("铁剑") > -1 || e.weaponType.indexOf("石矛") > -1 || e.weaponType.indexOf("木棍") > -1) && (e.weaponNpc = a));
cc.director.emit("背包武器更换", e.index, a);
}
}, this);
cc.director.on("角色背包道具减少", function(t) {
if (e.index == t) {
e.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !1;
e.scheduleOnce(function() {
e.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !0;
}, .1);
}
}, this);
cc.director.on("npc攻击", function(t, i) {
t == e.node && e.beHurt(i);
}, this);
this.helpDuration = 0;
this.helpDurationSum = 5;
this.helping = !1;
this.dieing = !1;
this.dieingActPlayend = !1;
this.barRevive.node.parent.active = !1;
cc.director.on("玩家死亡", function(t) {
e.index == t && e.dieFunc();
}, this);
cc.director.on("复活玩家", function(t) {
e.index == t && e.reviveFunc();
}, this);
cc.director.on("救援玩家", function(t) {
e.index == t && e.reviveFunc();
}, this);
cc.director.on("天亮了", function() {
e.hp <= 0 && cc.director.emit("救援玩家", e.index);
}, this);
window.gameScene.roleArr[this.index] = this.node;
window.gameScene.rolePosArr[this.index] = this.node.position;
cc.director.on("恢复饥渴度", function(t) {
e.index == t && e.playAct("喝水");
}, this);
cc.director.on("恢复饱食度", function(t) {
e.index == t && e.playAct("吃东西");
}, this);
cc.director.on("吃浆果", function(t) {
e.index == t && e.playAct("吃东西");
}, this);
this.healthArr = [ 1, 1, 1 ];
cc.director.on("玩家健康", function(t, i, a, o) {
if (e.index == i) {
2 == t && (e.hp = a);
e.healthArr[t] = o;
for (var n = 1, s = 0; s < 3; s++) if (e.healthArr[s] <= .3) {
n = .3;
break;
}
n <= .3 ? e.playAct("难过表情") : e.playAct("正常表情");
}
}, this);
this.weaponNpc = -1;
this.weaponTree = -1;
this.weaponStone = -1;
}
},
start: function() {
this.scheduleOnce(function() {}, 1);
},
getHurtNum: function() {
var e = globalData.getWeapon(this.weaponType), t = e.Gongju_Hurt * globalData.getJieSuanData(this.index, "攻击加成");
this.hurtNum = e.Gongju_Hurt + t;
this.hurtNumToNpc = 0;
this.fishRateBySkin = 0;
var i = globalData.roleSkinIndexArr[this.index];
6 == i ? this.hurtNumToNpc = 15 : 4 == i && (this.fishRateBySkin = 20);
},
initNormalData: function() {
var e = this;
this.speedRateByLevel = globalData.getJieSuanData(this.index, "移速加成");
cc.director.on("移速加成", function(t) {
e.index == t && (e.speedRateByLevel = globalData.getJieSuanData(e.index, "移速加成"));
}, this);
this.weaponType = "空手";
this.cfgIndex = -1;
this.fishRate = 50;
this.animRate = 1;
this.getHurtNum();
cc.director.on("攻击加成", function(t) {
e.index == t && e.getHurtNum();
}, this);
this.speed = globalData.speedNormal;
this.jianZhiCD = this.jianZhiCDSum = 4;
this.angleMove = null;
this.yuanScaleBody = this.body.scaleX;
this.actIdle = "待机";
this.caiJiNode = null;
this.npcArr = new Array();
this.needAtk = !1;
this.fishing = !1;
this.posYuan = this.node.position;
this.fuHuoEffect = cc.find("复活特效", this.node);
this.fuHuoEffect.active = !1;
this.nearToFire = !1;
},
initAnim: function() {
var e = this;
this.anim = this.body.getComponent(sp.Skeleton);
this.animShadow = this.shadowFire.getComponent(sp.Skeleton);
this.animShadowNormal = this.shadowNormal.getComponent(sp.Skeleton);
this.resetSkin();
this.playAct("更换武器");
this.playAct("待机");
var t = this;
this.anim.setEventListener(function(i, a) {
switch (a.data.name) {
case "攻击":
t.caiJiNode && (c = t.caiJiNode.getComponent("unit_wuZi")) && c.beHurt(t.hurtNum, t.index);
if (t.npcArr.length > 0) for (var o = 0; o < t.npcArr.length; o++) if (t.npcArr[o].x > e.node.x && t.body.scaleX > 0 || t.npcArr[o].x < e.node.x && t.body.scaleX < 0) {
window.audioMng.playSfx("攻击", t.weaponType);
var n = t.npcArr[o].getComponent("npc");
n && n.beHurt(t.hurtNum + t.hurtNumToNpc, t.index);
}
if (-1 != t.cfgIndex) if (window.isSingle) {
var s = null;
if ("骷髅岛" == globalData.modeType) {
globalData.data_kuLou.toolArrSingle[t.cfgIndex].hp--;
s = globalData.data_kuLou.toolArrSingle[t.cfgIndex].hp;
} else {
globalData.data.toolArrSingle[t.cfgIndex].hp--;
s = globalData.data.toolArrSingle[t.cfgIndex].hp;
}
if (s <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
}
} else {
s = null;
if ("骷髅岛" == globalData.modeType) {
globalData.data_kuLou.toolArrDouble[t.cfgIndex].hp--;
s = globalData.data_kuLou.toolArrDouble[t.cfgIndex].hp;
} else {
globalData.data.toolArrDouble[t.cfgIndex].hp--;
s = globalData.data.toolArrDouble[t.cfgIndex].hp;
}
if (s <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
}
}
break;

case "采集":
if (t.caiJiNode) {
(c = t.caiJiNode.getComponent("unit_wuZi")) && c.beHurt(10, t.index);
t.caiJiNode = null;
t.caiJiComplete();
}
break;

case "拾取":
if (t.caiJiNode) {
var c;
(c = t.caiJiNode.getComponent("unit_wuZi")) && c.beHurt(t.hurtNum, t.index);
t.caiJiNode = null;
t.caiJiComplete();
}
}
});
this.anim.setCompleteListener(function(e) {
switch (e.animation.name) {
case "受击":
t.jianZhiCD = t.jianZhiCDSum;
t.playAct("待机");
break;

case "吃东西":
case "喝水":
t.playAct("待机");
break;

case "钓鱼甩竿":
t.diaoYuIng();
break;

case "钓鱼收竿_空":
if ("骷髅岛" == globalData.modeType) {
if (-1 != t.cfgIndex) if (window.isSingle) {
globalData.data_kuLou.toolArrSingle[t.cfgIndex].hp--;
if (globalData.data_kuLou.toolArrSingle[t.cfgIndex].hp <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
} else t.playAct("钓鱼甩竿");
} else {
globalData.data_kuLou.toolArrDouble[t.cfgIndex].hp--;
if (globalData.data_kuLou.toolArrDouble[t.cfgIndex].hp <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
} else t.playAct("钓鱼甩竿");
}
} else if (-1 != t.cfgIndex) if (window.isSingle) {
globalData.data.toolArrSingle[t.cfgIndex].hp--;
if (globalData.data.toolArrSingle[t.cfgIndex].hp <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
} else t.playAct("钓鱼甩竿");
} else {
globalData.data.toolArrDouble[t.cfgIndex].hp--;
if (globalData.data.toolArrDouble[t.cfgIndex].hp <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
} else t.playAct("钓鱼甩竿");
}
break;

case "钓鱼收竿_鱼":
cc.director.emit("掉落物资", "生鱼肉", cc.v2(t.node.x, t.node.y + 50), t.index);
if (-1 != t.cfgIndex) if ("骷髅岛" == globalData.modeType) if (window.isSingle) {
globalData.data_kuLou.toolArrSingle[t.cfgIndex].hp--;
if (globalData.data_kuLou.toolArrSingle[t.cfgIndex].hp <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
} else t.playAct("钓鱼甩竿");
} else {
globalData.data_kuLou.toolArrDouble[t.cfgIndex].hp--;
if (globalData.data_kuLou.toolArrDouble[t.cfgIndex].hp <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
} else t.playAct("钓鱼甩竿");
} else if (window.isSingle) {
globalData.data.toolArrSingle[t.cfgIndex].hp--;
if (globalData.data.toolArrSingle[t.cfgIndex].hp <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
} else t.playAct("钓鱼甩竿");
} else {
globalData.data.toolArrDouble[t.cfgIndex].hp--;
if (globalData.data.toolArrDouble[t.cfgIndex].hp <= 0) {
window.audioMng.playSfx("破碎");
globalData.clearToolData(t.cfgIndex);
cc.director.emit("更换武器", t.index, "空手", -1);
cc.director.emit("更新背包资源", t.index, t.cfgIndex);
} else t.playAct("钓鱼甩竿");
}
break;

case "倒地":
t.playAct("倒地待机");
t.dieingActPlayend = !0;
t.barRevive.node.parent.active = !0;
}
});
},
resetSkin: function() {
this.anim.setSkin(this.anim.skeletonData._skeletonJson.skins[globalData.roleSkinIndexArr[this.index] + 1].name);
this.animShadow.setSkin(this.anim.skeletonData._skeletonJson.skins[globalData.roleSkinIndexArr[this.index] + 1].name);
this.animShadowNormal.setSkin(this.anim.skeletonData._skeletonJson.skins[globalData.roleSkinIndexArr[this.index] + 1].name);
},
update: function(e) {
this.shadowFireFunc();
if (window.gameOver) {
if (window.tongGuanSwitch) {
this.dieing && this.reviveFunc();
this.playAct("待机");
}
} else {
if (this.dieing) {
if (0 == this.dieingActPlayend) {
this.playAct("倒地");
return;
}
if (this.helping) {
this.helpDuration += e;
if (this.helpDuration > this.helpDurationSum) {
this.helpDuration = this.helpDurationSum;
cc.director.emit("救援玩家", this.index);
}
} else if (this.helpDuration > 0) {
this.helpDuration -= e;
this.helpDuration < 0 && (this.helpDuration = 0);
}
this.barRevive.fillRange = this.helpDuration / this.helpDurationSum;
}
this.jianZhiCD > 0 && (this.jianZhiCD -= e);
window.gameScene.rolePosArr[this.index] = this.node.position;
this.node.zIndex = -parseInt(this.node.y);
if ("受击" != this.anim.animation) {
if (null != this.angleMove && window.couldDayTime) {
window.audioMng.playSfx("脚步声", this.index);
this.animRate = 1;
this.posYuan = this.node.position;
this.node.getComponents(cc.PhysicsCircleCollider)[1].enabled && (this.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !1);
var t = Tools.angleToRadian(this.angleMove), i = Math.sin(t) * this.speed, a = -Math.cos(t) * this.speed;
if (i || a) {
if (this.dieing) {
this.playAct("倒地爬");
this.node.x += i * (1 + this.speedRateByLevel + window.speedRateByWater[this.index]) * window.frameRate / 4;
this.node.y += a * (1 + this.speedRateByLevel + window.speedRateByWater[this.index]) * window.frameRate / 4;
} else {
this.playAct("移动");
this.node.x += i * (1 + this.speedRateByLevel + window.speedRateByWater[this.index]) * window.frameRate;
this.node.y += a * (1 + this.speedRateByLevel + window.speedRateByWater[this.index]) * window.frameRate;
}
this.body.scaleX = i > 0 ? this.yuanScaleBody : -this.yuanScaleBody;
}
} else {
window.audioMng.stopSfx("脚步声", this.index);
if (this.dieing) {
this.node.position != this.posYuan && (this.node.position = this.posYuan);
this.animRate = 1;
this.playAct("倒地待机");
1 == this.node.getComponents(cc.PhysicsCircleCollider)[1].enabled && (this.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !1);
} else {
0 == this.node.getComponents(cc.PhysicsCircleCollider)[1].enabled && (this.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !0);
if (this.fishing) this.animRate = 1; else if (this.npcArr.length > 0) {
this.animRate = 1;
this.playAct("攻击");
var o = this.npcArr[0];
this.node.x < o.x ? this.body.scaleX = this.yuanScaleBody : this.body.scaleX = -this.yuanScaleBody;
} else if ("喝水" == this.anim.animation || "吃东西" == this.anim.animation) ; else {
"攻击" == this.actIdle && (this.animRate = 1.5);
this.playAct(this.actIdle);
this.caiJiNode && (this.node.x < this.caiJiNode.x ? this.body.scaleX = this.yuanScaleBody : this.body.scaleX = -this.yuanScaleBody);
}
}
}
this.resetAnimRate();
}
}
},
shadowFireFunc: function() {
if (this.nearToFire) if (window.isNight) {
this.shadowNormal.opacity = 0;
var e = Tools.getAngle(this.node.position, window.gameScene.yingDi.position);
this.shadowFire.angle = e;
this.shadowFire.scaleX = e > 90 && e < 270 ? -this.body.scaleX : this.body.scaleX;
var t = (1e3 - Tools.getDistance(this.node.position, window.gameScene.yingDi.position)) / 1e3 * 2;
this.shadowFire.scaleY = .32 * t;
this.shadowFire.opacity = 60 * (t - .3);
} else {
this.shadowFire.opacity = 0;
this.shadowNormal.opacity = 60 - this.shadowFire.opacity;
this.shadowNormal.scaleX = this.body.scaleX;
this.body.scaleX < 0 ? this.shadowNormal.skewX = -20 : this.shadowNormal.skewX = 20;
} else {
this.shadowFire.opacity = 0;
if (window.isNight) this.shadowNormal.opacity = 0; else {
this.shadowNormal.opacity = 60;
this.shadowNormal.scaleX = this.body.scaleX;
this.body.scaleX < 0 ? this.shadowNormal.skewX = -20 : this.shadowNormal.skewX = 20;
}
}
},
beHurt: function(e) {
var t = this;
if (!this.dieing) {
cc.director.emit("玩家被攻击", this.index, e);
this.jianZhiCD <= 0 && this.playAct("受击");
window.audioMng.playSfx("受伤", globalData.roleSkinIndexArr[this.index]);
cc.director.emit("减血数字", cc.v2(this.node.x, this.node.y + 100), e, !0);
var i = new cc.Color(255, 0, 0, 255), a = new cc.Color(255, 255, 255, 255);
this.anim.node.color = i;
this.scheduleOnce(function() {
t.anim.node.color = a;
}, .1);
}
},
dieFunc: function() {
var e = this;
if (!this.dieing) {
this.dieing = !0;
this.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !1;
this.node.getComponent(cc.PhysicsBoxCollider).enabled = !1;
this.node.getComponents(cc.PhysicsCircleCollider)[2].enabled = !0;
if (window.isSingle) {
this.playAct("倒地");
if (10 == globalData.roleSkinIndexArr[this.index] && 0 == globalData.getHadReviveFree(this.index)) {
globalData.setHadReviveFree(this.index);
this.scheduleOnce(function() {
cc.director.emit("系统提示", "角色天赋技能-原地复活", e.index);
e.scheduleOnce(function() {
cc.director.emit("复活玩家", e.index);
}, 1);
}, 2);
return;
}
this.scheduleOnce(function() {
window.gameOver = !0;
cc.director.emit("游戏失败");
}, 1);
} else {
this.playAct("倒地");
if (10 == globalData.roleSkinIndexArr[this.index] && 0 == globalData.getHadReviveFree(this.index)) {
globalData.setHadReviveFree(this.index);
cc.director.emit("系统提示", "角色天赋技能-原地复活", this.index);
this.scheduleOnce(function() {
cc.director.emit("复活玩家", e.index);
}, 2);
return;
}
var t = 0;
0 == this.index && (t = 1);
window.gameScene.roleArr[t].getComponent("player").dieing && this.scheduleOnce(function() {
window.gameOver = !0;
cc.director.emit("游戏失败");
}, 1);
}
}
},
reviveFunc: function() {
if (0 != this.dieing) {
this.helpDuration = 0;
this.helping = !1;
this.showFuHuoEffect();
this.barRevive.node.parent.active = !1;
this.dieing = !1;
this.dieingActPlayend = !1;
this.node.getComponent(cc.PhysicsBoxCollider).enabled = !0;
this.node.getComponents(cc.PhysicsCircleCollider)[2].enabled = !1;
}
},
diaoYu: function(e) {
var t = this;
if (this.fishing != e) {
this.fishing = e;
if (this.fishing && this.diaoYuTaiNode) {
this.node.x < this.diaoYuTaiNode.x ? this.body.scaleX = this.yuanScaleBody : this.body.scaleX = -this.yuanScaleBody;
var i = Tools.getDistance(this.node.position, this.diaoYuTaiNode.position) / 200;
this.playAct("移动");
cc.tween(this.node).to(i, {
position: this.diaoYuTaiNode.position
}).call(function() {
t.body.scaleX = -t.yuanScaleBody;
t.playAct("钓鱼甩竿");
}).start();
}
}
},
diaoYuIng: function() {
var e = this, t = .1 * Tools.random(30, 50), i = Tools.random(1, 100);
this.playAct("钓鱼待机");
this.scheduleOnce(function() {
i < e.fishRate + e.fishRateBySkin ? e.playAct("钓鱼收竿_鱼") : e.playAct("钓鱼收竿_空");
}, t);
},
showFuHuoEffect: function() {
window.audioMng.playSfx("复活");
this.fuHuoEffect.active = !0;
for (var e = 0; e < this.fuHuoEffect.children.length; e++) this.fuHuoEffect.children[e].getComponent(cc.ParticleSystem).resetSystem();
},
autoChangeWeapon: function(e) {
switch (e) {
case "斧":
if (this.npcArr.length > 0) return;
if (this.weaponType.indexOf("斧") > -1) return;
break;

case "镐":
if (this.npcArr.length > 0) return;
if (this.weaponType.indexOf("镐") > -1) return;
break;

default:
if (this.weaponType.indexOf("铁剑") > -1 || this.weaponType.indexOf("石矛") > -1 || this.weaponType.indexOf("木棍") > -1) return;
}
var t = null;
switch (e) {
case "武器":
t = globalData.getToolWeaponIndexBeiBao(this.index, this.weaponNpc, e);
this.weaponNpc = t.cfgIndex;
break;

case "斧":
t = globalData.getToolWeaponIndexBeiBao(this.index, this.weaponTree, e);
this.weaponTree = t.cfgIndex;
break;

case "镐":
t = globalData.getToolWeaponIndexBeiBao(this.index, this.weaponStone, e);
this.weaponStone = t.cfgIndex;
}
if (-1 != t.cfgIndex) cc.director.emit("更换武器", this.index, t.name, t.cfgIndex); else switch (e) {
case "武器":
break;

case "斧":
cc.director.emit("更换武器", this.index, "空手", -1);
break;

case "镐":
cc.director.emit("对话", this.index, "要有镐子才能开采矿石");
}
},
onBeginContact: function(e, t, i) {
switch (t.tag) {
case 66:
if (o = (s = i.node).getComponent("unit_wuZi")) {
var a = !1;
switch (o.type) {
case "木头":
this.autoChangeWeapon("斧");
a = !0;
break;

case "石头":
this.autoChangeWeapon("镐");
-1 != this.weaponStone && (a = !0);
break;

default:
a = !0;
}
if (a) {
this.caiJiNode = s;
this.actIdle = o.actType;
}
}
if ("钓鱼台" == i.node.name && "鱼竿" == this.weaponType) {
this.diaoYuTaiNode = i.node;
this.diaoYu(!0);
}
break;

case 666:
var o;
if (o = (s = i.node).getComponent("unit_wuZi")) switch (o.type) {
case "木头":
"空手" == this.weaponType && cc.director.emit("对话", this.index, "斧子可以砍树更快");
break;

case "石头":
-1 == this.weaponType.indexOf("镐") && cc.director.emit("对话", this.index, "要有镐子才能开采矿石");
}
"钓鱼台" == i.node.name && "鱼竿" != this.weaponType && cc.director.emit("对话", this.index, "我需要一个鱼竿");
if ("鱼竿" != this.weaponType && 555 == i.tag) {
var n = i.node.getComponent("npc");
if (n && -1 == Tools.getIndexInArray2(this.npcArr, n.node)) {
this.npcArr.push(n.node);
this.autoChangeWeapon("武器");
}
}
if (668 == i.tag) {
if ("篝火" == i.node.name) {
cc.director.emit("靠近篝火", this.index, !0);
this.nearToFire = !0;
}
} else if (555 == i.tag) {
var s, c = (s = i.node).getComponent("player");
c && c.dieing && (c.helping = !0);
}
}
},
onEndContact: function(e, t, i) {
switch (t.tag) {
case 66:
if (i.node.getComponent("unit_wuZi")) {
this.caiJiNode = null;
this.actIdle = "待机";
}
if ("钓鱼台" == i.node.name) {
this.diaoYuTaiNode = null;
this.diaoYu(!1);
}
break;

case 666:
if (555 == i.tag) {
var a = i.node.getComponent("npc");
a && Tools.removeElementFromArr2(this.npcArr, a.node);
}
if (668 == i.tag) {
if ("篝火" == i.node.name) {
cc.director.emit("靠近篝火", this.index, !1);
this.nearToFire = !1;
}
} else if (555 == i.tag) {
var o = i.node.getComponent("player");
o && o.dieing && (o.helping = !1);
}
}
},
playAct: function(e) {
switch (e) {
case "移动":
if ("移动" != this.anim.animation) {
this.anim.setAnimation(0, "移动", !0);
this.animShadow.setAnimation(0, "移动", !0);
this.animShadowNormal.setAnimation(0, "移动", !0);
}
break;

case "倒地":
if ("倒地" != this.anim.animation) {
this.anim.setAnimation(0, "倒地", !1);
this.animShadow.setAnimation(0, "倒地", !1);
this.animShadowNormal.setAnimation(0, "倒地", !1);
}
break;

case "倒地待机":
if ("倒地待机" != this.anim.animation) {
this.anim.setAnimation(0, "倒地待机", !0);
this.animShadow.setAnimation(0, "倒地待机", !0);
this.animShadowNormal.setAnimation(0, "倒地待机", !0);
}
break;

case "倒地爬":
if ("倒地爬" != this.anim.animation) {
this.anim.setAnimation(0, "倒地爬", !0);
this.animShadow.setAnimation(0, "倒地爬", !0);
this.animShadowNormal.setAnimation(0, "倒地爬", !0);
}
break;

case "待机":
if ("待机" != this.anim.animation) {
this.anim.setAnimation(0, "待机", !0);
this.animShadow.setAnimation(0, "待机", !0);
this.animShadowNormal.setAnimation(0, "待机", !0);
}
break;

case "攻击":
if ("攻击" != this.anim.animation) {
this.anim.setAnimation(0, "攻击", !0);
this.animShadow.setAnimation(0, "攻击", !0);
this.animShadowNormal.setAnimation(0, "攻击", !0);
}
break;

case "受击":
if ("受击" != this.anim.animation) {
this.anim.setAnimation(0, "受击", !1);
this.animShadow.setAnimation(0, "受击", !1);
this.animShadowNormal.setAnimation(0, "受击", !1);
}
break;

case "采集":
if ("采集" != this.anim.animation) {
window.audioMng.playSfx("草丛");
this.anim.setAnimation(0, "采集", !1);
this.animShadow.setAnimation(0, "采集", !1);
this.animShadowNormal.setAnimation(0, "采集", !1);
}
break;

case "拾取":
if ("拾取" != this.anim.animation) {
this.anim.setAnimation(0, "拾取", !1);
this.animShadow.setAnimation(0, "拾取", !1);
this.animShadowNormal.setAnimation(0, "拾取", !1);
}
break;

case "钓鱼待机":
if ("钓鱼待机" != this.anim.animation) {
this.anim.setAnimation(0, "钓鱼待机", !0);
this.animShadow.setAnimation(0, "钓鱼待机", !0);
this.animShadowNormal.setAnimation(0, "钓鱼待机", !0);
}
break;

case "钓鱼甩竿":
if ("钓鱼甩竿" != this.anim.animation) {
this.anim.setAnimation(0, "钓鱼甩竿", !1);
this.animShadow.setAnimation(0, "钓鱼甩竿", !1);
this.animShadowNormal.setAnimation(0, "钓鱼甩竿", !1);
}
break;

case "钓鱼收竿_空":
if ("钓鱼收竿_空" != this.anim.animation) {
this.anim.setAnimation(0, "钓鱼收竿_空", !1);
this.animShadow.setAnimation(0, "钓鱼收竿_空", !1);
this.animShadowNormal.setAnimation(0, "钓鱼收竿_空", !1);
}
break;

case "钓鱼收竿_鱼":
if ("钓鱼收竿_鱼" != this.anim.animation) {
this.anim.setAnimation(0, "钓鱼收竿_鱼", !1);
this.animShadow.setAnimation(0, "钓鱼收竿_鱼", !1);
this.animShadowNormal.setAnimation(0, "钓鱼收竿_鱼", !1);
}
break;

case "更换武器":
this.anim.setAnimation(1, "道具/" + this.weaponType, !1);
this.animShadow.setAnimation(1, "道具/" + this.weaponType, !1);
this.animShadowNormal.setAnimation(1, "道具/" + this.weaponType, !1);
break;

case "喝水":
if ("喝水" != this.anim.animation) {
this.anim.setAnimation(0, "喝水", !1);
this.animShadow.setAnimation(0, "喝水", !1);
this.animShadowNormal.setAnimation(0, "喝水", !1);
}
break;

case "吃东西":
if ("吃东西" != this.anim.animation) {
this.anim.setAnimation(0, "吃东西", !1);
this.animShadow.setAnimation(0, "吃东西", !1);
this.animShadowNormal.setAnimation(0, "吃东西", !1);
}
break;

case "难过表情":
"难过表情" != this.anim.animation && this.anim.setAnimation(2, "难过表情", !1);
break;

case "正常表情":
"正常表情" != this.anim.animation && this.anim.setAnimation(2, "正常表情", !1);
}
},
caiJiComplete: function() {
var e = this;
this.scheduleOnce(function() {
e.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !1;
e.scheduleOnce(function() {
e.node.getComponents(cc.PhysicsCircleCollider)[1].enabled = !0;
}, .1);
}, .1);
},
resetAnimRate: function() {
this.anim.timeScale != this.animRate && 5 == globalData.roleSkinIndexArr[this.index] && (this.anim.timeScale = this.animRate);
}
});
cc._RF.pop();
}, {} ],
resMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "8967apSMX9JtamhjmtOlqEb", "resMng");
cc.Class({
extends: cc.Component,
properties: {
bundleNameArr: [ cc.String ],
hadSceneBundle: {
default: !0,
displayName: "场景有分包吗?",
tooltip: "如果为false 则不会进行场景的分包加载"
},
jumpNow: {
default: !1,
displayName: "提前跳转",
tooltip: "true:加载后立即跳转第一个scene",
visible: function() {
return this.hadSceneBundle;
}
},
bundleSceneName: {
default: "",
displayName: "bundle名称",
visible: function() {
return this.hadSceneBundle;
}
},
sceneAll: {
default: [],
type: [ cc.String ],
visible: function() {
return this.hadSceneBundle;
}
},
nextSceneName: {
default: "loadScene",
visible: function() {
return !this.hadSceneBundle;
}
}
},
onLoad: function() {
cc.game.addPersistRootNode(this.node);
window.RES = this;
this.bundleIndex = 0;
window.bScene = new Array();
this.initBar();
this.loadMinDuration = 3;
},
start: function() {
var e = this;
this.bundleArr = new Array();
this.prefabConfigArr = new Array();
this.sprConfigArr = new Array();
this.loadBundle();
cc.director.on("切换场景", function(t, i, a) {
e.loadScene(t, i, a);
}, this);
},
initBar: function() {
this.progress = 0;
},
loadScene: function(e, t, i) {
var a = this;
if (0 != this.hadSceneBundle) {
for (var o = !1, n = 0; n < this.sceneAll.length; n++) if (this.sceneAll[n] == e) {
o = !0;
break;
}
if (o) {
for (n = 0; n < window.bScene.length; n++) if (window.bScene[n] == e) {
console.log(e + " 分包加载完毕");
cc.director.loadScene(e, function() {
t && i && t.call(i);
});
return;
}
this.scheduleOnce(function() {
console.log(e + " 分包加载未完成*** 重新检测加载情况");
t && i ? a.loadScene(e, t, i) : a.loadScene(e);
}, .5);
} else {
console.log(e + " 不在分包里 直接加载");
cc.director.loadScene(e, function() {
t && i && t.call(i);
});
}
} else cc.director.loadScene(e, function() {
t && i && t.call(i);
});
},
getProgress: function() {
var e = .9 + this.bundleIndex / (this.bundleNameArr.length + this.sceneAll.length) * .1;
0 == this.hadSceneBundle ? this.bundleIndex >= this.bundleNameArr.length && (e = 1) : this.jumpNow && window.bScene.length >= 1 && (e = 1);
return e;
},
loadBundle: function() {
if (this.bundleNameArr.length <= 0) this.loadSceneBundle(); else {
var e = this;
cc.assetManager.loadBundle(e.bundleNameArr[e.bundleIndex], function(t, i) {
e.bundleArr.push(i);
e.bundleIndex++;
e.bundleIndex < e.bundleNameArr.length ? e.loadBundle() : e.loadSceneBundle();
});
}
},
loadSceneBundle: function() {
if (0 != this.hadSceneBundle && !(this.sceneAll.length <= 0)) {
var e = this;
cc.assetManager.loadBundle(this.bundleSceneName, function(t, i) {
if (t) console.log("加载错误 " + t); else {
var a = e.bundleIndex - e.bundleNameArr.length;
console.log("加载场景*** " + e.sceneAll[a]);
i.loadScene(e.sceneAll[a], function(t, i) {
e.loadSceneSucess(i.name);
console.log("加载场景完毕*** " + i.name);
});
}
});
}
},
loadSceneSucess: function(e) {
this.bundleIndex++;
console.log(e + "=>加载成功    this.bundleIndex  " + this.bundleIndex);
this.bundleIndex < this.bundleNameArr.length + this.sceneAll.length && this.loadSceneBundle();
window.bScene.push(e);
},
getPrefab: function(e, t, i, a) {
console.log("加载getPrefab**********");
for (var o = this, n = 0; n < this.prefabConfigArr.length; n++) if (this.prefabConfigArr[n].prefabName == t && this.prefabConfigArr[n].bundleName == e) {
var s = this.prefabConfigArr[n].prefab;
i.call(a, s);
console.log("预制体二次获取成功 " + t);
return;
}
var c = null;
for (n = 0; n < this.bundleArr.length; n++) this.bundleArr[n].name == e && (c = this.bundleArr[n]);
null != c ? c.load(t, cc.Prefab, function(n, s) {
if (n) console.warn("Prefab error:" + n); else {
console.log("预制体加载成功 " + t);
var c = {
prefab: s,
prefabName: t,
bundleName: e
};
o.prefabConfigArr.push(c);
i.call(a, s);
}
}) : console.warn("预制体加载失败 =>bundle为空 bundle名称是:" + e);
},
getSpriteFrame: function(e, t, i, a) {
for (var o = null, n = 0; n < this.bundleArr.length; n++) this.bundleArr[n].name == e && (o = this.bundleArr[n]);
null != o ? o.load(t, cc.SpriteFrame, function(e, o) {
if (e) {
Tools.warn("图片加载 error:" + e);
i.call(a, null);
} else {
console.log("图片加载成功 " + t);
i.call(a, o);
}
}) : Tools.warn("预制体加载失败 =>bundle为空 bundle名称是:" + e);
},
getAssets: function(e, t, i, a, o) {
for (var n = null, s = 0; s < this.bundleArr.length; s++) this.bundleArr[s].name == e && (n = this.bundleArr[s]);
null != n ? n.loadDir(t, i, function(e, i) {
if (e) Tools.warn("文件夹资源加载失败:" + e); else {
console.log("文件夹加载成功 路径是： " + t);
a.call(o, i);
}
}) : Tools.warn("预制体加载失败 =>bundle为空 bundle名称是:" + e);
},
update: function(e) {
if (!(this.progress >= 1) && this.progress < this.getProgress()) {
this.progress += e / this.loadMinDuration;
if (this.progress >= 1) {
this.progress = 1;
0 == this.hadSceneBundle ? cc.director.loadScene(this.nextSceneName) : this.loadScene(this.sceneAll[0]);
}
}
}
});
cc._RF.pop();
}, {} ],
roleCfg: [ function(e, t) {
"use strict";
cc._RF.push(t, "13654z5f8FN84RSZSqDZjWf", "roleCfg");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
barHp: cc.Sprite,
barHurt: cc.Sprite,
barSpeed: cc.Sprite,
nameNode: cc.Sprite,
nameSprArr: [ cc.SpriteFrame ],
descSpr: cc.Sprite,
descSprArr: [ cc.SpriteFrame ]
},
onLoad: function() {
this.maxHp = 200;
this.maxHurt = 77;
this.maxSpeed = 100;
},
start: function() {
var e = this;
this.reset(this.index);
cc.director.on("切换选中角色", function(t, i) {
t == e.index && e.reset(i);
}, this);
},
reset: function(e) {
this.barHp.fillRange = globalData.getSkinJson(e, "血量") / this.maxHp;
this.barHurt.fillRange = globalData.getSkinJson(e, "攻击力") / this.maxHurt;
this.barSpeed.fillRange = globalData.getSkinJson(e, "移速") / this.maxSpeed;
this.nameNode.spriteFrame = this.nameSprArr[e];
this.descSpr.spriteFrame = this.descSprArr[e];
}
});
cc._RF.pop();
}, {} ],
shadowBuild: [ function(e, t) {
"use strict";
cc._RF.push(t, "7f01fbL/9NNvJ7JGrP7Qm1x", "shadowBuild");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.opacityYuan = this.node.opacity;
},
update: function() {
0 == this.node.opacity ? window.isNight && window.gameScene.anim_gouHuo.active && (this.node.opacity = this.opacityYuan) : this.node.opacity == this.opacityYuan && (window.isNight && window.gameScene.anim_gouHuo.active || (this.node.opacity = 0));
}
});
cc._RF.pop();
}, {} ],
shiPei: [ function(e, t) {
"use strict";
cc._RF.push(t, "7c4faJHSIZOhbgX8MoQNST8", "shiPei");
cc.Class({
extends: cc.Component,
properties: {
left: !1,
right: !0,
fanFangXiang: !1
},
start: function() {
this.left ? this.node.x += (1280 - cc.winSize.width) / 2 : this.right && (this.node.x -= (1280 - cc.winSize.width) / 2);
if (window.isSingle && this.fanFangXiang) {
this.node.x *= -1;
this.node.x -= 100;
}
}
});
cc._RF.pop();
}, {} ],
taoShengJiLu: [ function(e, t) {
"use strict";
cc._RF.push(t, "a1aaaeh6apJyq9DiJZliIwl", "taoShengJiLu");
cc.Class({
extends: cc.Component,
properties: {
modeType: "海岛",
index: 0,
dayLabel: cc.Label
},
start: function() {
if ("骷髅岛" == this.modeType) var e = globalData.data_kuLou.bestScore[this.index]; else e = globalData.data.bestScore[this.index];
200 == e && (e = -1);
this.dayLabel.string = e + 1;
}
});
cc._RF.pop();
}, {} ],
tips_buildCreateMore: [ function(e, t) {
"use strict";
cc._RF.push(t, "e7e59Xv8dZOw76sSGptsKa2", "tips_buildCreateMore");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
var e = this;
this.check();
cc.director.on("昼夜变化", function() {
e.check();
}, this);
cc.director.on("开始建造", function() {
e.check();
}, this);
},
check: function() {
for (var e = !0, t = 0; t < 6; t++) if (0 != globalData.getBuildData("建筑解锁状态", t)) {
e = !1;
break;
}
this.node.active = e;
window.isNight ? this.node.scale = 0 : this.node.scale = 1;
}
});
cc._RF.pop();
}, {} ],
tips_couldGet: [ function(e, t) {
"use strict";
cc._RF.push(t, "92c91MxbJVCi7dGDIbHwRL0", "tips_couldGet");
cc.Class({
extends: cc.Component,
properties: {
type: "水"
},
start: function() {
var e = this;
this.check();
this.schedule(function() {
e.check();
}, 1);
this.duration = .5;
this.act = cc.tween(this.node).repeatForever(cc.tween().delay(2).to(this.duration / 2, {
angle: 5
}, {
easing: "sineInOut"
}).to(this.duration, {
angle: -5
}, {
easing: "sineInOut"
}).to(this.duration, {
angle: 5
}, {
easing: "sineInOut"
}).to(this.duration, {
angle: -5
}, {
easing: "sineInOut"
}).to(this.duration, {
angle: 5
}, {
easing: "sineInOut"
}).to(this.duration, {
angle: -5
}, {
easing: "sineInOut"
}).to(this.duration, {
angle: 5
}, {
easing: "sineInOut"
}).to(this.duration, {
angle: -5
}, {
easing: "sineInOut"
}).to(this.duration, {
angle: 5
}, {
easing: "sineInOut"
}).to(this.duration / 2, {
angle: 5
}, {
easing: "sineInOut"
}));
this.act.start();
},
check: function() {
var e = 0;
switch (this.type) {
case "水":
var t = globalData.getBuildData("淡水时间");
parseInt(t / 20) > 0 && (e = 1);
break;

case "烤肉":
globalData.getBuildData("烤箱熟肉数") > 0 && (e = 1);
break;

case "铁块":
globalData.getBuildData("冶炼完成数量") > 0 && (e = 1);
}
this.node.scale = e;
}
});
cc._RF.pop();
}, {} ],
unit_drop_wuZiMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "fbccfxL/bpCP4anHqSjEePW", "unit_drop_wuZiMng");
cc.Class({
extends: cc.Component,
properties: {
unitDrop: cc.Prefab,
unitDrop_qiuQi: cc.Prefab,
unit_wuZi_piaoLiu: cc.Prefab
},
onLoad: function() {
var e = this;
this.pool_drop = new cc.NodePool();
cc.director.on("掉落物资", function(t, i, a) {
e.create(t, i, a, e.pool_drop);
}, this);
this.pool_diuQi = new cc.NodePool();
cc.director.on("丢弃物资", function(t, i, a, o) {
e.createDiuQi(t, i, a, o, e.pool_diuQi);
}, this);
this.pool_piaoLiu = new cc.NodePool();
cc.director.on("漂流物资", function(t, i, a) {
e.createPiaoLiu(t, i, a, e.pool_piaoLiu);
}, this);
},
createPiaoLiu: function(e, t, i, a) {
var o = null;
(o = a.size() > 0 ? a.get() : cc.instantiate(this.unit_wuZi_piaoLiu)).parent = t;
o.position = i;
o.getComponent("unit_piaoLiu_wuZi").reset(e, a, i);
},
create: function(e, t, i, a) {
var o = null;
(o = cc.instantiate(this.unitDrop)).parent = this.node;
o.position = t;
o.getComponent("unit_drop_wuZi").reset(e, i, a, t);
},
createDiuQi: function(e, t, i, a, o) {
var n = !1;
globalData.getWeapon(e) && globalData.getWeapon(e).Gongju_ > 1 && (n = !0);
if (n) {
var s = null;
(s = o.size() > 0 ? o.get() : cc.instantiate(this.unitDrop_qiuQi)).parent = this.node;
s.position = i;
s.getComponent("unit_drop_wuZi_diuQi").reset(e, t, a, o, i);
} else for (var c = 0; c < t; c++) {
s = null;
(s = o.size() > 0 ? o.get() : cc.instantiate(this.unitDrop_qiuQi)).parent = this.node;
s.position = i;
s.getComponent("unit_drop_wuZi_diuQi").reset(e, 1, a, o, i);
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
unit_drop_wuZi_diuQi: [ function(e, t) {
"use strict";
cc._RF.push(t, "5190fWxKf5JkYMnsA1JTvZI", "unit_drop_wuZi_diuQi");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
reset: function(e, t, i, a) {
var o = this;
this.node.position = window.gameScene.roleArr[i];
this.node.y += 60;
this.node.getComponent(cc.PhysicsCircleCollider).enabled = !1;
this.pool = a;
this.type = e;
this.couldFly = !1;
this.targetPlayer = null;
this.roleIndexTarget = -1;
this.hp = t;
this.roleIndexTarget = -1;
this.roleIndex = i;
this.scheduleOnce(function() {
o.roleIndex = -1;
}, 10);
this.scheduleOnce(function() {
o.pool.put(o.node);
}, 60);
for (var n = 0; n < this.node.children.length; n++) this.node.children[n].active = e == this.node.children[n].name;
this.node.zIndex = 5e3;
var s = .2 + .01 * Tools.random(0, 5), c = Tools.random(-20, 20), l = this.node.x + c, r = this.node.x + 2 * c, d = this.node.y + Tools.random(40, 60), h = this.node.y - 63 + Tools.random(0, 15);
cc.tween(this.node).to(s, {
position: cc.v2(l, d)
}, {
easing: "sineOut"
}).to(s, {
position: cc.v2(r, h)
}, {
easing: "sineIn"
}).call(function() {
o.node.zIndex = -parseInt(o.node.y);
}).delay(.5).call(function() {
o.couldFly = !0;
o.node.getComponent(cc.PhysicsCircleCollider).enabled = !0;
}).start();
this.node.scale = 0;
cc.tween(this.node).to(.3, {
scale: .5
}).start();
},
dieFunc: function() {
cc.director.emit("特效+1", "资源+1", this.roleIndexTarget, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 90), this.type);
this.couldFly = !1;
this.targetPlayer = null;
this.roleIndexTarget = -1;
this.pool.put(this.node);
},
update: function() {
if (this.couldFly && this.targetPlayer) {
this.node.zIndex = 5e3;
var e = Tools.getAngle(this.node.position, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 60)) + 180, t = 8 * -Math.sin(Tools.angleToRadian(e)), i = 8 * Math.cos(Tools.angleToRadian(e));
this.node.x += t;
this.node.y += i;
if (Tools.getDistance(this.node.position, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 60)) < 20) {
this.dieFunc();
this.couldFly = !1;
}
}
},
onBeginContact: function(e, t, i) {
if (!this.targetPlayer && 666 == i.tag) {
var a = i.node, o = a.getComponent("player");
if (o && o.index != this.roleIndex) {
var n = {
name: this.type,
hp: this.hp,
roleIndex: o.index
};
if (0 == globalData.addToolData(n)) cc.director.emit("系统提示", "背包空间不足", o.index); else {
this.targetPlayer = a;
this.roleIndexTarget = o.index;
cc.director.emit("更新背包资源", o.index);
}
}
}
}
});
cc._RF.pop();
}, {} ],
unit_drop_wuZi_shuiPing: [ function(e, t) {
"use strict";
cc._RF.push(t, "defd3GJzH5FuKv+JnXMbKfh", "unit_drop_wuZi_shuiPing");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.index = window.waterFreeIndex;
window.waterFreeIndex++;
if (window.isWaterFreeFirst) globalData.setWaterFree(-1, 1); else if (0 == globalData.getWaterFree()[this.index]) {
this.node.destroy();
return;
}
this.node.zIndex = -parseInt(this.node.y) - 100;
this.type = "水";
this.couldFly = !0;
this.node.getComponent(cc.PhysicsCircleCollider).enabled = !0;
this.targetPlayer = null;
this.node.scale = .5;
},
dieFunc: function() {
switch (this.type) {
case "木头":
globalData.setTongGuanData("木头数量", 1);
break;

case "石头":
globalData.setTongGuanData("石头数量", 1);
break;

case "草":
globalData.setTongGuanData("草数量", 1);
break;

case "铁矿":
globalData.setTongGuanData("铁矿数量", 1);
}
cc.director.emit("特效+1", "资源+1", this.roleIndexTarget, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 90), this.type);
this.couldFly = !1;
this.targetPlayer = null;
this.node.destroy();
globalData.setWaterFree(this.index, 0);
},
update: function() {
if (this.couldFly && this.targetPlayer) {
this.node.zIndex = 5e3;
var e = Tools.getAngle(this.node.position, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 60)) + 180, t = 12 * -Math.sin(Tools.angleToRadian(e)) * window.frameRate, i = 12 * Math.cos(Tools.angleToRadian(e)) * window.frameRate;
this.node.x += t;
this.node.y += i;
if (Tools.getDistance(this.node.position, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 60)) < 20) {
this.dieFunc();
this.couldFly = !1;
}
}
},
onBeginContact: function(e, t, i) {
if (!this.targetPlayer && 666 == i.tag) {
var a = i.node, o = a.getComponent("player");
if (o) {
this.hp = globalData.getWuPinHp(this.type);
var n = {
name: this.type,
hp: this.hp,
roleIndex: o.index
};
if (0 == globalData.addToolData(n)) cc.director.emit("系统提示", "背包空间不足", o.index); else {
this.targetPlayer = a;
this.roleIndexTarget = o.index;
cc.director.emit("更新背包资源", o.index);
}
}
}
}
});
cc._RF.pop();
}, {} ],
unit_drop_wuZi: [ function(e, t) {
"use strict";
cc._RF.push(t, "cda2939M/JE96kcfCyc5BGY", "unit_drop_wuZi");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
reset: function(e, t, i) {
var a = this;
this.node.position = window.gameScene.roleArr[t];
this.node.y += 60;
this.node.getComponent(cc.PhysicsCircleCollider).enabled = !1;
this.node.zIndex = 5e3;
this.pool = i;
this.type = e;
this.couldFly = !1;
this.targetPlayer = null;
for (var o = 0; o < this.node.children.length; o++) this.node.children[o].active = e == this.node.children[o].name;
var n = .2 + .01 * Tools.random(0, 5), s = Tools.random(-20, 20), c = this.node.x + s, l = this.node.x + 2 * s, r = this.node.y + Tools.random(40, 60), d = this.node.y - 63 + Tools.random(0, 15);
cc.tween(this.node).to(n, {
position: cc.v2(c, r)
}, {
easing: "sineOut"
}).to(n, {
position: cc.v2(l, d)
}, {
easing: "sineIn"
}).call(function() {
a.node.zIndex = -parseInt(a.node.y);
}).delay(.5).call(function() {
a.couldFly = !0;
a.node.getComponent(cc.PhysicsCircleCollider).enabled = !0;
}).start();
this.node.scale = 0;
cc.tween(this.node).to(.3, {
scale: .5
}).start();
this.scheduleOnce(function() {
a.node.destroy();
}, 60);
},
dieFunc: function() {
switch (this.type) {
case "木头":
globalData.setTongGuanData("木头数量", 1);
break;

case "石头":
globalData.setTongGuanData("石头数量", 1);
break;

case "草":
globalData.setTongGuanData("草数量", 1);
break;

case "铁矿":
globalData.setTongGuanData("铁矿数量", 1);
}
cc.director.emit("特效+1", "资源+1", this.roleIndexTarget, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 90), this.type);
this.couldFly = !1;
this.targetPlayer = null;
this.node.destroy();
},
update: function() {
if (this.couldFly && this.targetPlayer) {
this.node.zIndex = 5e3;
var e = Tools.getAngle(this.node.position, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 60)) + 180, t = 12 * -Math.sin(Tools.angleToRadian(e)) * window.frameRate, i = 12 * Math.cos(Tools.angleToRadian(e)) * window.frameRate;
this.node.x += t;
this.node.y += i;
if (Tools.getDistance(this.node.position, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 60)) < 20) {
this.dieFunc();
this.couldFly = !1;
}
}
},
onBeginContact: function(e, t, i) {
if (!this.targetPlayer && 666 == i.tag) {
var a = i.node, o = a.getComponent("player");
if (o) {
this.hp = globalData.getWuPinHp(this.type);
var n = {
name: this.type,
hp: this.hp,
roleIndex: o.index
};
if (0 == globalData.addToolData(n)) cc.director.emit("系统提示", "背包空间不足", o.index); else {
this.targetPlayer = a;
this.roleIndexTarget = o.index;
cc.director.emit("更新背包资源", o.index);
}
}
}
}
});
cc._RF.pop();
}, {} ],
unit_pangXie_move: [ function(e, t) {
"use strict";
cc._RF.push(t, "af86fAPvXJHmoKKWXsCfwTC", "unit_pangXie_move");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.reset();
},
reset: function() {
this.duration = 0;
this.angle = Tools.random(1, 360);
this.speed = .3;
this.vx = -Math.sin(Tools.angleToRadian(this.angle)) * this.speed;
this.vy = Math.cos(Tools.angleToRadian(this.angle)) * this.speed;
},
onBeginContact: function() {
this.reset();
},
update: function(e) {
this.duration += e;
this.duration >= 3 && this.reset();
this.node.x += this.vx * window.frameRate;
this.node.y += this.vy * window.frameRate;
this.node.zIndex = -parseInt(this.node.y);
}
});
cc._RF.pop();
}, {} ],
unit_piaoLiu_wuZi: [ function(e, t) {
"use strict";
cc._RF.push(t, "7cc7f8BrW1IsYmWc1OZqdr4", "unit_piaoLiu_wuZi");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {},
reset: function(e, t, i) {
var a = this;
this.node.position = i;
this.node.getComponent(cc.PhysicsCircleCollider).enabled = !1;
this.pool = t;
this.type = e;
this.couldFly = !1;
this.targetPlayer = null;
for (var o = 1; o < this.node.children.length; o++) this.node.children[o].active = e == this.node.children[o].name;
this.node.zIndex = -parseInt(this.node.y);
this.couldFly = !1;
this.node.getComponent(cc.PhysicsCircleCollider).enabled = !0;
this.node.children[0].active = !0;
this.speed = 120;
this.durationAct = Tools.getDistance(this.node.position, cc.v2(0, 0)) / this.speed;
this.act = cc.tween(this.node).to(this.durationAct, {
position: cc.v2(0, 0)
}, {
easing: "sineInOut"
}).call(function() {
a.node.children[0].active = !1;
a.scheduleOnce(function() {
a.pool.put(a.node);
}, 60);
});
this.act.start();
},
getNow: function() {
var e = this;
this.node.children[0].active = !1;
this.act.stop();
this.scheduleOnce(function() {
e.couldFly = !0;
var t = e.node.parent.convertToWorldSpaceAR(e.node.position);
e.node.position = window.gameScene.unitParent.convertToNodeSpaceAR(t);
e.node.parent = window.gameScene.unitParent;
}, .01);
},
dieFunc: function() {
switch (this.type) {
case "木头":
globalData.setTongGuanData("木头数量", 1);
break;

case "石头":
globalData.setTongGuanData("石头数量", 1);
break;

case "草":
globalData.setTongGuanData("草数量", 1);
break;

case "铁矿":
globalData.setTongGuanData("铁矿数量", 1);
}
cc.director.emit("特效+1", "资源+1", this.roleIndexTarget, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 90), this.type);
this.couldFly = !1;
this.targetPlayer = null;
this.pool.put(this.node);
},
update: function() {
if (this.couldFly) if (this.targetPlayer) {
this.node.zIndex = 5e3;
var e = Tools.getAngle(this.node.position, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 60)) + 180, t = 8 * -Math.sin(Tools.angleToRadian(e)), i = 8 * Math.cos(Tools.angleToRadian(e));
this.node.x += t;
this.node.y += i;
if (Tools.getDistance(this.node.position, cc.v2(this.targetPlayer.x, this.targetPlayer.y + 60)) < 20) {
this.dieFunc();
this.couldFly = !1;
}
} else this.node.zIndex = -parseInt(this.node.y); else this.node.zIndex = -parseInt(this.node.y);
},
onBeginContact: function(e, t, i) {
if (!this.targetPlayer && 666 == i.tag) {
var a = i.node, o = a.getComponent("player");
if (o) {
this.hp = globalData.getWuPinHp(this.type);
var n = {
name: this.type,
hp: this.hp,
roleIndex: o.index
};
if (0 == globalData.addToolData(n)) cc.director.emit("系统提示", "背包空间不足", o.index); else {
this.getNow();
this.targetPlayer = a;
this.roleIndexTarget = o.index;
cc.director.emit("更新背包资源", o.index);
}
}
}
}
});
cc._RF.pop();
}, {} ],
unit_wuZi: [ function(e, t) {
"use strict";
cc._RF.push(t, "eba29CiytBIPJMj1PTLlm7c", "unit_wuZi");
cc.Class({
extends: cc.Component,
properties: {
destroyT: !1,
sprMid: cc.SpriteFrame,
sprDie: cc.SpriteFrame,
sprTieKuang: cc.SpriteFrame,
sprYuan: cc.SpriteFrame,
type: "草",
actType: "采集",
sizeIndex: 0,
treeSpr: {
default: null,
type: cc.Sprite,
visible: function() {
return "木头" == this.type;
}
},
shadowNode: {
default: null,
type: cc.Node,
visible: function() {
return "木头" == this.type;
}
}
},
onLoad: function() {
this.scaleYuan = this.node.scale;
this.first = !0;
this.checkParent();
},
checkParent: function() {
var e = this;
"unitParent" == this.node.parent.name ? this.initData() : this.scheduleOnce(function() {
e.checkParent();
}, .1);
},
start: function() {},
beHurt: function(e, t) {
if (!(this.hp <= 0)) {
this.hp -= e;
var i = this.hpSum - this.hp - this.hpHadReward, a = parseInt(i / this.hpForGetProp);
if (a > 0) {
this.hpHadReward += this.hpForGetProp * a;
this.createReward(a, t);
}
this.sprMid && this.hp <= this.hpSum / 2 && (this.node.getComponent(cc.Sprite).spriteFrame = this.sprMid);
switch (this.type) {
case "木头":
window.audioMng.playSfx("砍树");
cc.tween(this.treeSpr.node).to(.03, {
angle: 3
}).to(.05, {
angle: -3
}).to(.03, {
angle: 0
}).start();
if (this.hp <= 0) {
this.dieFunc();
cc.director.emit("树木倒下", this.node.position);
}
break;

case "石头":
window.audioMng.playSfx("挖矿石");
cc.tween(this.node).to(.03, {
scale: .95
}).to(.05, {
scale: 1
}).start();
this.hp <= 0 && this.dieFunc();
break;

default:
if (this.hp <= 0) {
this.createReward(1, t);
this.dieFunc();
}
}
}
},
initData: function() {
this.node.zIndex = -parseInt(this.node.y);
if (this.first) {
this.first = !1;
this.shadowNode && (this.shadowNodeScale = this.shadowNode.scale);
this.posYuan = this.node.position;
} else {
this.node.scale = this.scaleYuan;
this.sprYuan && (this.treeSpr ? this.treeSpr.spriteFrame = this.sprYuan : this.node.getComponent(cc.Sprite).spriteFrame = this.sprYuan);
this.shadowNode && (this.shadowNode.scale = this.shadowNodeScale);
var e = this.node.getComponent(cc.PhysicsCircleCollider);
e && this.scheduleOnce(function() {
e.enabled = !0;
}, .1);
this.node.position = this.posYuan;
}
this.hpForGetProp = 0;
this.hp = this.hpSum = 1;
this.hpHadReward = 0;
var t = -1;
switch (this.type) {
case "木头":
switch (this.sizeIndex) {
case 0:
t = 0;
break;

case 1:
t = 1;
break;

case 2:
t = 2;
}
break;

case "石头":
switch (this.sizeIndex) {
case 0:
t = 3;
break;

case 1:
t = 4;
}
break;

case "草":
this.reviveDuration = window.jsonZiYuan[7].ZiYuan_Time;
break;

case "浆果":
this.reviveDuration = window.jsonZiYuan[5].ZiYuan_Time;
break;

case "胡萝卜":
this.reviveDuration = window.jsonZiYuan[8].ZiYuan_Time;
break;

case "生螃蟹":
this.reviveDuration = window.jsonZiYuan[6].ZiYuan_Time;
}
if (-1 != t) {
this.hp = this.hpSum = window.jsonZiYuan[t].ZiYuan_Hp;
this.hpForGetProp = window.jsonZiYuan[t].ZiYuan_Output;
this.reviveDuration = window.jsonZiYuan[t].ZiYuan_Time;
}
},
createReward: function(e, t) {
if ("浆果" == this.type) for (var i = 0; i < 2; i++) cc.director.emit("掉落物资", this.type, cc.v2(this.node.x, this.node.y + 50), t); else for (i = 0; i < e; i++) {
var a = !1;
"石头" == this.type && (a = Tools.random(1, 100) <= 10);
a ? cc.director.emit("掉落物资", "铁矿", cc.v2(this.node.x, this.node.y + 50), t) : cc.director.emit("掉落物资", this.type, cc.v2(this.node.x, this.node.y + 50), t);
}
},
dieFunc: function() {
var e = this;
this.hp = 0;
if (this.sprDie) switch (this.type) {
case "木头":
this.treeSpr.spriteFrame = this.sprDie;
break;

default:
this.node.getComponent(cc.Sprite).spriteFrame = this.sprDie;
} else this.node.getComponent(cc.Sprite).spriteFrame = null;
"石头" == this.type && (this.node.zIndex = -5e3);
switch (this.type) {
case "胡萝卜":
case "浆果":
case "生螃蟹":
window.audioMng.playSfx("拔萝卜");
}
this.shadowNode && (this.shadowNode.scale = 0);
if (this.destroyT) this.node.scale = 0; else {
var t = this.node.getComponent(cc.PhysicsCircleCollider);
t && this.scheduleOnce(function() {
t.enabled = !1;
}, .1);
}
this.scheduleOnce(function() {
e.initData();
}, this.reviveDuration);
}
});
cc._RF.pop();
}, {} ],
yinSiPanel: [ function(e, t) {
"use strict";
cc._RF.push(t, "1e837+wgo5KR69zS5Tur+1Z", "yinSiPanel");
cc.Class({
extends: cc.Component,
properties: {
dialogYinSi: cc.Node,
zhuTiCfg: {
default: [],
type: [ cc.String ],
displayName: "主体配置(如:QQ,北京)"
},
zhuTiName: "主体名称",
gameName: "游戏名称",
key: "wtszs",
btnAgree1: cc.Node,
btnNotAgree: cc.Node,
btnClose1: cc.Node,
gameNameLabel: cc.Label,
adressLabel: cc.Label,
zhuTiLabel: cc.Label
},
onLoad: function() {
var e = this;
window.key_yinSi = "keyYinSi" + this.key;
window.showYinSi = !1;
this.dialogYinSi.active = !1;
this.zhuTiCfg.forEach(function(t) {
if (t.split(",")[0] == AD.chanelName1) switch (t.split(",")[1]) {
case "石家庄":
e.zhuTiName = "石家庄木偶人网络科技有限公司";
break;

case "河南":
e.zhuTiName = "河南玖神网络科技有限公司";
break;

case "北京":
e.zhuTiName = "天艺互娱(北京)网络科技有限公司";
}
});
this.zhuTiLabel.string = "主体名称:" + this.zhuTiName;
var t = [ "河北省石家庄市高新区长江大道9号筑业高新国际A11F", "河南省安阳市高新区弦歌大道西段科创大厦1楼创客空间105-12", "北京市密云区密云镇鼓楼南大街兴旺市场东侧商铺楼1至4层（443室）" ];
this.zhuTiName.indexOf("石家庄") > -1 ? this.adressLabel.string = "公司地址:" + t[0] : this.zhuTiName.indexOf("河南") > -1 ? this.adressLabel.string = "公司地址:" + t[1] : this.zhuTiName.indexOf("北京") > -1 && (this.adressLabel.string = "公司地址:" + t[2]);
this.gameNameLabel.string = "游戏名称:" + this.gameName;
},
start: function() {
if (window.showYinSi) {
this.dialogYinSi.active = !1;
this.checkPermission();
} else this.dialogYinSi.active = !0;
},
onEnable: function() {
this.resetBtn();
},
resetBtn: function() {
window.showYinSi = !1;
1 == cc.sys.localStorage.getItem(window.key_yinSi) && (window.showYinSi = !0);
if (window.showYinSi) {
this.btnClose1.active = !0;
this.btnAgree1.active = !1;
this.btnNotAgree.active = !1;
} else {
this.btnClose1.active = !1;
this.btnAgree1.active = !0;
this.btnNotAgree.active = !0;
}
},
btnCallBack: function() {
if ("233" == AD.chanel) cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showYinSi", "(Ljava/lang/String;)V", "申请权限"); else {
this.dialogYinSi.active = !0;
this.resetBtn();
}
},
checkPermission: function() {
switch (AD.chanelName1) {
case "huaWei":
AD_HuaWei.couldShowAD = !0;
break;

case "android":
cc.sys.os == cc.sys.OS_ANDROID && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "checkPermission", "(Ljava/lang/String;)V", "申请权限");
}
}
});
cc._RF.pop();
}, {} ],
yingDi_btns: [ function(e, t) {
"use strict";
cc._RF.push(t, "10964z8g35NmZRi+pI5gVQZ", "yingDi_btns");
cc.Class({
extends: cc.Component,
properties: {
index: 0,
spr_sleep: cc.SpriteFrame,
spr_wakeUp: cc.SpriteFrame
},
onLoad: function() {
var e = this;
this.node.opacity = 0;
this.scheduleOnce(function() {
e.node.scale = 0;
e.node.opacity = 255;
}, .1);
window.isSingle && 1 == this.index && (this.node.active = !1);
},
start: function() {
var e = this;
cc.director.on("结束休息状态", function() {
e.btnZhangPeng(!0);
}, this);
this.sprYuan = this.node.getComponent(cc.Sprite).spriteFrame;
this.type = null;
cc.director.on("显示打开按钮", function(t, i) {
if (e.index == t) {
e.node.scale = 1;
e.type = i;
switch (e.type) {
case "帐篷":
window.isSleeping[t] ? e.node.getComponent(cc.Sprite).spriteFrame = e.spr_wakeUp : e.node.getComponent(cc.Sprite).spriteFrame = e.spr_sleep;
break;

default:
e.node.getComponent(cc.Sprite).spriteFrame = e.sprYuan;
}
}
}, this);
cc.director.on("隐藏打开按钮", function(t) {
if (e.index == t) {
e.node.scale = 0;
e.type = null;
}
}, this);
},
btnCallBack: function() {
window.audioMng.playSfx("按钮");
switch (this.type) {
case "仓库":
cc.director.emit("打开储物箱", this.index);
break;

case "冶炼炉":
cc.director.emit("打开冶炼炉", this.index);
break;

case "工作台":
cc.director.emit("打开工作台", this.index);
break;

case "帐篷":
this.btnZhangPeng();
break;

case "淡水收集器":
cc.director.emit("打开淡水收集器", this.index);
break;

case "烽火台":
console.log(this.type);
break;

case "营地":
cc.director.emit("打开营地", this.index);
break;

case "宝箱":
console.log("宝箱");
cc.director.emit("打开宝箱", this.index);
}
},
btnZhangPeng: function(e) {
var t = this;
if (0 == window.isSingle) {
var i = 0;
0 == this.index && (i = 1);
if (window.isSleeping[i]) {
cc.director.emit("系统提示", "帐篷正在使用中", this.index);
return;
}
}
window.isSleeping[this.index] = !window.isSleeping[this.index];
if (e) {
window.isSleeping[0] = !1;
window.isSleeping[1] = !1;
}
cc.director.emit("睡觉", this.index, window.isSleeping[this.index]);
this.scheduleOnce(function() {
cc.director.emit("显示打开按钮", t.index, "帐篷");
}, .1);
}
});
cc._RF.pop();
}, {} ],
yingDi_buildMng: [ function(e, t) {
"use strict";
cc._RF.push(t, "be451CO+i1KxKf7not3DxLv", "yingDi_buildMng");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
yingDi_build: [ function(e, t) {
"use strict";
cc._RF.push(t, "ebcf0/3wtNAtrlpQTRjEdt1", "yingDi_build");
cc.Class({
extends: cc.Component,
properties: {
type: "仓库",
guang: cc.Node,
buildArr: [ cc.Node ],
effctBuild: {
default: null,
type: cc.Prefab,
visible: function() {
return "营地" == this.type;
}
}
},
start: function() {
var e = this;
this.guang.opacity = 0;
this.node.zIndex = -parseInt(this.node.y);
this.collisionNum = 0;
switch (this.type) {
case "帐篷":
cc.director.on("npc攻击", function(t) {
t == e.node && (window.isSleeping[0] || window.isSleeping[1]) && cc.director.emit("结束休息状态");
}, this);
break;

case "淡水收集器":
this.schedule(function() {
globalData.setBuildData("淡水时间", 1);
}, 1);
break;

case "冶炼炉":
this.schedule(function() {
globalData.setBuildData("冶炼时间", 1);
if (globalData.getBuildData("冶炼时间") >= globalData.yeLianDuration && globalData.getBuildData("冶炼中数量") > 0) {
globalData.setBuildData("冶炼中数量", -1);
globalData.setBuildData("冶炼完成数量", 1);
globalData.setBuildData("冶炼时间初重置");
}
}, 1);
break;

case "营地":
for (var t = 0; t < this.buildArr.length; t++) {
var i = globalData.getBuildData("建筑解锁状态", t);
if (0 == i) this.buildArr[t].active = !1; else if (1 == i) {
this.buildArr[t].active = !1;
this.createEffectBuild(t, 0);
} else 2 == i && (this.buildArr[t].active = !0);
}
globalData.setBuildData("烧火时间", -1);
this.schedule(function() {
globalData.setBuildData("烧火时间", -1);
globalData.getBuildData("点燃中") && globalData.getBuildData("烤箱生肉数") > 0 && globalData.setBuildData("烤箱烤制时间", 1);
}, 1);
cc.director.on("解锁建筑", function(t, i) {
e.createEffectBuild(t, i);
}, this);
}
},
createEffectBuild: function(e, t) {
var i = this;
cc.director.emit("开始建造");
window.audioMng.playSfx("建造");
var a = globalData.getBuildData("建筑建造时间", e), o = globalData.getBuildJson("建造时长", e);
2 == globalData.roleSkinIndexArr[t] && globalData.setBuildData("建造速度", e, 2);
var n = globalData.getBuildData("建造速度", e);
0 == a && this.schedule(function() {
globalData.setBuildData("建筑建造时间", e);
}, 1);
var s = cc.instantiate(this.effctBuild);
s.parent = this.node.parent;
s.zIndex = -1e3;
var c = this.buildArr[e].position;
s.position = c;
cc.tween(s).delay((o - a) / n).call(function() {
s.destroy();
globalData.setBuildData("建筑解锁状态", e, 2);
cc.director.emit("建筑建造完毕");
5 == e && cc.director.emit("烽火台建造完毕");
i.buildArr[e].active = !0;
}).start();
var l = (o - a) / n, r = a / o;
s.getComponent("buildBar").reset(r, l);
},
changeOutline: function() {
this.collisionNum > 0 ? cc.tween(this.guang).to(.2, {
opacity: 255
}).start() : cc.tween(this.guang).to(.2, {
opacity: 0
}).start();
},
onBeginContact: function(e, t, i) {
if (66 == t.tag && 666 == i.tag) {
var a = i.node.getComponent("player");
if (a) {
cc.director.emit("显示打开按钮", a.index, this.type);
this.collisionNum++;
this.changeOutline();
"营地" == this.type && cc.director.emit("对话", a.index, "点燃火堆可以削弱怪物");
}
}
},
onEndContact: function(e, t, i) {
if (66 == t.tag && 666 == i.tag) {
var a = i.node.getComponent("player");
if (a) {
cc.director.emit("隐藏打开按钮", a.index, this.type);
this.collisionNum--;
this.changeOutline();
}
}
}
});
cc._RF.pop();
}, {} ],
youXiJinDu: [ function(e, t) {
"use strict";
cc._RF.push(t, "95af8YnPptIxqBxNr/cJB/i", "youXiJinDu");
cc.Class({
extends: cc.Component,
properties: {
numLabel: cc.Label
},
start: function() {
this.bar = this.node.getComponent(cc.Sprite);
if ("骷髅岛" == globalData.modeType) {
this.modeIndex = 0;
0 == window.isSingle && (this.modeIndex = 1);
this.bar.fillRange = globalData.getLevelScore(this.modeIndex) / 100;
} else {
this.unlockState = globalData.getBuildData("建筑解锁状态", 5);
if (2 == this.unlockState) {
this.bar.fillRange = .9 + .1 * window.lastLevelProgress;
this.numLabel.string = parseInt(100 * this.bar.fillRange) + "%";
return;
}
var e = .05 * globalData.getLevelData();
e > .9 && (e = .9);
this.bar.fillRange = e;
}
this.numLabel.string = parseInt(100 * this.bar.fillRange) + "%";
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "btnAddToDesk", "jianKangZhongGao", "AD", "AD_android", "AD_oppo", "AD_vivo", "btnMiYinSi", "btnsControl", "chooseRole", "pageViewSelf", "roleCfg", "LabelUtils2", "Tools", "audioMng", "globalData", "globalDataT", "globalNode", "guoChang", "guoDu_normal", "onlineSwitch", "resMng", "shiPei", "dialog_over_level", "dialog_over_level_btnGoOn", "dialog_over_mng", "dialog_over_win", "dialog_pause", "dialog_revive", "dialog_win_anim", "firstScene", "UI_tools", "UI_cangKu", "UI_cangKuMng", "beiBao", "beiBaoMng", "dialogMng_build", "dialog_build_gongZuoTai", "dialog_build_gongZuoTai_item", "dialog_build_water", "dialog_build_yeLianLu", "dialog_build_yingDi", "dialog_build_yingDi_build", "dialog_build_yingDi_build_item", "dialog_build_yingDi_fire", "yingDi_build", "yingDi_buildMng", "duiHuaMng", "UI_mgs_roleIcon", "UI_msg_day_night", "UI_msg_jianTou", "UI_msg_level", "UI_msg_listener_food", "UI_msg_listener_hp", "UI_msg_listener_water", "UI_msg_mng", "UITips", "UI_huiShouZhan", "UI_tools_des", "baoXiang", "baoXiangDialog", "baoXiangMng", "buildBar", "fenLan_kuang", "jianTouZhiYin", "jianTouZhiYinMng", "pauseBtn", "playerSanWei", "tips_buildCreateMore", "tips_couldGet", "youXiJinDu", "yingDi_btns", "camera", "effectMng", "effect_jianXue", "effect_tips_byte", "effect_tips_ziYuanAddOne", "effect_zhongJiZhiZhan", "gameScene", "gameScene_js", "lunPan", "littleMap", "mapItem", "mapMng", "map_ground_build", "npc", "npcCreator", "npcMng", "player", "unit_drop_wuZi", "unit_drop_wuZiMng", "unit_drop_wuZi_diuQi", "unit_drop_wuZi_shuiPing", "unit_pangXie_move", "unit_piaoLiu_wuZi", "unit_wuZi", "piaoLiu_control", "nightMng", "nigthJiQiRen", "shadowBuild", "juQingScene", "loadScene", "menuScene", "taoShengJiLu", "btnChooseModeAct", "newTips", "dialogYinSi", "yinSiPanel" ]);
