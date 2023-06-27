const currentWeatherAdapter = (data) => {
  return {
    temperature: data.main.temp.toFixed(0),
    min_temp: data.main.temp_min.toFixed(0),
    max_temp: data.main.temp_max.toFixed(0),
    main: data.weather[0].main,
    degrees: 'Celcius',
    clouds_percentage: data.clouds.all,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    description: data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
    city: data.name,
    country: data.sys.country,
  };
};

export default currentWeatherAdapter;
