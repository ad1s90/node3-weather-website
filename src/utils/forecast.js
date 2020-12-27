const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=ecb525d68617673822cecab01b1516d7&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degrees out. It feels like ' +
          body.current.feelslike +
          ' degrees out. Humidity is: ' +
          body.current.humidity + " ok"
      );
    }
  });
};

module.exports = forecast;
