import CaffeineBeverage from './CaffeineBeverage';
import * as prompt from 'prompt-sync';

const promptConfig = {};

export default class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log('Dripping coffee through filter');
  }

  addCondiments(): void {
    console.log('Adding sugar and milk');
  }

  customerWantsCondiments(): boolean {
    const answer = this.getUserInput();

    return answer.toLowerCase().startsWith('y');
  }

  getUserInput(): string {
    const answer = prompt(promptConfig)(
      'Would you like milk and sugar with your coffee (y/n)? '
    );

    if (!answer.length) {
      return 'no';
    }

    return answer;
  }
}
