import { Command } from '../interfaces/Command';
import { TV } from './TV';

export class TVOnCommand implements Command {
  protected tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.on();
  }

  undo(): void {
    this.tv.off();
  }
}
