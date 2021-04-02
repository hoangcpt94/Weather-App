const fetch = require('node-fetch');

const forecast = (latitude, longitude, callback) => {
	fetch(`https://api.weatherstack.com/current?access_key=66e495447af97e8926af7b8b3ec365dd&query=${latitude},${longitude}&units=f`)
		.then(res => res.json())
		.then(data => {
			if (data.error) {
				callback(data.error.info, undefined)
			} else {
				const { temperature, feelslike, weather_descriptions } = data.current
				callback(undefined, `${weather_descriptions[0]}, It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out`)
			}
		})
		.catch(err => callback('Unable to connect to weather service!', undefined))
}

module.exports = forecast;