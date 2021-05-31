import { Command } from '../interfaces/Command';
import { CeilingFan, ceilingFanSpeeds } from './CeilingFan';

export class CeilingFanLowCommand implements Command {
  protected ceilingFan: CeilingFan;
  protected previousState: ceilingFanSpeeds = CeilingFan.OFF;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.previousState = this.ceilingFan.getSpeed();
    this.ceilingFan.low();
  }

  undo(): void {
    this.ceilingFan.setSpeed(this.previousState);
  }
}
