import { Pizza } from '../Pizza';

export class CaliforniaStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'California Style Pepperoni Pizza';
    this.dough = 'Californian Dough';
    this.sauce = 'Californian Sauce';
  }
}
