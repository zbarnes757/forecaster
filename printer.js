// Print the forecast
function printMessage(summary) {
  console.log('The forecast for your specified area is: ' + summary);
}

// Print out error messages
function printError(error) {
  console.error(error.message);
}

module.exports.message = printMessage;
module.exports.error = printError;
