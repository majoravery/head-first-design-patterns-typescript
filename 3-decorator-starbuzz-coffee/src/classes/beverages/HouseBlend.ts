import { Beverage } from '../../interfaces/Beverage';

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'House Blend';
  }

  cost(): number {
    return 0.89;
  }
}
