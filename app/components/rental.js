import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalsComponent extends Component {
  @tracked
  query = '';

  @tracked
  isSmall = true;

  @action
  toggleImage() {
    this.isSmall = !this.isSmall;
  }
}