const request = require("request");

const geocode = (address, callback) => {
    const location = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoibGluZGEzMzMiLCJhIjoiY2tjMHE4ajUzMGo2djMxcDNtdWFvcmxneCJ9.IvVO9XuL-SxtGEd_gz-DZA&limit=1`
    
    request({url:url, json: true}, (error, response) => {
        if(error){
            callback("Unable to connect weather service!", undefined)
        } else if (response.body.features.length === 0){
            callback("Unable to connect weather service!", undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
        
}

module.exports = geocode;