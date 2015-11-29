### Forecaster

The purpose of this application is to take a zipcode and return the forecast for the area. It can be run by using `node app.js your-zipcode`. The application requires two api keys to function. One from Google and another from [Forecast.io](http://forecast.io/). I decided to obfuscate these keys by creating a module file called `api.js` that looks a little like:
```javascript
module.exports = {
  google: 'key',
  forecast: 'key',
};
```
<br>
<br>
My one big take away from this was to remember that Node is asynchronus. I originally tried to store the results of `getLongLat` then try to call `getWeather`. I forgot the second function will try to execute before the fist is finished so I had to change it up and call `getWeather` inside of `getLongLat`.
