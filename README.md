<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img align="right" alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<h1 align="center">
<sub>
<img  src="https://i.loli.net/2020/11/27/SNhJxraRF3oeq2W.png"
      height=8%
      width=8%>
</sub>
SS Rule Snippet
</h1>
<p align="center">
<sup>
     Design for<i> Surge / Quantumult (X) / Shadowrocket / clash (Premium) </i>.
     <br> Maintained by <b>Hackl0us</b>.
</sup>
<br>
</p>



## 导航

本项是由 [@Hackl0us](https://weibo.com/hackl0us) 书写、搜集、整理，适用于 [<i>Surge</i>](https://nssurge.com) / [<i>Quantumult</i>](https://itunes.apple.com/hk/app/quantumult/id1252015438) / [<i>Shadowrocket</i>](https://itunes.apple.com/us/app/shadowrocket/id932747118) / [<i>Surfboard</i>](https://manual.getsurfboard.com/) / [<i>clashX</i>](https://github.com/yichengchen/clashX) 的规则或实用规则片段。追求为工具配置最精简、最实用、最高效的规则，给用户带来最流畅的使用体验。

* [规则使用](#规则使用)
  * [常用代理工具](#常用代理工具)
  * [停止支持工具列表](#停止支持工具列表)
  * [clash 衍生工具的选择](#clash%20衍生工具的选择)
  * [规则集说明](#规则集说明)
  * [懒人规则导入](https://github.com/Hackl0us/SS-Rule-Snippet/wiki/)
  * [一键更新规则](#一键更新规则)

* [关于项目](#关于项目)
  * [开源协议](https://creativecommons.org/licenses/by-nc-sa/4.0/) 
  * [关于广告屏蔽](#关于广告屏蔽)
  * [更新日志](https://github.com/Hackl0us/SS-Rule-Snippet/blob/master/Changelog.md)
  * [项目 Wiki](https://github.com/Hackl0us/SS-Rule-Snippet/wiki/)

* [支持项目](支持项目)

  * [参与维护](#参与维护)
  * [关注项目](#关注项目)
  * [捐赠](#捐赠)



## 规则使用

**懒人规则**具体使用方法请参考 [项目 Wiki](https://github.com/Hackl0us/SS-Rule-Snippet/wiki/)。
除懒人规则外，实用规则均以片段形式存在。您可以根据工具官方（或非官方）提供的配置参考手册，严格按照语法要求对规则正确地修改。
规则的强大不在于条目多，而在于少而精。规则堆积越多，RAM 占用越高，工具运行效率越低。过多的规则甚至会导致工具直接崩溃（越狱设备尤为明显），严重影响用户体验。

### 常用代理工具

| 工具 | 适用平台 | 懒人规则 | 配置参考手册 | 售价 |
| :-: | :-- | :-: | :-- | :-: |
| [Surge](https://nssurge.com) | 📱 iOS / ⬛️ iPadOS / 💻 macOS | `Surge 3.conf` |  [官方](https://manual.nssurge.com/) | $49.99 - $99.99 | 
| [Quantumult X](https://apps.apple.com/us/app/quantumult-x/id1443988620) | 📱 iOS / ⬛️ iPadOS | `QuantumultX.conf` | [官方（配置文件）](https://github.com/crossutility/Quantumult-X) | $7.99 |
| [Shadowrocket](https://apps.apple.com/us/app/shadowrocket/id932747118) | 📱 iOS / ⬛️ iPadOS | `Shadowrocket.conf` | 未提供 | $2.99 |
| [clash](https://github.com/Dreamacro/clash) | 🧬 Multiple |  `clash.yaml` | [官方](https://lancellc.gitbook.io/clash/) | 免费，🎖 开源 |
| [clash Premium](https://github.com/Dreamacro/clash/releases/tag/premium) | 🧬 Multiple | `clash_Premium.yaml` | [官方 (Premium 功能)](https://github.com/Dreamacro/clash/wiki/Premium-Core-Features) | 免费，⭕️ 闭源 |
| [Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg) | 🪟 Windows | 参考 clash Premium | [官方](https://github.com/Fndroid/clash_for_windows_pkg/wiki) |  免费，⭕️ 闭源 |
| [Clash X](https://github.com/yichengchen/clashX/) | 💻 macOS | 参考 clash | 参考 clash | 免费，🎖 开源  |
| [Clash X Pro](https://install.appcenter.ms/users/clashx/apps/clashx-pro/distribution_groups/public) | 💻 macOS (Intel) |参考 clash Premium |  参考 clash Premium | 免费，⭕️ 闭源|
| [Clash X Pro - Apple Silicon](https://install.appcenter.ms/users/clashx/apps/cxp-applesilicon/distribution_groups/public) | 💻 macOS (Apple M1) | 参考 clash Premium | 参考 clash Premium | 免费，⭕️ 闭源 |
| [Clash for Android](https://github.com/Kr328/ClashForAndroid) | 🤖️ Android | 参考 clash Premium | 参考 clash Premium | 免费，⭕️ 闭源 |
| [OpenClash](https://github.com/vernesong/OpenClash) | 📶 OpenWRT |参考 clash Premium |  参考 clash Premium | 免费，⭕️ 闭源 |

### 停止支持工具列表
以下工具开发者已经长时间未更新或停止更新，对新协议、新功能的支持和新系统的兼容性都不是很好，因此项目考虑停止更新支持。停止更新支持的配置文件可以在 `归档` 文件夹下找到。

- Surge Legacy
- Surfboard
- Quantumult（计划停止更新）

### clash 衍生工具的选择

除 iOS 平台外，很多平台的工具衍生与开源的 clash 项目。clash 项目作者在后期拓展开发更多实用功能，如 TUN、代理集、规则集、脚本等，逐渐发展成为 clash Premium，但是 clash Premium 提供的额外功能并不开源，是闭源项目。

其他开发者基于这两个版本的 clash 开发并实现了可以运行在不同平台的图形化代理工具。基于 clash 开发的工具，因为开源协议限制等因素，同为开源项目，仅实现 clash 具备的基础代理功能，如 Clash X.

而基于 clash Premium 开发的工具，则多为闭源项目，但是会具备更多更加实用的功能，例如 Clash X Pro 和 Clash for Windows 有具备类似 Surge 的增强模式，可以通过 TUN / TAP 接管所有流量；可以订阅代理集、规则集等，避免日后反复更新替换配置冗长的文件，一劳永逸等等

你可以根据自身的需求选择适合自己的 clash 衍生工具。

## 关于项目

### 规则集说明
- **基础** 规则集：最基本的规则，这些规则构成了懒人规则。刚好满足科学上网的基本需求，轻便简洁。
- **App** 规则集：包含了对一些 工具、流媒体、社交分享 等类别的 App 的特殊优化规则，如果您有使用这些 App，请自行拼合整理到您使用的规则中。
- **自选** 规则集：包含了一些针对部分用户群体（如 大学生、经常观看视频用户、成人等）而定制的规则，如果您有需求，请自行拼合整理到您使用的规则中。
- **功能性** 规则集：用来实现一些高级的功能，例如修复 Siri 高延迟或不可用、实现 Surge Legacy 版本的全局代理等等功能示。建议用户根据引导，正确拼合使用规则。

### 一键更新规则

对于不方便全局替换配置文件或不支持 规则集 的工具，您可以通过 [`捷径`](https://apps.apple.com/hk/app/workflow/id915249334) 将自定义规则整合至懒人规则，实现便捷更新。

| 工具 | 下载地址 |
| :-: | :-: |
| Surge | [捷径](https://www.icloud.com/shortcuts/5bb0a407e80a478faabe33dc624f3975) |
| Quantumult | [捷径](https://www.icloud.com/shortcuts/884f18991ad14e69b0c13a1a4e7b3aac)|
| Shadowrocket | [捷径](https://www.icloud.com/shortcuts/29b06dddc6684afd9cf8a17b7c0af901) |


### 关于广告屏蔽

本项目不会出现网页广告拦截的规则，原因如下：

1. 广告拦截规则变化非常大，非常容易失效，所以需要经常维护。
2. 浏览器很多插件，甚至一些路由器的固件都提供屏蔽日常浏览网页遇到的广告、追踪脚本等。
3. 过多的规则会降低工具运行效率，尤其在越狱系统上非常容易意外退出，影响使用体验。
4. 仅通过域名或 HTTPS 解密等方式，直接匹配非常容易错误屏蔽正常图片、网页元素等，而且解密 HTTPS 需要开销很大的系统内存，影响网页加载速度，得不偿失。
5. 代理工具支持的匹配方式十分有限，没有类似 [Adblock Plus](https://adblockplus.org/zh_CN/filters) 等工具支持全面的、多元的正则匹配方式，所以即使使用工具屏蔽广告，也会效果欠佳。

综上所述，推荐各位使用广告屏蔽插件，效果要比在工具上配置屏蔽广告好得多：

- Windows / macOS 端全局过滤：
  - [AdGuard](https://adguard.com/zh_cn/welcome.html)

- iOS / iPadOS 端 Safari：
  - [Adguard](https://itunes.apple.com/hk/app/adguard-adblock-privacy/id1047223162)

   ⚠️ 不推荐购买 AdGuard Pro，因为 iOS / iPadOS 仅支持同时开启 1 个 VPN，AdGuard Pro 同样会在系统开启 VPN 接管所有流量来过滤广告，会和现有代理工具冲突，而且不支持设置 upstream-proxy.

- 浏览器 Safari / Chrome / Firefox / Edge (Chromium) 等：
  - Adguard
  - Adblock
  - Adblock Plus
  - [uBlock Origin for Chromium / Firefox ](https://github.com/gorhill/uBlock)

- 软/硬路由端：
  - Adbyby
  - PiHole
  - AdGuard Home
  - 广告屏蔽大师+

## 支持项目

### 参与维护

本项目需要定期维护和更新，才能保证规则的稳定和实用。
请直接通过 `Github` 的 **Pull Request** 或 **提交 Issue** 的方式对项目进行补充完善。如果规则合适，我会进行全局适配。

⚠️**维护注意事项：**

1. 很多域名**不是通过直接访问**来判定的是否有效的，例如`126.net`，无法直接通过浏览器来访问，但是在使用 **网易云音乐** 的过程中，通过抓包可以发现，这个域名其实用来缓冲音乐。大家在维护的过程中，要善用**抓包工具、搜索引擎**等方式综合判定域名是否有效。
2. 一个 App 可能访问多个域名，添加的域名要尽量做到完整、全面。如果一个 App 连接域名超过 3 个，而且不与 macOS 或其他 App 共用(如：美团、大众点评、猫眼电影等 App 共用 meituan 相关域名，这时使用域名匹配策略明显具有优势)，便推荐对其使用 `USER-AGENT` 策略以节省规则条目，例如`滴滴出行`App。
3. 方便组内交流讨论，请通过链接加入下方的 `Telegram 群组 `。


### 关注项目

- [ 果核Apple Nuts](https://t.me/AppleNuts) (Telegram 频道)：该频道用来推送项目的更新日志和  Apple 相关新闻。
- [🍤 库克的后厨 | Cook's Kitchen 🧀](https://t.me/OnlineAppleUserGroup) (Telegram 群组)：这是一个由 Apple 员工、极客、开发者、技术书籍或文章主编、高级用户等群体，组成的自由、开放、平等的社群。
- [@Hackl0us](https://weibo.com/hackl0us) (新浪微博)：个人微博，可了解到很多关于 Apple、网络技术等科技方面的讯息及项目最新动态。

### 捐赠

❤️ 维护这个规则花费了很多心思和时间，你使用的每一行规则、阅读的每一个配置文件翻译都是我反复斟酌后的结果，为的就是可以让大家有一套好用、易懂的规则。

如果您喜欢我的规则，并希望项目可以继续被维护，您可以给通过以下方式捐助。

大家的支持是我的动力～我还会用捐助的钱给我家的两只 🐱 丑橘 🍊 和 ⚡️ 伏特 🐈‍⬛ 买鱼罐头

<img  src="https://i.loli.net/2020/11/26/7MgDErcJWIsiq34.png"
      height=80%
      width=80%>

<img  src="https://i.loli.net/2020/11/27/hSojTe1NcgJQlt9.png"
      height=80%
      width=80%>

