# Surge-Rule-Snippets
本项目目的在于搜集、整理使用的`Surge`/`ShadowRocket`/`Potatso`/`Cross`规则片段。使得用户可以根据自己的需求最小化定制自己的规则，提高Surge的运行效率。

[项目更新日志](https://github.com/Hackl0us/Surge-Rule-Snippets/blob/master/Changelog.md)

## 注意事项

1. 所有规则均以片段形式存在，各位需要参考 **[Surge](https://manual.nssurge.com/overview/configuration.html) / ShadowRocket / [Potatso](https://manual.potatso.com/index.html) 规则配置说明** 定制自己的规则
2. 规则不意味着越多越好，而是越精越好。规则越多，效率越低，RAM占用越高，最后会导致工具退出运行，尤其是越狱设备。

## 关于 懒人规则 和 兼容性

1. 懒人规则目前支持三款工具，但是只有`ShadowRocket`可以直接导入用。`Surge` 和 `Potatso` **需要配置服务器**。详情请参考上文的配置手册。
2. 就功能性而言，`Surge`功能最多最强大，`ShadowRocket`其次，`Potatso`功能最少。`ShadowRocket`/`Potatso`不支持 `Surge` 的`PROCESS-NAME`/`URL-REGEX`等参数。所以各位修改配置文件时，请确认参数的兼容性。

## 如何使用懒人规则

规则在 Github 网页上，需要以 `Raw`的形式显示才是纯文本格式，可以被代理工具识别，不可以直接复制项目的地址。操作步骤十分简单，请参考以下步骤：

1. 在 Github 上找到您需要的**懒人文件**，并点击访问。
2. 在显示的界面中，点击右上角的`Raw`按钮。![](http://ok9svak43.bkt.clouddn.com/blog/image/github/github_raw_1.jpg)
3. 复制浏览器地址栏的地址到`代理工具`或`下载工具`即可。![](http://ok9svak43.bkt.clouddn.com/blog/image/github/github_raw_2.jpg)

## 代理类型

规则片段中会存在 3 中代理策论：

- Proxy：代理，一般为海外备案、服务器在海外或被 GFW 阻挡的网站。若不使用代理，可能无法工作，或访问速度极其缓慢。
- DIRECT：直连，一般为国内备案或服务器在中国的网站，可以获得更快的访问速度。
- REJECT：拒绝连接。一般为可能个人泄露隐私的数据追踪或非友好广告的域名。

## 屏蔽广告与追踪

本项目永远不会出现网页广告拦截的规则，原因如下：

1. 广告拦截规则变化非常大，而且需要经常维护，非常容易失效。
2. 浏览器很多插件，甚至路由器都可以很好的屏蔽日常遇到的主流广告、追踪等，无需重复屏蔽。
3. 过多的规则会降级 Surge 运行效率，尤其在越狱系统上更容易意外退出。
4. 过于广泛的正则匹配容易误杀正常图片、网页元素等，影响体验。

所以更推荐各位使用广告屏蔽插件，效果要比单纯在Surge配置好得多。

- Safari for macOS:`uBlock`、`Adguard`、`Ghostery`
- Safari for iOS:`Adguard`、`广告猎手`
- Chrome for macOS:`uBlock Origin`、`广告终结者`、`Adguard`、`Ghostery`

## 关于项目发展

本项目需要定期维护和更新，才能保证时效和可靠性。

项目后期将会更加细化规则和分类，方便用户选择和定制。所以有想法帮助维护项目的朋友可以Issue的形式提交需求，或共享代码片段，帮助我一起维护这个项目，非常感谢。欢迎各位补充规则~

如果您有更好的想法、建议或意见，请写邮件告诉我：ask@hackl0us.com，我会尽快回复。

## 关注项目

- [Telegram 频道](https://t.me/joinchat/AAAAAEBbyO8dblJS4QQ1hw)：任何用户均可收听该频道，关注更新动态。
- [Telegram 维护组](https://t.me/joinchat/AAAAAAwDfpKBFiFuVpz8aw)：仅希望 **有时间和能力** 协助我维护规则的朋友请加入。

## 感谢
- [@Hyyy___Ink](http://weibo.com/u/3041958065) 协助我测试`LastPass`规则
- [GFWList](https://github.com/gfwlist/gfwlist) 项目
- [Scomper](http://weibo.com/scomper)的[Surge规则](https://gist.githubusercontent.com/scomper/915b04a974f9e11952babfd0bbb241a8/raw/surge.conf)
- [lhie1](http://weibo.com/809005537)的[Surge规则](https://github.com/lhie1/Surge) 中 **屏蔽视频广告** 部分规则
- [@未名\_\_\_\_\_](http://weibo.com/u/2305957833) 提供纠正 `Testflight` 相关规则及 `Cross` 配置模板
- [@Momo_Kong](http://weibo.com/momokon9) 提供 `Potatso 2`的规则

---
