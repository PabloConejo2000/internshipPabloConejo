import Component from '@glimmer/component';
//EXPORTANDO DECORDAORES
import { action } from '@ember/object';



export default class RentalImageComponent extends Component {


  @action
  toggleSize() {
    this.args.toggleImage();

  }


}
