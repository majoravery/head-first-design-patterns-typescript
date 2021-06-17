export default class TheatreLights {
  private description: string;
  private dimAmount: number | undefined;

  constructor(description: string) {
    this.description = description;
  }

  on(): void {
    console.log(`${this.description} on`);
  }

  off(): void {
    console.log(`${this.description} off`);
  }

  dim(dimAmount: number): void {
    this.dimAmount = dimAmount;
    console.log(`${this.description} dimming to ${this.dimAmount}%`);
  }

  toString(): string {
    return this.description;
  }
}
