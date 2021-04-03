import { Beverage } from '../../interfaces/Beverage';
import { CondimentDecorator } from '../../interfaces/CondimentDecorator';

export class SteamedMilk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Steamed Milk';
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
