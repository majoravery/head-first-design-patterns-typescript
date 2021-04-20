import * as Ingredients from '../Ingredients';

export class CaliforniaPizzaIngredientFactory
  implements PizzaIngredientFactory {
  createDough(): Dough {
    return new Ingredients.VeryThinCrustDough();
  }

  createSauce(): Sauce {
    return new Ingredients.BruschettaSauce();
  }

  createCheese(): Cheese {
    return new Ingredients.GoatCheese();
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
