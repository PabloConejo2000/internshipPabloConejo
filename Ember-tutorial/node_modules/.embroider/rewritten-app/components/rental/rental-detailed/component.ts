import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface RentalDetailedComponentArgs {
  toggleImage: (a: boolean, b: boolean) => void;
  query: string;
  isSmall: boolean;
}

export default class RentalDetailedComponent extends Component<RentalDetailedComponentArgs> {
  @tracked
  query = '';

  @tracked
  isSmall = true;

  @action
  toggleImage() {
    this.isSmall = !this.isSmall;
  }
}