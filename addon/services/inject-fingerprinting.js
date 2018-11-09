import { getOwner } from '@ember/application';
import Service from '@ember/service';

export default Service.extend({
  assets: null,
  
  init() {
    this._super(...arguments);

    console.log('assets', this.assets);

    const { rootURL } = getOwner(this).resolveRegistration('config:environment');
    this.rootURL = rootURL;
  },

  fingerprintedPath(assetPath) {
    const assets = this.assets,
          strippedAssetPath = assetPath.replace(/^\//, ""),
          ret = {};

    if (!this.assets) {
      return assetPath;
    }

    Object.keys(assets).forEach(k => {
      const v = assets[k];
      ret[k] = v;
      ret[v] = v;
    });

    const fingerprinted = ret[strippedAssetPath];

    return /^\//.test(assetPath) ? `${this.rootURL}${fingerprinted}` : fingerprinted;
  }
});
