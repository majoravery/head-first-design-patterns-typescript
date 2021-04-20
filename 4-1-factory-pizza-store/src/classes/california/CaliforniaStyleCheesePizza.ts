import { Pizza } from '../Pizza';

export class CaliforniaStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'California Style Sauce and Cheese Pizza';
    this.dough = 'Californian Dough';
    this.sauce = 'Californian Sauce';
  }
}
