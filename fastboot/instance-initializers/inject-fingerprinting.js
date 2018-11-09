import { defer } from 'rsvp';

import injectFingerprinting from '../services/inject-fingerprinting';

const jsdom = FastBoot.require('jsdom');
const { JSDOM } = jsdom;

export function initialize(appInstance) {
  const fastboot = appInstance.lookup('service:fastboot');
  const { host, protocol } = fastboot.request;

  const deferred = defer();

  JSDOM.fromURL(`${protocol}${host}/index.html`).then(dom => {
    let content = dom.window.document.querySelector("meta[name='ember-cli-inject-fingerprinting:assetMap']").content;
    let assets = JSON.parse(decodeURIComponent(content));

    injectFingerprinting.reopen({ assets });
    deferred.resolve();
  });

  fastboot.deferRendering(deferred.promise);
}

export default {
  initialize
};
