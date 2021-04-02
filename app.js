const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2]; 

geocode(address, (error, { latitude, longitude, location }={} ) => {
	if (error) return console.log(error)

	forecast(latitude, longitude, (err, forecastData) => {
		if (err) return console.log(err)
		console.log(location)
		console.log(forecastData)
	})
})

