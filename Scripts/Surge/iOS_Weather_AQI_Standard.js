// Developed by Hackl0us (https://github.com/hackl0us)

// STEP 1: 前往 https://aqicn.org/data-platform/token/ 注册账户，将申请的 API Token 填入下方
const aqicnToken = ''

// STEP 2: 参考下方配置片段，在代理工具的配置文件中添加对应的配置。注意：script-path 后应该替换为添加 apicnToken 值后的脚本路径
/*
	[Script]
	AQI-US = type=http-response, pattern=https://weather-data.apple.com/v1/weather/[\w-]+/[0-9]+\.[0-9]+/[0-9]+\.[0-9]+\?include=, requires-body=true, script-path=/path/to/iOS_Weather_AQI_Standard.js

	[MITM]
	hostname = weather-data.apple.com
*/

const AirQualityStandard = {
	CN: 'HJ6332012.1',
	US: 'EPA_NowCast.1'
}

const AirQualityLevel = {
	GOOD: 1,
	MODERATE: 2,
	UNHEALTHY_FOR_SENSITIVE: 3,
	UNHEALTHY: 4,
	VERY_UNHEALTHY: 5,
	HAZARDOUS: 6
}

const coordRegex = /https:\/\/weather-data\.apple\.com\/v1\/weather\/[\w-]+\/([0-9]+\.[0-9]+)\/([0-9]+\.[0-9]+)\?include=/
const [_, lat, lng] = $request.url.match(coordRegex)

function classifyAirQualityLevel(aqiIndex) {
	if (aqiIndex >= 0 && aqiIndex <= 50) {
		return AirQualityLevel.GOOD;
	} else if (aqiIndex >= 51 && aqiIndex <= 100) {
		return AirQualityLevel.MODERATE;
	} else if (aqiIndex >= 101 && aqiIndex <= 150) {
		return AirQualityLevel.UNHEALTHY_FOR_SENSITIVE;
	} else if (aqiIndex >= 151 && aqiIndex <= 200) {
		return AirQualityLevel.UNHEALTHY;
	} else if (aqiIndex >= 201 && aqiIndex <= 300) {
		return AirQualityLevel.VERY_UNHEALTHY;
	} else if (aqiIndex >= 301 && aqiIndex <= 500) {
		return AirQualityLevel.HAZARDOUS;
	}
}

function modifyWeatherResp(weatherRespBody, aqicnRespBody) {
	let weatherRespJson = JSON.parse(weatherRespBody)
	let aqicnRespJson = JSON.parse(aqicnRespBody).data

	let aqicnIndex = aqicnRespJson.aqi
	weatherRespJson.air_quality.airQualityCategoryIndex = classifyAirQualityLevel(aqicnIndex)
	weatherRespJson.air_quality.airQualityIndex = aqicnIndex
	weatherRespJson.air_quality.airQualityScale = AirQualityStandard.US
	weatherRespJson.air_quality.learnMoreURL = aqicnRespJson.city.url + '/cn'

	weatherRespJson.air_quality.metadata.provider_logo = 'https://i.loli.net/2020/12/27/UqW23eZLFAIbxGV.png'
	weatherRespJson.air_quality.metadata.provider_name = 'aqicn.org'

	weatherRespJson.air_quality.primaryPollutant = aqicnRespJson.dominentpol
	weatherRespJson.air_quality.source = aqicnRespJson.city.name

	return JSON.stringify(weatherRespJson)
}

$httpClient.get(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=${aqicnToken}`, function (error, _response, data) {
	if (error) {
		$done({})
	} else {
		let body = modifyWeatherResp($response.body, data)
		$done({ body })
	}
});