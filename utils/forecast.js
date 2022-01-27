const request = require('postman-request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=df2dc5ee1580ceca75f266e8544aeedd&query=' + lat + ',' + lon
    request({ url, json: true }, (error, {body}) => {
        if (error) {
			callback('Connection with API failed', undefined)
		} else if (body.success != undefined) {
			callback('Bad request', undefined)
		} else {
			callback(undefined, {
				longitude: body.location.lon,
                latitude: body.location.lat,
                temperature: body.current.temperature
			})
		}
    })
}

module.exports = forecast