import CaffeineBeverage from './CaffeineBeverage';
import * as prompt from 'prompt-sync';

const promptConfig = {};

export default class Tea extends CaffeineBeverage {
  brew(): void {
    console.log('Steeping the tea');
  }

  addCondiments(): void {
    console.log('Adding lemon');
  }

  customerWantsCondiments(): boolean {
    const answer = this.getUserInput();

    return answer.toLowerCase().startsWith('y');
  }

  getUserInput(): string {
    const answer = prompt(promptConfig)(
      'Would you like lemon with your tea (y/n)? '
    );

    if (!answer.length) {
      return 'no';
    }

    return answer;
  }
}
