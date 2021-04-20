import * as Ingredients from '../Ingredients';

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new Ingredients.ThickCrustDough();
  }

  createSauce(): Sauce {
    return new Ingredients.PlumTomatoSauce();
  }

  createCheese(): Cheese {
    return new Ingredients.MozzarellaCheese();
  }

  createVeggies(): Veggies[] {
    const veggies = [
      new Ingredients.Eggplant(),
      new Ingredients.BlackOlives(),
      new Ingredients.Spinach(),
    ];

    return veggies;
  }

  createPepperoni(): Pepperoni {
    return new Ingredients.SlicedPepperoni();
  }

  createClam(): Clams {
    return new Ingredients.FrozenClams();
  }
}
