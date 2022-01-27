const request = require('postman-request')

const geocode = (address, callback) => {
	const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoicm90Y2l2MDIiLCJhIjoiY2t5MzhrZzlkMHQzOTJ1bGxibWphZnVzdCJ9.3NUFK8uJsXP8Zvb8yxMYHw&limit=1'
	request({ url, json: true }, (error, {body}) => {
		if (error) {
			callback('Connection with API failed', undefined)
		} else if (body.features.length === 0) {
			callback('Bad request', undefined)
		} else {
			callback(undefined, {
				longitude: body.features[0].center[0],
				latitude: body.features[0].center[1]
			})
		}
	})
}

module.exports = geocode