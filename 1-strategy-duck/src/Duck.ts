import * as Fly from './interfaces/Fly';
import * as Quack from './interfaces/Quack';

abstract class Duck {
  private FlyBehaviour: Fly.FlyBehaviour;
  private QuackBehaviour: Quack.QuackBehaviour;

  constructor(flyBehaviour: Fly.FlyBehaviour, quackBehaviour: Quack.QuackBehaviour) {
    this.FlyBehaviour = flyBehaviour;
    this.QuackBehaviour = quackBehaviour;
  }

  abstract display(): void;

  public performFly(): void {
    this.FlyBehaviour.fly();
  }

  public performQuack(): void {
    this.QuackBehaviour.quack();
  }

  public setFlyBehaviour(fb: Fly.FlyBehaviour): void {
    this.FlyBehaviour = fb;
  }

  public setQuackBehaviour(qb: Quack.QuackBehaviour): void {
    this.QuackBehaviour = qb;
  }

  public swim(): void {
    console.log('All ducks float, even decoys!')
  }
}

export class MallardDuck extends Duck {
  display(): void {
    console.log('I\'m a real Mallard duck');
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super(new Fly.FlyNoWay(), new Quack.Quack());
  }

  display(): void {
    console.log('I\'m a model duck');
  }
}