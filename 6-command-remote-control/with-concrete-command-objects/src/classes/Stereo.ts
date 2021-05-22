export class Stereo {
  protected location!: string;
  protected volume!: number;

  constructor(location: string) {
    this.location = location;
    this.volume = 0;
  }

  on(): void {
    console.log(`${this.location} Stereo is on`);
  }

  off(): void {
    console.log(`${this.location} Stereo is off`);
  }

  setCd(): void {
    console.log(`${this.location} Stereo is set for CD input`);
  }

  setVolume(volume: number): void {
    this.volume = volume;
    console.log(`${this.location} Stereo volume is set to ${this.volume}`);
  }
}
