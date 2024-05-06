import Component from '@glimmer/component';
import { action } from '@ember/object';
export { modifier } from '@ember/render-modifiers/modifiers/did-insert';

import { tracked } from '@glimmer/tracking';

interface DogComponentArgs {


}
export default class DogComponent extends Component<DogComponentArgs> {
    //esta es la variable que tiene que ser tracked la cual se utiliza para guardar la url que va a imprimir la imagen dentro de img
    @tracked
    dogImage = '';


    //esta variable guarda el estado para ver cual de las dos imagenes renderizar
    @tracked
    dogImageStated = '';

    // actualización de estado, SIEMPRE TIENE DOS PARAMETROS
    //el primero parametro de la función es un element de tipo
    // "HTMLImageElement" y el segundo es un String  que es el estado que dfinimos anteriormente
    //segun tenga un estado y otro llamo a la funcion de getRandomDog o a la de getBoxerDog
    @action
    async updateDog(element: HTMLImageElement, dogImageStated: string) {
        if (this.dogImageStated === 'dog') {
            await this.getRandomDog();
        } else if (this.dogImageStated === 'boxer') {
            await this.getBoxerDog();
        }
    }

    //esta funcion es muy simple solo hace que el estado de la variable dogState 
    //IMORTANTE se le pasan dos parametros 1: el valor que quiero cambiar y 2: event de tipo Event
    @action
    changeDogState(dogType: string, event: Event) {
        //debugger
        this.dogImageStated = dogType;

    }

    //esta función sirve para hacer un fetch en el endpoint guardar la respuesta en data y asignarle a "dogImage" lo que hay en el atributo "message" del json
    @action
    async getRandomDog() {
        try {
            const response = await fetch(' https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            this.dogImage = data.message;
        } catch (error) { //si sale mal salta error
            console.error('The image couldnt be found', error)
        }
    }
    //lo mismo que arriba pero con otro endpoint
    @action
    async getBoxerDog() {
        try {
            const response = await fetch('https://dog.ceo/api/breed/boxer/images/random');
            const data = await response.json();
            this.dogImage = data.message;
        } catch (error) {
            console.error('The image couldnt be found', error)
        }
    }










}



