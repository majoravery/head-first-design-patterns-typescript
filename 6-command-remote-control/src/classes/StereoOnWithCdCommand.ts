import { Command } from '../interfaces/Command';
import { Stereo } from './Stereo';

export class StereoOnWithCdCommand implements Command {
  protected stereo: Stereo;

  constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  execute(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }

  undo(): void {
    this.stereo.off();
  }
}
