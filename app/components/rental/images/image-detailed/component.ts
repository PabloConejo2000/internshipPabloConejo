import Component from '@glimmer/component';
//EXPORTANDO DECORDAORES
import { action } from '@ember/object';


//interface RentalImageComponentArgs {
//toggleImage:(a:string ,b:number) => void;
//variable: string;
//toggleImage: () => void
//}

interface ImageDetailedComponentArgs {
  toggleImage: (a: string, b: number) => void;
}



export default class ImageDetailedComponent extends Component<ImageDetailedComponentArgs> {


  @action
  toggleSize() {
    this.args.toggleImage();

  }



}
