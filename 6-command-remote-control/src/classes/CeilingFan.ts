export type ceilingFanSpeeds = 0 | 1 | 2 | 3;

export class CeilingFan {
  public static HIGH: 3 = 3;
  public static MEDIUM: 2 = 2;
  public static LOW: 1 = 1;
  public static OFF: 0 = 0;
  protected location!: string;
  protected speed!: ceilingFanSpeeds;

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
    console.log(`${this.location} Ceiling Fan is off`);
  }

  getSpeed(): ceilingFanSpeeds {
    return this.speed;
  }

  setSpeed(speed: ceilingFanSpeeds): void {
    switch (speed) {
      case CeilingFan.LOW:
        this.low();
        break;
      case CeilingFan.MEDIUM:
        this.medium();
        break;
      case CeilingFan.HIGH:
        this.high();
        break;
      case CeilingFan.OFF:
        this.off();
        break;
    }
  }
}
