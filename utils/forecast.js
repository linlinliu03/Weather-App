const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=747ab087e2746709e77999472c1c284c&query=${latitude},${longitude}&units=f`;

    request({ url: url, json: true }, (error, response) => {
      
        if (error) {
            callback("Unable to connect weather service!", undefined)
        } else if (response.body.error) {
            callback("Unable to find the location!", undefined)
        } else {
            const temperature = response.body.current.temperature;
            const feelslike = response.body.current.feelslike;
            const overCast = response.body.current.weather_descriptions[0];
            callback(undefined, `${overCast}. It's currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
        }
    })
}

module.exports = forecast;