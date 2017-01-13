# Surge-Rule-Snippets
本项目目的在于搜集、整理使用的Surge规则片段。使得用户可以根据自己的需求最小化定制自己的规则，提高Surge的运行效率。

## 注意事项

1. 本规则同样适用于ShadowRocket，使用前建议把规则中的`NO_PROXY`更改为`DIRECT`
2. 所有规则均以片段形式存在，各位需要参考**Surge / ShadowRocket规则配置说明**定制自己的规则
3. 规则不意味着越多越好，而是越精越好。越多规则意味着越低的效率和越高的RAM占用，过多的规则堆积会导致工具退出运行，尤其是越狱设备

## 代理类型

规则片段中会存在3中代理类型：

- NO_PROXY：推荐直连或选择港澳台代理，保证速度和稳定性
- PROXY：推荐使用代理，否则可能无法工作
- DIRECT：最好直连，否则可能无法工作

## 屏蔽广告与追踪

规则片段中只存在屏蔽视频广告的部分，暂时没有添加屏蔽网页广告的规则。因为广告网站非常多，而且日新月异难以频繁维护。

所以更推荐各位使用广告屏蔽插件，效果要比单纯在Surge配置好得多。

Safari for macOS:`uBlock`、`Adguard`、`Ghostery`

Safari for iOS:`Adguard`、`广告猎手`

Chrome for macOS:`uBlock Origin`、`广告终结者`、`Adguard`、`Ghostery`

## 关于项目发展

本项目需要定期维护和更新，才能保证时效和可靠性。目前只是第一版本，后期将会更加细化规则和分类，方便用户选择和定制。所以有想法帮助维护项目的朋友可以issue的形式提交需求，或共享代码片段，帮助我一起维护这个项目，非常感谢。

如果您有更好的想法、建议或意见，请写邮件告诉我：talk@hackl0us.com，我会尽快回复。

## 感谢

本项目主要参考了：

- [GFWList](https://github.com/gfwlist/gfwlist)
- [Scomper](http://weibo.com/scomper)的[Surge规则](https://gist.githubusercontent.com/scomper/915b04a974f9e11952babfd0bbb241a8/raw/surge.conf)
- [lhie1](http://weibo.com/809005537)的少部分[Surge规则](https://github.com/lhie1/Surge)

后期将会根据用户需求更新完善更多的Surge规则，感谢各位支持。



---

更新日志：

v1.1 （2017/01/13 16:05）

- 更新GFWList黑名单列表
- 增加KakaoTalk规则
- 修正LINE的部分规则(后期可能仍会变动)
- 增加广告、追踪、数据分析屏蔽规则(试用)

v1.0 （2017/01/01 15:15）