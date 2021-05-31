import { Command } from '../interfaces/Command';
import { CeilingFan, ceilingFanSpeeds } from './CeilingFan';

export class CeilingFanMediumCommand implements Command {
  protected ceilingFan: CeilingFan;
  protected previousState: ceilingFanSpeeds = CeilingFan.OFF;

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute(): void {
    this.previousState = this.ceilingFan.getSpeed();
    this.ceilingFan.medium();
  }

  undo(): void {
    this.ceilingFan.setSpeed(this.previousState);
  }
}
