import Component from '@glimmer/component';
//EXPORTANDO DECORDAORES
import { action } from '@ember/object';

interface ImageIndexComponentArgs {
  toggleImage: (a: string, b: number) => void;
}

export default class ImageIndexComponent extends Component<ImageIndexComponentArgs> {


  @action
  toggleSize() {
    this.args.toggleImage();

  }


}
