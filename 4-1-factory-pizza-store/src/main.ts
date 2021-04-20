import { ChicagoPizzaStore } from './classes/chicago/ChicagoPizzaStore';
import { NYPizzaStore } from './classes/ny/NYPizzaStore';

class PizzaTestDrive {
  constructor() {
    const nyStore = new NYPizzaStore();
    const chicagoStore = new ChicagoPizzaStore();

    const ethanPizza = nyStore.orderPizza('cheese');
    console.log('Ethan ordered a', ethanPizza.getName());

    console.log('\n');

    const joelPizza = chicagoStore.orderPizza('pepperoni');
    console.log('Ethan ordered a', joelPizza.getName());
  }
}

new PizzaTestDrive();
