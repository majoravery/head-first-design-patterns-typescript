import { Pizza } from '../Pizza';

export class CaliforniaStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.name = 'California Style Clam Pizza';
    this.dough = 'Californian Dough';
    this.sauce = 'Californian Sauce';
  }
}
