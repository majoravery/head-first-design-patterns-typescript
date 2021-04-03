export enum Size {
  Tall,
  Grande,
  Venti,
}
export abstract class Beverage {
  protected size!: Size;
  protected description!: string;

  constructor() {
    this.size = Size.Tall;
    this.description = 'Unknown Beverage';
  }

  getDescription(): string {
    return this.description;
  }

  getSize(): Size {
    return this.size;
  }

  setSize(size: Size): void {
    this.size = size;
  }

  abstract cost(): number;
}
