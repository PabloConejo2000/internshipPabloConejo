import Component from '@glimmer/component';
//EXPORTANDO DECORDAORES
import { action } from '@ember/object';

interface IndexComponentArgs {
  toggleImage: (a: string, b: number) => void;
}

export default class IndexComponent extends Component<IndexComponentArgs> {


  @action
  toggleSize() {
    this.args.toggleImage();

  }


}
