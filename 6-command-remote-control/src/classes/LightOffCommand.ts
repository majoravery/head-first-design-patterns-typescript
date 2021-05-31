import { Command } from '../interfaces/Command';
import { Light } from './Light';

export class LightOffCommand implements Command {
  protected light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }
}
