import { Command } from '../interfaces/Command';
import { GarageDoor } from './GarageDoor';

export class GarageDoorCloseCommand implements Command {
  protected garageDoor: GarageDoor;

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  execute(): void {
    this.garageDoor.close();
  }

  undo(): void {
    this.garageDoor.open();
  }
}
