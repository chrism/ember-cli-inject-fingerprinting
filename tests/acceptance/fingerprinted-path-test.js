import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fingerprinted path', function(hooks) {
  setupApplicationTest(hooks);

  test('check fingerprinted path matches template path', async function(assert) {
    await visit('/');

    const referencePath = '/assets/tomster-under-construction-da524c8bc9283f759ae640b68db81f24.png';

    assert.dom('#title').hasText('Ember CLI Inject Fingerprinting');
    assert.dom('#tomster-reference').hasAttribute('src', referencePath);
    assert.dom('#tomster-helper').hasAttribute('src', referencePath);
    assert.dom('#tomster-computed').hasAttribute('src', referencePath);
  });
});
