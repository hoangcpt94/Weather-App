const fetch = require('node-fetch');

const geocode = (address, callback) => {
	fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYmd0b2FuaG9hIiwiYSI6ImNrbXhsMWFyczA3OXkyb254YnUxaGJ0dmYifQ.MZuhI8xGe02nqH-O-NWTSg&limit=1`)
		.then(res => res.json())
		.then(data => {
			if (data.features.length === 0) {
				callback('Unable to find location. Try another search!', undefined)
			} else {
				callback(undefined, {
					latitude: data.features[0].center[1],
					longitude: data.features[0].center[0],
					location: data.features[0].place_name
				})
			}

		})
		.catch(err => callback('Unable to connect to location services!', undefined))
}

module.exports = geocode;