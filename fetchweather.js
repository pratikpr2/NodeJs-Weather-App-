const request = require('request');

var getWeather = (latitude, longitude, callback) => {
   
    request({
        url: `https://api.darksky.net/forecast/66c666aa18db374905ec804883c0b34a/${latitude},${longitude}`,
        json: true,
    },(error,response,body) => {
        if(!error && body.code!=400){
            callback(undefined, {
                temperature: body.currently.temperature
            });
        }
        else{
            callback('Unable to Fetch Weather...');
        }
    });
};

module.exports = {
    getWeather
}