# 双人海岛求生2 Web 版

该目录是基于 `artifacts/unlocked-local` 的 Cocos Creator 2.4.4 浏览器版本。

## 运行

必须通过 HTTP 服务打开，不能直接双击 `index.html`。

```powershell
cd web-special
node server.js
```

然后访问：

```text
http://127.0.0.1:4173
```

点击页面中的“进入游戏”，再点击游戏首页的“开始游戏”。

## 电脑操作

- 单人模式：方向键移动。
- 双人模式左侧玩家：`W`、`A`、`S`、`D` 移动。
- 双人模式右侧玩家：方向键移动。
- 鼠标和触摸摇杆仍然保留。
- 检测到电脑端时，游戏内触摸摇杆会自动隐藏。
- 浏览器窗口失去焦点时会自动停止键盘移动，避免角色持续行走。

## 目录

```text
web-special/
├── index.html              浏览器页面
├── styles.css              全屏游戏容器和启动界面
├── main.js                 Cocos Web 启动逻辑
├── server.js               无依赖本地 HTTP 服务
├── cocos2d-js.js           Cocos 2.4.4 Web 引擎开发版
├── cocos2d-js-min.js       Cocos 2.4.4 Web 引擎发布版
├── src/settings.js         从 APK 提取的 Cocos 设置
├── assets/                 从 APK 提取的 Bundle 和资源
├── icons/app-icon.png      游戏图标
└── screenshots/            浏览器验证截图
```

## 与 APK 版的区别

- 使用 Cocos Creator 2.4.4 官方 Web runtime。
- 不再加载 JSB 原生适配层。
- 启动前需要点击一次页面按钮，以满足浏览器音频播放策略。
- 旧广告配置服务已经断开，不会请求 `label.tianyitop.com`。
- 继承 `unlocked-local` 的本地解锁逻辑：激励入口直接执行原有本地奖励回调。
- 工作台广告制造直接执行本地制造逻辑。
- 骷髅岛在进入主菜单时直接解锁。
- 不接受广告失败或未完成回调，也不会重新打开广告页面。
- 使用浏览器 `localStorage` 保存游戏进度，与 Android 存档相互独立。

## 浏览器验证

已在 Microsoft Edge 无头模式中验证：

1. 启动页正常加载。
2. Cocos 启动场景加载成功。
3. “开始游戏”进入岛屿选择。
4. 单人游戏进入角色选择。
5. 选择角色后进入剧情场景。
6. 跳过剧情后进入实际游戏场景。
7. 游戏持续渲染超过 4,000 帧。
8. 没有任何 JavaScript 错误、页面异常或失败网络请求。
9. 实际游戏场景可以进入，岛屿、角色和本地解锁逻辑来自 `unlocked-local`。
10. 单人方向键移动通过坐标变化验证。
11. 双人 WASD 和方向键分别控制 P1、P2，通过两个角色独立的坐标变化验证。
12. 单人方向键向下、双人 S 和向下方向键均验证可向下移动。
13. 单人和双人游戏场景中的触摸摇杆均已在电脑端关闭。

## 部署

把整个 `web-special/` 目录部署到静态 HTTP 服务即可。

发布环境可以使用 `cocos2d-js-min.js`；`cocos2d-js.js` 仅用于开发调试。使用 Nginx、Apache、IIS 或对象存储静态网站时，需要确保 `.json`、`.js`、图片和音频的 MIME 类型正确。

