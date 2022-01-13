const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=df2dc5ee1580ceca75f266e8544aeedd&query=Barcelona'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current)
})

const mapUrl =  'https://api.mapbox.com/geocoding/v5/mapbox.places/Barcelona.json?access_token=pk.eyJ1Ijoicm90Y2l2MDIiLCJhIjoiY2t5MzhrZzlkMHQzOTJ1bGxibWphZnVzdCJ9.3NUFK8uJsXP8Zvb8yxMYHw&limit=1'

request({ url: mapUrl, json: true }, (error, response) => {
	console.log('Longitude: ' + response.body.features[0].center[0])
	console.log('Latitude: ' + response.body.features[0].center[1])
})