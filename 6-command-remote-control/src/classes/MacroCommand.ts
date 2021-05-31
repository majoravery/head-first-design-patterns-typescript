import { Command } from '../interfaces/Command';

export class MacroCommand implements Command {
  protected commands: Command[] = [];

  constructor(commands: Command[]) {
    this.commands = [...commands];
  }

  execute(): void {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].execute();
    }
  }

  undo(): void {
    return;
  }
}
