import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SearcherComponent extends Component {
  @tracked query = '';
}