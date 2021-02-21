const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ef5bfdfffebfe26aeb9571ee6c40c68a&query=' + latitude + ',' + longitude +  '&units=m';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
           callback('Unable to connect to weather server', undefined) 
        } else if (body.error) {
            callback('Unable to find location', undefined) 
        } else {
            const desc = body.current.weather_descriptions[0];
            const temp = body.current.temperature;
            const feelsLike = body.current.feelslike;
            callback(undefined, `${desc}. It is currently ${temp}. It feels like ${feelsLike} degrees out.`)
        }
    })
}

module.exports = forecast
