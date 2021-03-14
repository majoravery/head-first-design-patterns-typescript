export interface FlyBehaviour {
  fly(): void;
}

export class FlyWithWings implements FlyBehaviour {
  fly(): void {
    console.log("I'm flying!");
  }
}

export class FlyNoWay implements FlyBehaviour {
  fly(): void {
    console.log("I can't fly");
  }
}

export class FlyRocketPowered implements FlyBehaviour {
  fly(): void {
    console.log("I'm flying with a rocket!");
  }
}
