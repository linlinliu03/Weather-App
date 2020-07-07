const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const yargs = require("yargs");

const address = process.argv[2];

if(!address){
   console.log("Please type some location to check!")
}else{
    geocode(address, (error, { latitude, longitude, location}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, response) => {
            if (error) {
                return console.log(error);
            }
            console.log(location)
            console.log(response);
        })
    })
}







