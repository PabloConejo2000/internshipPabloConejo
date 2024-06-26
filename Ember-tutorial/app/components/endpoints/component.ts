import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export { modifier } from '@ember/render-modifiers/modifiers/did-insert';
// import { worker } from "handlers"
import { rest, setupWorker } from "msw";
export default class MockComponet extends Component {
    @tracked
    buttonState = false;

    @tracked
    dogName = "";

    @tracked
    dogBreed = "";

    @action
    changeButtonState(buttonState: boolean, event: Event) {
        //debugger
        this.buttonState = buttonState;

    }

    @action
    async writeData(buttonState: boolean) {

        if (this.buttonState === true) {
            this.searchDog();

        } else if (this.buttonState === false) {
            this.dogName = "Tobi";
            this.dogBreed = "german";
        }

    }

    @action
    async searchDog() {
        //parte del msw
        const handlers = [
            rest.get('/api/dogName', (req, res, ctx) => {
                // debugger
                return res(ctx.json({
                    name: 'Pipo',
                    breed: 'Boxer',
                }))
            })

        ];

        const worker = setupWorker(...handlers) as any;
        await worker.start({ serviceWorker: { url: 'service-worker.js' } });

        try {
            const response = await fetch('api/dogName');
            const data = await response.json();
            this.dogName = data.name;
            this.dogBreed = data.breed;
        } catch (error) { //si sale mal salta error
            console.error('The image couldnt be found', error)
        }
    }


}





