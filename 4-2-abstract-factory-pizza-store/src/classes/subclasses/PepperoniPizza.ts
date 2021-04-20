import { Pizza } from '../Pizza';

export class PepperoniPizza extends Pizza {
  protected ingredientFactory!: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.name = 'Pepperoni Pizza';
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.pepperoni = this.ingredientFactory.createPepperoni();
    this.veggies = this.ingredientFactory.createVeggies();
  }
}
