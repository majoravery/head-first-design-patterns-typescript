export class TV {
  protected location!: string;

  constructor(location: string) {
    this.location = location;
  }

  on(): void {
    console.log(`${this.location} TV is on`);
  }

  off(): void {
    console.log(`${this.location} TV is off`);
  }
}
