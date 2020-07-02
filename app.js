const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");


geocode("New York", (error, data) =>{
    if(error){
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, response) => {
        if(error){
            return console.log(error);
        }
        console.log(data.location)
        console.log("Data", response);
    })
})



