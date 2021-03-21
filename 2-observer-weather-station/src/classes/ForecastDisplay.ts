import { Observer } from './../interfaces/Observer';
import { DisplayElement } from './../interfaces/DisplayElement';
import { WeatherData } from './WeatherData';

export class ForecastDisplay implements Observer, DisplayElement {
  private weatherData: WeatherData;
  private currentPressure: number;
  private lastPressure!: number;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
    this.currentPressure = 29.92;
  }

  update(): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.getPressure();
    this.display(); // Might not be the best place to call display(), but will suffice for this example
  }

  display(): void {
    let forecast = '';
    if (this.currentPressure > this.lastPressure) {
      forecast = 'Improving weather on the way!';
    } else if (this.currentPressure === this.lastPressure) {
      forecast = 'More of the same';
    } else if (this.currentPressure < this.lastPressure) {
      forecast = 'Watch out for cooler, rainy weather';
    }
    console.log(`Forecast: ${forecast}`);
  }

  teardown(): void {
    this.weatherData.removeObserver(this);
  }
}
