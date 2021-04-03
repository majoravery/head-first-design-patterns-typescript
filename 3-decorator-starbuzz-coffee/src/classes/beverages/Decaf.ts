import { Beverage } from '../../interfaces/Beverage';

export class Decaf extends Beverage {
  constructor() {
    super();
    this.description = 'Decaf';
  }

  cost(): number {
    return 1.05;
  }
}
