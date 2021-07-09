export default abstract class CaffeineBeverage {
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  boilWater(): void {
    console.log('Boiling water');
  }

  pourInCup(): void {
    console.log('Pouring into cup');
  }

  abstract brew(): void;

  abstract addCondiments(): void;

  customerWantsCondiments(): boolean {
    return true;
  }
}
