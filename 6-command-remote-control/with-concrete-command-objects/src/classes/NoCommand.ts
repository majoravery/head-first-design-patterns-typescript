import { Command } from '../interfaces/Command';

export class NoCommand implements Command {
  execute(): void {
    return;
  }

  undo(): void {
    return;
  }
}
