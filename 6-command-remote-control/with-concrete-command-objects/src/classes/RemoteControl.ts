import { Command } from '../interfaces/Command';
import { NoCommand } from './NoCommand';

const noCommmand = new NoCommand();

export class RemoteControl {
  protected onCommands: [Command] = [noCommmand];
  protected offCommands: [Command] = [noCommmand];
  protected slots!: number;
  protected previousCommand: Command = noCommmand;

  constructor(slots: number) {
    this.slots = slots;
    for (let i = 0; i < this.slots; i++) {
      this.onCommands[i] = noCommmand;
      this.offCommands[i] = noCommmand;
    }
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    if (slot < 0 || slot >= this.slots) {
      // Invalid
      return;
    }
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
    this.previousCommand = this.onCommands[slot];
  }

  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
    this.previousCommand = this.offCommands[slot];
  }

  undoButtonWasPushed(): void {
    this.previousCommand.undo();
  }

  toString(): void {
    console.log('\n');
    console.log('––––– Remote Control –––––');
    for (let i = 0; i < this.slots; i++) {
      console.log(
        `[slot ${i}] ${this.onCommands[i].constructor.name} ${this.offCommands[i].constructor.name}`
      );
    }
    console.log(
      `[undo] ${this.previousCommand.constructor.name} ${this.previousCommand.constructor.name}`
    );
    console.log('\n');
  }
}
