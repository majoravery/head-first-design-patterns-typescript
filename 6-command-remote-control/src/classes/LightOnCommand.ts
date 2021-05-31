import { Command } from '../interfaces/Command';
import { Light } from './Light';

export class LightOnCommand implements Command {
  protected light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
