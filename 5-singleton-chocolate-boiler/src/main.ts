import { ChocolateBoiler } from './ChocolateBoiler';

class ChocolateFactory {
  constructor() {
    const chocolateBoiler = ChocolateBoiler.getInstance();
    chocolateBoiler.fill();
    chocolateBoiler.boil();
    chocolateBoiler.drain();
  }
}

new ChocolateFactory();
