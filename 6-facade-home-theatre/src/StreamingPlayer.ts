import Amplifier from './Amplifier';

export default class StreamingPlayer {
  private amplifier: Amplifier;
  private description: string;
  private movie: string | undefined;

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

  pause(): void {
    console.log(`${this.description} paused ${this.movie}`);
  }

  play(movie: string): void {
    this.movie = movie;
    console.log(`${this.description} playing ${this.movie}`);
  }

  setSurroundAudio(): void {
    console.log(`${this.description} set surround audio`);
  }

  setTwoChannelAudio(): void {
    console.log(`${this.description} set two channel audio`);
  }

  stop(): void {
    console.log(`${this.description} stopped ${this.movie}`);
  }

  toString(): string {
    return this.description;
  }
}
