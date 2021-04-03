import { Beverage } from '../../interfaces/Beverage';
import { CondimentDecorator } from '../../interfaces/CondimentDecorator';

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Whip';
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
