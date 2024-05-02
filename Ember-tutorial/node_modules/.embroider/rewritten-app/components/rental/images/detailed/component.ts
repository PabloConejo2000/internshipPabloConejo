import Component from '@glimmer/component';
//EXPORTANDO DECORDAORES
import { action } from '@ember/object';


//interface RentalImageComponentArgs {
//toggleImage:(a:string ,b:number) => void;
//variable: string;
//toggleImage: () => void
//}

interface DetailedComponentArgs {
  toggleImage: (a: string, b: number) => void;
}



export default class DetailedComponent extends Component<DetailedComponentArgs> {


  @action
  toggleSize() {
    this.args.toggleImage();

  }



}
