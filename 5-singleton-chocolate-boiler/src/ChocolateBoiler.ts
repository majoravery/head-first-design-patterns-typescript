export class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;

  private static chocolateBoiler: ChocolateBoiler;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler {
    if (!this.chocolateBoiler) {
      // Lazy instantiation
      this.chocolateBoiler = new ChocolateBoiler();
    }

    return this.chocolateBoiler;
  }

  public fill(): void {
    if (!this.isEmpty()) {
      return;
    }

    this.empty = false;
    this.boiled = false;
    console.log('Filling chocolate boiler...');
  }

  public drain(): void {
    if (this.isEmpty()) {
      return;
    }

    this.empty = true;
    this.boiled = false;
    console.log('Draining chocolate boiler...');
  }

  public boil(): void {
    if (this.isEmpty()) {
      return;
    }

    this.boiled = true;
    console.log('Boiling chocolate boiler...');
  }

  public isEmpty(): boolean {
    return this.empty;
  }

  public isBoiled(): boolean {
    return this.boiled;
  }
}
