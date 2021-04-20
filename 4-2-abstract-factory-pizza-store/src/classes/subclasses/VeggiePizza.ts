import { Pizza } from '../Pizza';

export class VeggiePizza extends Pizza {
  protected ingredientFactory!: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.name = 'Veggie Pizza';
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.veggies = this.ingredientFactory.createVeggies();
  }
}
