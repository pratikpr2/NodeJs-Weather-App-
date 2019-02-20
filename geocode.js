const request = require('request');

var geocode = (address,callback) => {
    var encodedAddress = encodeURIComponent(address);
    //console.log(encodedAddress); 

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAl9CBZHPMZrkyIMsRdqttKrR53dERX0mI`,
        json: true,
    },(error,response, body) => {
        if(error){
            callback('Unable to Connect To Servers...');
        }
        else if( body.status === 'ZERO_RESULTS'){
            callback('Unable to Fetch location');
        }
        else if(body.status === 'OK'){
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
}

module.exports = {
    geocode
}