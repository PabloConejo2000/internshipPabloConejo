import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface IndexComponentArgs {
  query: string;
  isSmall: boolean;
  toggleImage: (a: boolean, b: boolean) => void;

}

export default class IndexComponent extends Component<IndexComponentArgs> {
  @tracked
  query = '';

  @tracked
  isSmall = true;

  @action
  toggleImage() {
    this.isSmall = !this.isSmall;
  }
}