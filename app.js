// Problem: create a simple command line application to look up a users forecast by zipcode from forecast.io
//
// connect to API url
var https = require('https');
var api = require('./api');

function getLongLat(zipcode) {
  var request = https.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode + '&key=' + api.google, function (response) {
    response.setEncoding('utf8');
    var body = '';

    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function () {
      jsonBody = JSON.parse(body);
      getWeather(jsonBody.results[0].geometry.location);
    });
  });

  request.on('error', function (error) {
    console.error(error.message);
  });
}

function getWeather(coordinateObj) {
  var request = https.get('https://api.forecast.io/forecast/' + api.forecast +  '/' + coordinateObj.lat + ',' + coordinateObj.lng, function(response) {
    response.setEncoding('utf8');
    var body = '';

    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function () {
      jsonBody = JSON.parse(body);
      printMessage(jsonBody.daily.summary);
    });
  });

  request.on('error', function (error) {
    console.error(error.message);
  });
}

function printMessage(summary) {
  console.log('The forecast for your specified area is: ' + summary);
}

getLongLat(process.argv[2]);
