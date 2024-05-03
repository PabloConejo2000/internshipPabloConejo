import Component from '@glimmer/component';
import { action } from '@ember/object';
export { modifier } from '@ember/render-modifiers/modifiers/did-insert';

import { tracked } from '@glimmer/tracking';

interface DogComponentArgs {


}
export default class DogComponent extends Component<DogComponentArgs> {
    @tracked
    dogImage: string = '';

    @tracked
    dogImageUpdated = '';

    @action
    async getRandomDog() {
        try {
            const response = await fetch(' https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            this.dogImage = data.message;
        } catch (error) {
            console.error('The image couldnt be found', error)
        }
    }
    @action
    async changeBreedToBoxer() {
        try {
            const response = await fetch('https://dog.ceo/api/breed/boxer/images/random');
            const data = await response.json();
            this.dogImage = data.message;
        } catch (error) {
            console.error('The image couldnt be found', error)
        }
    }

    @action
    async updateDog(element: HTMLImageElement, dogImageUpdated: Array<string>) {
        if (this.dogImageUpdated === 'dog') {
            await this.getRandomDog();
        } else if (this.dogImageUpdated === 'boxer') {
            await this.changeBreedToBoxer();
        }
    }

    @action
    updateDogState(dog: string, event: Event) {
        //debugger
        this.dogImageUpdated = dog;

    }






}




/*!
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { modifier } from '@ember/render-modifiers';
import { set } from '@ember/object'

interface DogComponentArgs {


}
export default class DogComponent extends Component<DogComponentArgs> {

    declare dogImage: string;

    @action
    async getRandomDog() {
        try {
            const response = await fetch(' https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            set(this, 'dogImage', data.message);
        } catch (error) {
            console.error('The image couldnt be found', error)
        }
    }
    @action
    changeBreedToBoxer() {
        this.dogImage = 'https://dog.ceo/api/breed/boxer/images/random';

    }



}

*/



