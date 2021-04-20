import { Pizza } from '../Pizza';
import { PizzaStore } from '../PizzaStore';
import { CheesePizza } from '../subclasses/CheesePizza';
import { VeggiePizza } from '../subclasses/VeggiePizza';
import { ClamPizza } from '../subclasses/ClamPizza';
import { PepperoniPizza } from '../subclasses/PepperoniPizza';
import { CaliforniaPizzaIngredientFactory } from './CaliforniaPizzaIngredientFactory';

export class CaliforniaPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    const ingredientFactory: PizzaIngredientFactory = new CaliforniaPizzaIngredientFactory();
    let pizza!: Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('California Style Cheese Pizza');
    } else if (type === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('California Style Veggie Pizza');
    } else if (type === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('California Style Clam Pizza');
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('California Style Pepperoni Pizza');
    }

    return pizza;
  }
}
