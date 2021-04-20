export abstract class Pizza {
  protected name!: string;

  protected dough!: Dough;
  protected sauce!: Sauce;
  protected cheese!: Cheese;
  protected veggies?: Veggies[] = [];
  protected pepperoni?: Pepperoni;
  protected clam?: Clams;

  abstract prepare(): void;

  bake(): void {
    console.log('Bake for 25 minutes at 175');
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    // print pizza here;
    return '';
  }
}
