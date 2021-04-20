import { Pizza } from '../Pizza';

export class CaliforniaStyleVeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = 'California Style Veggie Pizza';
    this.dough = 'Californian Dough';
    this.sauce = 'Californian Sauce';
  }
}
