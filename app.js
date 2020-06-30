const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

forecast(37.8267, -112, (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
})

geocode("New York", (error, data) =>{
    console.log("Error", error);
    console.log("Data", data);
})

