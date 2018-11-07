import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({
  injectFingerprinting: service(),

  compute(params) {
    return this.injectFingerprinting.fingerprintedPath(params[0]);
  }
});
