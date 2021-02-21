const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYm9nZGFuZGFyIiwiYSI6ImNrbGNxcWd1NDE3dHoydnM4dWZhOXl6NXQifQ.9ryW72awGQUyyZLa_e0NTg&limit=1';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unbale to connect to geolocation server')
        } else if (body.features.length === 0) {
            callback('Unable to find location.Try another search')
        } else {
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            const location = body.features[0].place_name;
            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
}

module.exports = geocode;