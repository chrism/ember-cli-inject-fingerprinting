import injectFingerprinting from '../services/inject-fingerprinting';

export function initialize(/*application*/) {
  if (typeof FastBoot === 'undefined') {
    let content = document.querySelector("meta[name='ember-cli-inject-fingerprinting:assetMap']").content;
    let contentJson = JSON.parse(decodeURIComponent(content));

    injectFingerprinting.reopen({ assets: contentJson });
  }
}

export default {
  initialize
};
