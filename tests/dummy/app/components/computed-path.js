import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  injectFingerprinting: service(),

  tagName: "img",
  attributeBindings: ['src', 'alt'],
  src: computed('path', function() {
    return this.injectFingerprinting.fingerprintedPath(`${this.path}.png`);
  })
});
