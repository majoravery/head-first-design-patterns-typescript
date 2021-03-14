export interface QuackBehaviour {
  quack(): void;
}

export class Quack implements QuackBehaviour {
  quack(): void {
    console.log('Quack');
  }
}

export class MuteQuack implements QuackBehaviour {
  quack(): void {
    console.log('<< Silence >>');
  }
}

export class Squeak implements QuackBehaviour {
  quack(): void {
    console.log('Squeak');
  }
}
