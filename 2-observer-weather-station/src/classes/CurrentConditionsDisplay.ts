import { Observer } from './../interfaces/Observer';
import { DisplayElement } from './../interfaces/DisplayElement';
import { WeatherData } from './WeatherData';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private weatherData: WeatherData;
  private temperature!: number;
  private humidity!: number;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData; // Save reference to unsubscribe with later
    weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display(); // Might not be the best place to call display(), but will suffice for this example
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} degrees C and ${this.humidity}% humidity.`
    );
  }

  teardown(): void {
    this.weatherData.removeObserver(this);
  }
}
