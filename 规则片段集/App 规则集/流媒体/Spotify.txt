# Spotify 流媒体音乐服务并没有被墙，
# 但是**免费用户**需要每 14 天就在账户所在国/地区登陆账户，否则无法收听音乐。

# 请根据实际情况和需求正确选择策略：
# 使用 DIRECT 策略可以有效节约代理流量，如果你是 Premium 用户，可以使用此策略。但是如果你的地区对 Spotify 限速严重或根本无法使用，请使用 Proxy。
# 现默认使用 Proxy 策略（Spotify 设置的地区需要与出口 IP 国家匹配）可以保证你的免费账户一直可用。

[Rule]
PROCESS-NAME,Spotify,Proxy
USER-AGENT,*Spotify*,Proxy

DOMAIN-SUFFIX,scdn.co,Proxy
DOMAIN-SUFFIX,spotify.com,Proxy
