import StreamingPlayer from './StreamingPlayer';

export default class Projector {
  private description: string;
  private player: StreamingPlayer;

  constructor(description: string, player: StreamingPlayer) {
    this.description = description;
    this.player = player;
  }

  on(): void {
    console.log(`${this.description} on`);
  }

  off(): void {
    console.log(`${this.description} off`);
  }

  tvMode(): void {
    console.log(`${this.description} in tv mode (4x3 aspect ratio)`);
  }

  wideScreenMode(): void {
    console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`);
  }

  toString(): string {
    return this.description;
  }
}
