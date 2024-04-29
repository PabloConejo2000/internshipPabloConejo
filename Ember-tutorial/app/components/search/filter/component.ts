import Component from '@glimmer/component';


interface FilterComponentArgs {
  query: string;
  rentals: any[];

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