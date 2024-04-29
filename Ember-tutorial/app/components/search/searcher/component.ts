import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface SearcherComponentArgs {
  query: string;
}

export default class SearcherComponent extends Component<SearcherComponentArgs> {
  @tracked
  query = '';
}