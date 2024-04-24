import Component from '@glimmer/component';
//EXPORTANDO DECORDAORES
import { tracked } from '@glimmer/tracking'; //exporto algo que me trackee
import { action } from '@ember/object'; //y exporto algo que haga algo cuando hago una acción

//Si tengo duda con lo que hacen los decoradores ver codigo anterior en la pagina de ember JS!!!
export default class RentalImageComponent extends Component {
  @tracked isSmall = true; //me la trackee al principio en falso
  @action toggleSize() {
    //cuando le de
    this.isSmall = !this.isSmall; //me cambia el estado del boolean de false a ture y de true a false depnde de en que este
  }
}
