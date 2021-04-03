import { Beverage } from '../../interfaces/Beverage';
import { CondimentDecorator } from '../../interfaces/CondimentDecorator';

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
