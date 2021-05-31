export class CeilingFan {
  public static HIGH = 3;
  public static MEDIUM = 2;
  public static LOW = 1;
  public static OFF = 0;
  protected location!: string;
  protected speed!: number;

  constructor(location: string) {
    this.location = location;
    this.speed = CeilingFan.OFF;
  }

  high(): void {
    this.speed = CeilingFan.HIGH;
    console.log(`${this.location} Ceiling Fan is on high`);
  }

  medium(): void {
    this.speed = CeilingFan.MEDIUM;
    console.log(`${this.location} Ceiling Fan is on medium`);
  }

  low(): void {
    this.speed = CeilingFan.LOW;
    console.log(`${this.location} Ceiling Fan is on low`);
  }

  off(): void {
    this.speed = CeilingFan.OFF;
    console.log(`${this.location} Ceiling Fan is on off`);
  }

  getSpeed(): number {
    return this.speed;
  }
}
