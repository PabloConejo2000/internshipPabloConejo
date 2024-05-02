import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface DetailedComponentArgs {
  toggleImage: (a: boolean, b: boolean) => void;
  query: string;
  isSmall: boolean;
}

export default class DetailedComponent extends Component<DetailedComponentArgs> {
  @tracked
  query = '';

  @tracked
  isSmall = true;

  @action
  toggleImage() {
    this.isSmall = !this.isSmall;
  }
}