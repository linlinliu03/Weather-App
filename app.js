const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=747ab087e2746709e77999472c1c284c&query=New%20York&units=f";

request({url:url, json:true}, (error,response) => {
    const temperature = response.body.current.temperature;
    const feelslike = response.body.current.feelslike;
    const overCast = response.body.current.weather_descriptions[0];
    console.log(`${overCast}. It's currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
})



