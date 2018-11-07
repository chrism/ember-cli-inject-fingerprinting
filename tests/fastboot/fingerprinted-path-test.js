import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | fingerprinted path', function(hooks) {
  setup(hooks);

  test('check fingerprinted path matches template path', async function(assert) {
    await visit('/');

    const referencePath = '/assets/tomster-under-construction-da524c8bc9283f759ae640b68db81f24.png';

    assert.dom('#title').hasText('Ember CLI Inject Fingerprinting');
    assert.dom('#tomster-reference').hasAttribute('src', referencePath);
    assert.dom('#tomster-helper').hasAttribute('src', referencePath);
    assert.dom('#tomster-computed').hasAttribute('src', referencePath);
  });

});
