// 此脚本仅适用于 iOS 15 的原生天气 App
// Developed by Hackl0us (https://github.com/hackl0us)

// STEP 1: 前往 https://aqicn.org/data-platform/token/ 注册账户，将申请的 API Token 填入下方
const aqicnToken = 'd1024c9bc6504f0b58a29f6f1d989e2bece45cd7'

// STEP 2: 参考下方配置片段，在代理工具的配置文件中添加对应的配置。注意：script-path 后应该替换为添加 apicnToken 值后的脚本路径
/*
	[Script]
	iOS15美标空气质量 = type=http-response,pattern=https://weather-data.apple.com/v2/weather/[\w-]+/-?[0-9]+\.[0-9]+/-?[0-9]+\.[0-9]+\?,requires-body=true,script-path=path/to/iOS15_Weather_AQI_US.js

	[MITM]
	hostname = weather-data.apple.com
*/

const AirQualityStandard = {
	CN: 'HJ6332012.4',
	US: 'EPA_NowCast.4'
}

const AirQualityLevel = {
	GOOD: 1,
	MODERATE: 2,
	UNHEALTHY_FOR_SENSITIVE: 3,
	UNHEALTHY: 4,
	VERY_UNHEALTHY: 5,
	HAZARDOUS: 6
}

const coordRegex = /https:\/\/weather-data\.apple\.com\/v2\/weather\/([\w-]+)\/(-?[0-9]+\.[0-9]+)\/(-?[0-9]+\.[0-9]+)\?/
const [_, language, lat, lng] = $request.url.match(coordRegex)

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
	} else if (aqiIndex >= 301) {
		return AirQualityLevel.HAZARDOUS;
	}
}

function modifyWeatherResp(weatherRespBody, aqicnRespBody) {
	let weatherRespJson = JSON.parse(weatherRespBody)
	let aqicnRespJson = JSON.parse(aqicnRespBody).data
	weatherRespJson.airQuality = constructAirQuailityNode(aqicnRespJson)
	return JSON.stringify(weatherRespJson)
}

function getPrimaryPollutant(pollutant) {
	switch (pollutant) {
		case 'co':
			return 'CO2';
		case 'so2':
			return 'SO2';
		case 'no2':
			return 'NO2';
		case 'nox':
			return 'NOX'
		case 'pm25':
			return 'PM2.5';
		case 'pm10':
			return 'PM10';
		case 'o3':
			return 'OZONE';
		default:
			return "OTHER";
	}
}

function constructAirQuailityNode(aqicnData) {
	let airQualityNode = { "isSignificant": true, "learnMoreURL": "", "primaryPollutant": "", "scale": "", "categoryIndex": 0, "source": "", "pollutants": { "CO": { "name": "CO", "amount": 0, "unit": "microgramsPerM3" }, "NO": { "name": "NO", "amount": 0, "unit": "microgramsPerM3" }, "NO2": { "name": "NO2", "amount": 0, "unit": "microgramsPerM3" }, "SO2": { "name": "SO2", "amount": 0, "unit": "microgramsPerM3" }, "NOX": { "name": "NOX", "amount": 0, "unit": "microgramsPerM3" }, "OZONE": { "name": "OZONE", "amount": 0, "unit": "microgramsPerM3" }, "PM10": { "name": "PM10", "amount": 0, "unit": "microgramsPerM3" }, "PM2.5": { "name": "PM2.5", "amount": 0, "unit": "microgramsPerM3" } }, "sourceType": "station", "metadata": { "version": 2, "longitude": 0, "providerName": "aqicn.org", "providerLogo": "https://aqicn.org/mapi/logo.png", "language": "en-US", "latitude": 0, "expireTime": "", "reportedTime": "", "readTime": "", "units": "m" }, "name": "AirQuality", "index": 0 }
	const aqicnIndex = aqicnData.aqi

	airQualityNode.index = aqicnIndex
	airQualityNode.categoryIndex = classifyAirQualityLevel(aqicnIndex)
	airQualityNode.learnMoreURL = aqicnData.city.url + '/cn/m'
	airQualityNode.scale = AirQualityStandard.US
	airQualityNode.source = aqicnData.city.name
	airQualityNode.primaryPollutant = getPrimaryPollutant(aqicnData.dominentpol)

	airQualityNode.metadata.latitude = aqicnData.city.geo[0]
	airQualityNode.metadata.longitude = aqicnData.city.geo[1]
	airQualityNode.metadata.readTime = timeConversion(new Date(), 'remain')
	airQualityNode.metadata.reportedTime = timeConversion(new Date(aqicnData.time.iso), 'remain')
	airQualityNode.metadata.expireTime = timeConversion(new Date(aqicnData.time.iso), 'add-1h-floor')
	airQualityNode.metadata.language = language

	airQualityNode.pollutants.CO.amount = aqicnData.iaqi.co?.v || -1
	airQualityNode.pollutants.SO2.amount = aqicnData.iaqi.so2?.v || -1
	airQualityNode.pollutants.NO2.amount = aqicnData.iaqi.no2?.v || -1
	airQualityNode.pollutants.NOX.amount = aqicnData.iaqi.nox?.v || -1
	airQualityNode.pollutants["PM2.5"].amount = aqicnData.iaqi.pm25?.v || -1
	airQualityNode.pollutants.OZONE.amount = aqicnData.iaqi.o3?.v || -1
	airQualityNode.pollutants.PM10.amount = aqicnData.iaqi.pm10?.v || -1

	return airQualityNode
}

function timeConversion(time, action) {
	switch (action) {
		case 'remain':
			time.setMilliseconds(0);
			break;
		case 'add-1h-floor':
			time.setHours(time.getHours() + 1);
			time.setMinutes(0, 0, 0);
			break;
		default:
			console.log('Error time converting action.');
	}
	let timeString = time.toISOString().split('.')[0] + 'Z'
	return timeString;
}

$httpClient.get(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=${aqicnToken}`, function (error, _response, data) {
	if (error) {
		let body = $response.body
		$done({ body })
	} else {
		let body = modifyWeatherResp($response.body, data)
		$done({ body })
	}
});
