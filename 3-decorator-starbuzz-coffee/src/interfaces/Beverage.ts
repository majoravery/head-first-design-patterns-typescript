export abstract class Beverage {
  protected description!: string;

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}
