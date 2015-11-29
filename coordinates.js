var https   = require('https');
var api     = require('./api');
var weather = require('./weather');
var printer = require('./printer');

// Get longitude and latitude
function get(zipcode) {
  var request = https.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode + '&key=' + api.google, function (response) {
    response.setEncoding('utf8');
    var body = '';

    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function () {
      try {
        jsonBody = JSON.parse(body);
        weather.get(jsonBody.results[0].geometry.location);
      } catch (error) {
        printer.error(error);
      }
    });
  });

  request.on('error', printer.error);
}

module.exports.get = get;
