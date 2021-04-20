import { Pizza } from '../Pizza';
import { PizzaStore } from '../PizzaStore';
import { ChicagoStyleCheesePizza } from './ChicagoStyleCheesePizza';
import { ChicagoStyleVeggiePizza } from './ChicagoStyleVeggiePizza';
import { ChicagoStyleClamPizza } from './ChicagoStyleClamPizza';
import { ChicagoStylePepperoniPizza } from './ChicagoStylePepperoniPizza';

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza!: Pizza;

    if (type === 'cheese') {
      pizza = new ChicagoStyleCheesePizza();
    } else if (type === 'veggie') {
      pizza = new ChicagoStyleVeggiePizza();
    } else if (type === 'clam') {
      pizza = new ChicagoStyleClamPizza();
    } else if (type === 'pepperoni') {
      pizza = new ChicagoStylePepperoniPizza();
    }

    return pizza;
  }
}
