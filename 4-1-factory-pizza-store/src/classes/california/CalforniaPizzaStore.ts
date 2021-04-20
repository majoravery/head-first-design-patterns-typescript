import { Pizza } from '../Pizza';
import { PizzaStore } from '../PizzaStore';
import { CaliforniaStyleCheesePizza } from './CaliforniaStyleCheesePizza';
import { CaliforniaStyleVeggiePizza } from './CaliforniaStyleVeggiePizza';
import { CaliforniaStyleClamPizza } from './CaliforniaStyleClamPizza';
import { CaliforniaStylePepperoniPizza } from './CaliforniaStylePepperoniPizza';

export class CaliforniaPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza!: Pizza;

    if (type === 'cheese') {
      pizza = new CaliforniaStyleCheesePizza();
    } else if (type === 'veggie') {
      pizza = new CaliforniaStyleVeggiePizza();
    } else if (type === 'clam') {
      pizza = new CaliforniaStyleClamPizza();
    } else if (type === 'pepperoni') {
      pizza = new CaliforniaStylePepperoniPizza();
    }

    return pizza;
  }
}
