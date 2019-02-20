const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./fetchweather');

const argv = yargs
            .option({
                a: {
                    demand: true,
                    alias: 'address',
                    describe: 'Address to fetch weather',
                    string: true
                }
            })
            .help()
            .alias('help','h')
            .argv;

geocode.geocode(argv.a,(errorMeggage, results)=>{
    if(errorMeggage){
        console.log(errorMeggage);
    }else{
        console.log(JSON.stringify(results,undefined, 2));
        weather.getWeather(results.latitude,results.longitude,(errorMeggage, weatherResults) => {
            if(errorMeggage){
                console.log(errorMeggage);
            }else{
                console.log(`The current Temperature is ${weatherResults.temperature} *F.`);
            }
        });
    }
});

