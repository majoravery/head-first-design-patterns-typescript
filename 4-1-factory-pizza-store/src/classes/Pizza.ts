export abstract class Pizza {
  protected name!: string;
  protected dough!: string;
  protected sauce!: string;
  protected toppings: string[] = [];

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log('Tossing dough...');
    console.log('Adding sauce...');
    console.log('Adding toppings:');
    this.toppings.forEach((topping: string) => {
      console.log(topping);
    });
  }

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
