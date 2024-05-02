import Route from '@ember/routing/route';
import Store from '@ember-data/store'
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {

  @service
  declare store: Store;
  async model(params: { rental_id: string | number; }) {

    return this.store.findRecord('rental', params.rental_id);
  }

}