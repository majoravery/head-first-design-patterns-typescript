import { Beverage, Size } from '../../interfaces/Beverage';
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
    let condimentCost = 0.1;
    switch (this.beverage.getSize()) {
      case Size.Tall:
        condimentCost = 0.1;
        break;
      case Size.Venti:
        condimentCost = 0.15;
        break;
      case Size.Grande:
        condimentCost = 0.2;
        break;
    }

    return this.beverage.cost() + condimentCost;
  }
}
