import StreamingPlayer from './StreamingPlayer';
import Tuner from './Tuner';

export default class Amplifier {
  private description: string;
  private level: number | undefined;
  private player: StreamingPlayer | undefined;
  private tuner: Tuner | undefined;

  constructor(description: string) {
    this.description = description;
  }

  on(): void {
    console.log(`${this.description} on`);
  }

  off(): void {
    console.log(`${this.description} off`);
  }

  setStereoSound(): void {
    console.log(`${this.description} stereo mode on`);
  }

  setSurroundSound(): void {
    console.log(
      `${this.description} surround sound on (5 speakers, 1 subwoofer)`
    );
  }

  setVolume(level: number): void {
    this.level = level;
    console.log(`${this.description} setting volumen to ${this.level}`);
  }

  setTuner(tuner: Tuner): void {
    this.tuner = tuner;
    console.log(`${this.description} setting tuner to ${this.tuner}`);
  }

  setStreamingPlayer(player: StreamingPlayer): void {
    this.player = player;
    console.log(`${this.description} setting player to ${this.player}`);
  }

  toString(): string {
    return this.description;
  }
}
