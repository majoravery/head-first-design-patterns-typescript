import { Beverage } from '../../interfaces/Beverage';
import { CondimentDecorator } from '../../interfaces/CondimentDecorator';

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Soy';
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
