import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export { modifier } from '@ember/render-modifiers/modifiers/did-insert';

enum Colors {
    BLUE = 'blue',
    GREEN = 'green',
    YELLOW = 'yellow',

}



export default class MyFormComponet extends Component {
    @tracked
    email = '';

    @tracked
    color = '';

    @tracked
    magicState = '';

    @tracked
    text = '';

    get disableSubmit() {
        // Los dos campos tienen que estar completos sino no envio el formulario
        return !this.email.length || !this.color.length;
    }

    @action
    async onSubmit(event: Event) {
        event.preventDefault();
        this.magicState = "enviado";


    }

    @action
    async writeData(magicState: string) {
        //debugger
        if (this.magicState === 'enviado') {
            this.text = this.email.concat(this.color);
        } else {
            this.text = 'If you dont submit anything you cant see anything';

        }

    }


}