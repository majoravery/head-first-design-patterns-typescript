import { Pizza } from './Pizza';

export abstract class PizzaStore {
  abstract createPizza(type: string): Pizza;

  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}
