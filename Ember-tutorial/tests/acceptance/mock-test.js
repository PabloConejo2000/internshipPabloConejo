import { module, test } from 'qunit';

import { click, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'super-rentals/tests/helpers';

module('Acceptance | super rentals', function (hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function (assert) {
        await visit('/');

        assert.strictEqual(currentURL(), '/');



    });


});
