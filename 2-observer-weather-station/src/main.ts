import { CurrentConditionsDisplay } from './classes/CurrentConditionsDisplay';
import { ForecastDisplay } from './classes/ForecastDisplay';
import { StatisticsDisplay } from './classes/StatisticsDisplay';
import { HeatIndexDisplay } from './classes/HeatIndexDisplay';
import { WeatherData } from './classes/WeatherData';

class WeatherStation {
  constructor() {
    const weatherData = new WeatherData();
    new CurrentConditionsDisplay(weatherData);
    new ForecastDisplay(weatherData);
    new StatisticsDisplay(weatherData);
    new HeatIndexDisplay(weatherData);

    weatherData.setMeasurements(26, 65, 30.4);
    weatherData.setMeasurements(30, 70, 29.2);
    weatherData.setMeasurements(25, 90, 29.2);
  }
}

new WeatherStation();
