import Model, { attr } from '@ember-data/model';

interface DogModelArgs {

}


export default class DogModel extends Model {
    @attr
    declare message: string;
    @attr
    declare status: string;

}