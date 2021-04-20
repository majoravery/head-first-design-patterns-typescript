import * as Ingredients from '../Ingredients';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new Ingredients.ThinCrustDough();
  }

  createSauce(): Sauce {
    return new Ingredients.MarinaraSauce();
  }

  createCheese(): Cheese {
    return new Ingredients.ReggianoCheese();
  }

  createVeggies(): Veggies[] {
    const veggies = [
      new Ingredients.Garlic(),
      new Ingredients.Onion(),
      new Ingredients.Mushroom(),
      new Ingredients.RedPepper(),
    ];

    return veggies;
  }

  createPepperoni(): Pepperoni {
    return new Ingredients.SlicedPepperoni();
  }

  createClam(): Clams {
    return new Ingredients.FreshClams();
  }
}
