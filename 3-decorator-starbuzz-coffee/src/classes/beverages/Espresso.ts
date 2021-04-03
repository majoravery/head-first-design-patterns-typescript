import { Beverage } from '../../interfaces/Beverage';

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }

  cost(): number {
    return 1.99;
  }
}
