
<h1 align="center">
<sub>
<img  src="http://ok9svak43.bkt.clouddn.com/FqRtBnCL-IohdKpAcgP5ghgCUU-r.png"
      height="38"
      width="38">
</sub>
SS Rule Snippet
</h1>
<p align="center">
<sup>
     Made for<i> Surge / Quantumult / ShadowRocket / Potatso </i>.
     <br> Maintained by <b>Hackl0us</b>.
</sup>
<br>
</p>


## 导航

本项是由 [@Hackl0us](https://weibo.com/hackl0us) 书写、搜集、整理，适用于 [<i>Surge</i>](https://itunes.apple.com/hk/app/surge-3-web-developer-tool/id1329879957) / [<i>Quantumult</i>](https://itunes.apple.com/hk/app/quantumult/id1252015438) / [<i>ShadowRocket</i>](https://itunes.apple.com/us/app/shadowrocket/id932747118) / [<i>Potatso</i>](https://itunes.apple.com/hk/app/potatso-2/id1162704202) 的规则或实用规则片段。追求为工具配置最精简、最实用、最高效的规则，给用户带来最流畅的使用体验。

* [规则使用](#规则使用)

  * [懒人规则导入](https://github.com/Hackl0us/SS-Rule-Snippet/wiki/)
  * [规则片段](#规则使用)

* [关于项目](#关于项目)

  * [关于广告屏蔽](#关于广告屏蔽)
  * [项目 Wiki](https://github.com/Hackl0us/SS-Rule-Snippet/wiki/)

* [支持项目](支持项目)

  * [参与维护](#参与维护)
  * [关注项目](#关注项目)
  * [捐赠](捐赠)



## 规则使用

**懒人规则**具体使用方法请参考 [项目 Wiki](https://github.com/Hackl0us/SS-Rule-Snippet/wiki/)。

1. 除懒人规则外，所有规则均以片段形式存在，各位需要参考 [Surge](https://manual.nssurge.com/overview/configuration.html) / [ShadowRocket](https://itunes.apple.com/us/app/shadowrocket/id932747118?mt=8) / [Potatso 2](https://manual.potatso.com/index.html) / [Quantumult](https://itunes.apple.com/cn/app/quantumult/id1252015438?mt=8) 规则语法，正确、合理定制自己的规则。
2. 规则绝对不是越多越好，而是越精越好。规则堆积越多，RAM 占用越高，工具运行效率越低。过多的规则会导致工具后台退出运行，尤其是越狱设备，严重影响体验。




## 关于项目

### 关于广告屏蔽

本项目不会出现网页广告拦截的规则，原因如下：

1. 广告拦截规则变化非常大，非常容易失效，所以需要经常维护。
2. 浏览器很多插件，甚至一些路由器的固件都提供屏蔽日常浏览网页遇到的广告、追踪脚本等。
3. 过多的规则会降低工具运行效率，尤其在越狱系统上非常容易意外退出，影响使用体验。
4. 仅通过域名或 HTTPS 解密等方式，直接匹配非常容易错误屏蔽正常图片、网页元素等，而且解密 HTTPS 需要开销很大的系统内存，影响网页加载速度，得不偿失。
5. 代理工具支持的匹配方式十分有限，没有类似 [Adblock Plus](https://adblockplus.org/zh_CN/filters) 等工具支持全面的、多元的正则匹配方式，所以即使使用工具屏蔽广告，也会效果欠佳。

综上所述，推荐各位使用广告屏蔽插件，效果要比在工具上配置屏蔽广告好得多：

- iOS 端 Safari：
  - [Adguard](https://itunes.apple.com/hk/app/adguard-adblock-privacy/id1047223162)


- macOS 端  Safari / Chrome / Firefox 等：
  - Adguard
  - Adblock
  - Adblock Plus
  - [uBlock Origin for Safari](https://github.com/el1t/uBlock-Safari#ublock-originfor-safari)
  - [uBlock Origin for Chromium / Firefox ](https://github.com/gorhill/uBlock)




## 支持项目

### 参与维护

本项目需要定期维护和更新，才能保证规则的稳定和实用。

为了让规则更加亲和大众，更简单地参与到维护过程中来，我已经把规则开放到了 `Google 表格` 中： [SS Rule Snippet](https://docs.google.com/spreadsheets/d/1yZCkmfVBYKHOBmlwPIBHGiFYLs1cwAv5ebirwZfr_20/edit?usp=sharing) 进行维护。为了保证规则有序，不被恶意篡改。您需要**登录 Google 账户**，来申请维护权限；否则，您只可以具有 查看、评论 的权限。

⚠️**维护注意事项：**

1. 很多域名**不是通过直接访问**来判定的是否有效的，例如`126.net`，无法直接通过浏览器来访问，但是在使用 **网易云音乐** 的过程中，通过抓包可以发现，这个域名其实用来缓冲音乐，是有效的。大家在维护的过程中，要善用**抓包工具、搜索引擎**等方式综合判定域名的状态。
2. 一个 App 可能访问多个域名，添加的域名要尽量做到完整、全面。如果一个 App 连接域名超过 3 个，而且不与 macOS 或其他 App 共用(如：美团、大众点评、猫眼电影等 App 共用 meituan 相关域名，这时使用域名匹配策略明显具有优势)，便推荐对其使用 `USER-AGENT` 策略以节省规则条目，例如`滴滴出行`App。
3. 为保持规则不混乱，便于我的维护和整理，在您获得维护全新后，仅可对目前**已有域名、规则进行信息补充、评论、修正**，或**对原来没有的规则进行补充**。我将会进行最后的整合和汇总。
4. 当您发现列表中，有您认为很常用，但是列表中却不存在对应的规则时，请将对应规则放置在右侧“**希望添加规则区域**”内。
5. 方便组内交流讨论，请通过链接加入下方的 `Telegram 群组 `。




### 关注项目

- [Telegram 频道](https://t.me/joinchat/AAAAAEBbyO8dblJS4QQ1hw)：关注后，可及时推送项目的更新日志。
- Telegram 群组 - [库克后厨 H Team](https://t.me/joinchat/EAPjDBMDRpVpCtB8ur85sQ)：自由交流、讨论任何有关 Apple 的技术。


- 新浪微博 [@Hackl0us](https://weibo.com/hackl0us)：个人微博，可了解到很多关于 Apple、网络技术等科技方面的讯息。




### 捐赠

##### ❤️如果您喜欢我的规则，并希望项目可以继续被维护，您可以给通过以下方式捐助我😜非常感谢~

  ![](http://ok9svak43.bkt.clouddn.com/blog/image/github/donation.png)

