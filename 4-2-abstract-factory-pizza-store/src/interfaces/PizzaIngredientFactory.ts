type Dough = unknown;
type Sauce = unknown;
type Cheese = unknown;
type Veggies = unknown;
type Pepperoni = unknown;
type Clams = unknown;

interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}
