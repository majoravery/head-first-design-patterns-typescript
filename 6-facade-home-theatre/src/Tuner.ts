import Amplifier from './Amplifier';

export default class Tuner {
  private amplifier: Amplifier | undefined;
  private description: string;
  private frequency: number | undefined;

  constructor(description: string, amplifier: Amplifier) {
    this.description = description;
    this.amplifier = amplifier;
  }

  on(): void {
    console.log(`${this.description} on`);
  }

  off(): void {
    console.log(`${this.description} off`);
  }

  setFrequency(frequency: number): void {
    this.frequency = frequency;
    console.log(`${this.description} setting frequency to ${this.frequency}`);
  }

  setAm(): void {
    console.log(`${this.description} setting AM mode`);
  }

  setFm(): void {
    console.log(`${this.description} setting FM mode`);
  }

  toString(): string {
    return this.description;
  }
}
