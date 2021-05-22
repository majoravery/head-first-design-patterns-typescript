export class Light {
  protected location!: string;

  constructor(location: string) {
    this.location = location;
  }

  on(): void {
    console.log(`${this.location} Light is on`);
  }

  off(): void {
    console.log(`${this.location} Light is off`);
  }
}
