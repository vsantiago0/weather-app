const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

const input = process.argv[2]

if (input) {
	geocode(input, (error, {longitude:lon, latitude:lat} = {}) => {
		if (error) return console.log(error)
		forecast(lat, lon, (error, {longitude:fLon, latitude:fLat, temperature:temp} = {}) => {
			if (error) return console.log(error)
			console.log('The temperature in ' + input + ' is ' + temp + 'ºC. Latitude: ' + fLat + ', longitude: ' + fLon)
		})
	})
} else {
	console.log('Name a city!')
}
