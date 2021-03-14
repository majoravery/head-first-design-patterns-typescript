import { MallardDuck, ModelDuck } from './Duck';
import * as Fly from './interfaces/Fly';
import * as Quack from './interfaces/Quack';

class MiniDuckSimulator {
  constructor() {
    const mallard = new MallardDuck(new Fly.FlyWithWings(), new Quack.Quack());
    mallard.display();
    mallard.performFly();
    mallard.performQuack();

    const model = new ModelDuck();
    model.display();
    model.performFly();
    model.setFlyBehaviour(new Fly.FlyRocketPowered());
    model.performFly();
  }
}

new MiniDuckSimulator();
