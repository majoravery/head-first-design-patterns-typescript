import { Size } from './interfaces/Beverage';
import { DarkRoast } from './classes/beverages/DarkRoast';
// import { Decaf } from './classes/beverages/Decaf';
import { Espresso } from './classes/beverages/Espresso';
import { HouseBlend } from './classes/beverages/HouseBlend';
import { Mocha } from './classes/condiments/Mocha';
import { Soy } from './classes/condiments/Soy';
// import { SteamedMilk } from './classes/condiments/SteamedMilk';
import { Whip } from './classes/condiments/Whip';

class StarbuzzCoffee {
  constructor() {
    const beverage = new Espresso();
    console.log(`${beverage.getDescription()} ${beverage.cost()}`);

    let beverage2 = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(`${beverage2.getDescription()} ${beverage2.cost()}`);

    let beverage3 = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    console.log(`${beverage3.getDescription()} ${beverage3.cost()}`);

    let beverage4 = new HouseBlend();
    beverage4.setSize(Size.Grande);
    beverage4 = new Soy(beverage4);
    console.log(`${beverage4.getDescription()} ${beverage4.cost()}`);
  }
}

new StarbuzzCoffee();
