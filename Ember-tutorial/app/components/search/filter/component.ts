import Component from '@glimmer/component';
import RentalModel from 'my-app/models/rental';


interface FilterComponentArgs {
  query: string;

  rentals: Array<RentalModel>;

}



export default class FilterComponent extends Component<FilterComponentArgs> {
  get results() {
    let { rentals, query } = this.args;


    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }

    return rentals;
  }
}