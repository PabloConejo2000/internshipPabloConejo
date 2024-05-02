import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Store from '@ember-data/store'

interface IndexRouteArgs {

}


export default class IndexRoute extends Route<IndexRouteArgs> {
  @service
  declare store: Store;
  async model() {

    return this.store.findAll('rental');
  }
}
