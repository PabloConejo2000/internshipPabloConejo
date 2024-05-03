import Component from '@glimmer/component';
import RentalModel from 'my-app/models/rental';


interface FilterComponentArgs {
  query: string;

  rentals: Array<RentalModel>;

}



export default class FilterComponent extends Component<FilterComponentArgs> {
  get results(): Array<RentalModel> {
    let { query } = this.args;
    let rentals = this.args.rentals;


    if (query) {
      rentals = rentals.filter((rental: RentalModel) => rental.title.toLowerCase().includes(query.toLowerCase()));
    }

    return rentals;
  }
}