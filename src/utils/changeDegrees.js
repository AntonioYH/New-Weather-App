import toCelcius from './ToCelcius';
import toFahrenheit from './toFahrenheit';

const chageDegrees = (data, setData) => {
  let result;

  if (data.degrees === 'Celcius') {
    result = {
      ...data,
      temperature: toFahrenheit(data.temperature),
      min_temp: toFahrenheit(data.min_temp),
      max_temp: toFahrenheit(data.max_temp),
      degrees: 'Fahrenheit',
    };
  } else if (data.degrees === 'Fahrenheit') {
    result = {
      ...data,
      temperature: toCelcius(data.temperature),
      min_temp: toCelcius(data.min_temp),
      max_temp: toCelcius(data.max_temp),
      degrees: 'Celcius',
    };
  }

  setData(result);
};

export default chageDegrees;
