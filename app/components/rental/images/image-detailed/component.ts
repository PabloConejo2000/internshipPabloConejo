import Component from '@glimmer/component';
//EXPORTANDO DECORDAORES
import { action } from '@ember/object';


//interface RentalImageComponentArgs {
//toggleImage:(a:string ,b:number) => void;
//variable: string;
//toggleImage: () => void
//}



export default class RentalImageComponent extends Component {


  @action
  toggleSize() {
    this.args.toggleImage();

  }



}
