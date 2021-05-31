import { Command } from '../interfaces/Command';
import { GarageDoor } from './GarageDoor';

export class GarageDoorOpenCommand implements Command {
  protected garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.open();
  }

  undo(): void {
    this.garageDoor.close();
  }
}
