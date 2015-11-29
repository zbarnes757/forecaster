// Problem: create a simple command line application to look up a users forecast by zipcode from forecast.io
var forecast = require('./coordinates');

forecast.get(process.argv[2]);
