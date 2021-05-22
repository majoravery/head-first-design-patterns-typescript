import { Command } from '../interfaces/Command';
import { CeilingFan } from './CeilingFan';

export class CeilingFanOffCommand implements Command {
  protected ceilingFan: CeilingFan;
  protected previousState: number = CeilingFan.OFF;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.previousState = this.ceilingFan.getSpeed();
    this.ceilingFan.off();
  }

  undo(): void {
    switch (this.previousState) {
      case CeilingFan.LOW:
        return this.ceilingFan.low();
      case CeilingFan.MEDIUM:
        return this.ceilingFan.medium();
      case CeilingFan.HIGH:
        return this.ceilingFan.high();
      case CeilingFan.OFF:
        return this.ceilingFan.off();
    }
  }
}
