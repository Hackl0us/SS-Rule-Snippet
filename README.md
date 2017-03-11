# Surge-Rule-Snippets
本项目目的在于搜集、整理使用的Surge/ShadowRocket规则片段。使得用户可以根据自己的需求最小化定制自己的规则，提高Surge的运行效率。

## 注意事项

1. 本规则兼容`ShadowRocket`。
2. 所有规则均以片段形式存在，各位需要参考 **[Surge](https://manual.nssurge.com/overview/configuration.html) / ShadowRocket规则配置说明** 定制自己的规则
3. 规则不意味着越多越好，而是越精越好。规则越多，效率越低，RAM占用越高，最后会导致工具退出运行，尤其是越狱设备。

## 代理类型

规则片段中会存在3中代理类型：

- PROXY：推荐使用代理，否则可能无法工作，或访问速度缓慢
- DIRECT：最好直连，否则可能无法工作

## 屏蔽广告与追踪

本项目永远不会出现网页广告拦截的规则，原因如下：

1. 广告拦截规则变化非常大，而且需要经常维护，非常容易失效。
2. 浏览器很多插件，甚至路由器都可以很好的屏蔽日常遇到的主流广告、追踪等，无需重复屏蔽。
3. 过多的规则会降级 Surge 运行效率，尤其在越狱系统上更容易意外退出。
4. 过于广泛的正则匹配容易误杀正常图片、网页元素等，影响体验。

所以更推荐各位使用广告屏蔽插件，效果要比单纯在Surge配置好得多。

Safari for macOS:`uBlock`、`Adguard`、`Ghostery`
Safari for iOS:`Adguard`、`广告猎手`
Chrome for macOS:`uBlock Origin`、`广告终结者`、`Adguard`、`Ghostery`

## 关于项目发展

本项目需要定期维护和更新，才能保证时效和可靠性。

项目后期将会更加细化规则和分类，方便用户选择和定制。所以有想法帮助维护项目的朋友可以Issue的形式提交需求，或共享代码片段，帮助我一起维护这个项目，非常感谢。欢迎各位补充规则~

如果您有更好的想法、建议或意见，请写邮件告诉我：talk@hackl0us.com，我会尽快回复。

## 关注项目

- [Telegram 频道](https://t.me/joinchat/AAAAAEBbyO8dblJS4QQ1hw)：任何用户均可收听该频道，关注更新动态。
- [Telegram 维护组](https://t.me/joinchat/AAAAAAwDfpKBFiFuVpz8aw)：仅希望 **有时间和能力** 协助我维护规则的朋友请加入。

## 感谢

本项目主要参考了：

- [GFWList](https://github.com/gfwlist/gfwlist)
- [Scomper](http://weibo.com/scomper)的[Surge规则](https://gist.githubusercontent.com/scomper/915b04a974f9e11952babfd0bbb241a8/raw/surge.conf)
- [lhie1](http://weibo.com/809005537)的少部分[Surge规则](https://github.com/lhie1/Surge)

后期将会根据用户需求更新完善更多的Surge规则，感谢各位支持。

---

更新日志：
v2.0 （2017/03/11 22:55）

✅ **增加**：
- 增加`国内直连`规则，专为国内用高速访问优化
- 增加`科学上网（对抗GFW）`规则，针对性解决 GFW 封锁的网站问题
- 增加`外网访问优化`规则，解决国内访问虽然未被墙，但访问外网速度缓慢的问题
- 更新 `GFW黑名单`到 4740 条规则，增加 185 条，移除 62 条

⭐️ **优化**：
- 大幅优化 `屏蔽视频广告` 规则。主流视频网站的广告可以很好的屏蔽
- 优化 `Apple服务优化`规则。代理、直连分类明确，获得更快更稳定的访问体验
- `特殊App优化`的全部规则。更加细化iOS规则，增加针对macOS的规则

⛔️ **移除**：
- `NO_PROXY`策略类型。现在只有 2 种代理类型。更方便配置，以及更好的兼容性
- `GFW白名单`规则。将该规则细化至其他规则
- `广告、追踪、数据搜集`规则，原因详见上文

📒 **未来计划**：
- （待定）增加 LastPass 规则，优化同步速度
- 增加 `Potatso` 规则
- 更新 `Surge` / `ShadowRocket` 规则（待规则稳定后）

v1.2 （2017/01/14 13:53）

- 增加ShadowRocket自用规则，
- 增加Surge自用规则
- 修正LINE的规则，添加日区所有服务器地址段，提高可靠性（由于iOS版LINE对中国大陆区不友好，疑似中国大陆号段被封锁，所以此规则以后可能不再更新）

v1.1 （2017/01/13 16:05）

- 更新GFWList黑名单列表
- 增加KakaoTalk规则
- 修正LINE的部分规则(后期可能仍会变动)
- 增加广告、追踪、数据分析屏蔽规则(试用)

v1.0 （2017/01/01 15:15）
