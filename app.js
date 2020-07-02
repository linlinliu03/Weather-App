const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const yargs = require("yargs");

const address = process.argv[2];

if(!address){
   console.log("Please type some location to check!")
}else{
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, response) => {
            if (error) {
                return console.log(error);
            }
            console.log(data.location)
            console.log(response);
        })
    })
}







