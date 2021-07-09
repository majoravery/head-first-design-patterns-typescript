import Coffee from './Coffee';
import Tea from './Tea';

class BeverageTestDrive {
  constructor() {
    const tea = new Tea();
    const coffee = new Coffee();

    console.log('Making tea...');
    tea.prepareRecipe();

    console.log('\n');

    console.log('Making coffee...');
    coffee.prepareRecipe();
  }
}

new BeverageTestDrive();
