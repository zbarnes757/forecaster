var https   = require('https');
var api     = require('./api');
var printer = require('./printer');

// Get the forecast
function get(coordinateObj) {
  var request = https.get('https://api.forecast.io/forecast/' + api.forecast +  '/' + coordinateObj.lat + ',' + coordinateObj.lng, function(response) {
    response.setEncoding('utf8');
    var body = '';

    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function () {
      try {
        jsonBody = JSON.parse(body);
        printer.message(jsonBody.daily.summary);
      } catch (error) {
        printer.error(error);
      }
    });
  });

  request.on('error', printer.error);
}

module.exports.get = get;
