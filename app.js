const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=747ab087e2746709e77999472c1c284c&query=New%20York";

request({url:url}, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})