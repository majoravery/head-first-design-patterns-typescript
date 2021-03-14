import { Subject } from './../interfaces/Subject';
import { Observer } from './../interfaces/Observer';

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  constructor() {
    this.observers = [];
    this.setMeasurements(27, 15, 5.4); // hardcoded for testing purposes
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  public notifyObservers(): void {
    this.observers.forEach((observer: Observer) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  public getTemperature(): number {
    return this.temperature;
  }

  public getHumidity(): number {
    return this.humidity;
  }

  public getPressure(): number {
    return this.pressure;
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }
}
