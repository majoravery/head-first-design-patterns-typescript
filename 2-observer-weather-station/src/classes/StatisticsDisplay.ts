import { Observer } from './../interfaces/Observer';
import { DisplayElement } from './../interfaces/DisplayElement';
import { WeatherData } from './WeatherData';

export class StatisticsDisplay implements Observer, DisplayElement {
  private weatherData: WeatherData;
  private temperatures: number[];
  private max!: number;
  private min!: number;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData; // Save reference to unsubscribe with later
    weatherData.registerObserver(this);
    this.temperatures = [];
  }

  update(temperature: number): void {
    this.temperatures.push(temperature);
    if (!this.max || temperature > this.max) {
      this.max = temperature;
    }
    if (!this.min || temperature < this.min) {
      this.min = temperature;
    }
    this.display(); // Might not be the best place to call display(), but will suffice for this example
  }

  display(): void {
    const avg =
      this.temperatures.reduce((acc, curr) => acc + curr, 0) /
      this.temperatures.length;
    console.log(`Avg/Max/Min: ${avg}/${this.max}/${this.min}`);
  }

  teardown(): void {
    this.weatherData.removeObserver(this);
  }
}
