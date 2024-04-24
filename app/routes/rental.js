import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {

  @service store;
  async model(params) {

    return this.store.findRecord('rental', params.rental_id);
  }

}