import { Pizza } from '../Pizza';
import { PizzaStore } from '../PizzaStore';
import { NYStyleCheesePizza } from './NYStyleCheesePizza';
import { NYStyleVeggiePizza } from './NYStyleVeggiePizza';
import { NYStyleClamPizza } from './NYStyleClamPizza';
import { NYStylePepperoniPizza } from './NYStylePepperoniPizza';

export class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza!: Pizza;

    if (type === 'cheese') {
      pizza = new NYStyleCheesePizza();
    } else if (type === 'veggie') {
      pizza = new NYStyleVeggiePizza();
    } else if (type === 'clam') {
      pizza = new NYStyleClamPizza();
    } else if (type === 'pepperoni') {
      pizza = new NYStylePepperoniPizza();
    }

    return pizza;
  }
}
