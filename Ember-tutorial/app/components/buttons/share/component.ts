import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Component from '@glimmer/component';

const TWEET_INTENT: string = 'https://twitter.com/intent/tweet';


interface ShareComponentArgs {
  text: string;
  hashtags: Array<string[]>;
  via: string;

}

export default class ShareComponent extends Component<ShareComponentArgs> {
  @service
  router?: Route;

  get currentURL() {
    return new URL(this.router?.currentURL, window.location.origin);
  }


  get shareURL() {

    let url: URL = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL.toString());

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags.toString());
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via);
    }

    return url;
  }
}
