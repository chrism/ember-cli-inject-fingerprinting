import injectFingerprinting from '../services/inject-fingerprinting';

export function initialize(application) {
  const jsdom = FastBoot.require('jsdom');
  const { JSDOM } = jsdom;

  const config = application.resolveRegistration('config:environment');
  const environment = config.environment;
  const injectConfig = config['injectFingerprinting'];

  let host;

  if (environment === "development") {
    host = (injectConfig && injectConfig.host) ? injectConfig.host : 'http://localhost:4200';
  } else if (environment === "test") {
    host = (injectConfig && injectConfig.host) ? injectConfig.host : 'http://localhost:7357';
  } else if (enviroment === "production" && injectConfig.host ) {
    host = injectConfig.host;
  } else {
    throw new Error('ember-cli-inject-fingerprinting: you must configure the host for production, see documentation');
  }

  application.deferReadiness();

  JSDOM.fromURL(`${host}/index.html`)
    .then(dom => {
      let content = dom.window.document.querySelector("meta[name='ember-cli-inject-fingerprinting:assetMap']").content;
      let contentJson = JSON.parse(decodeURIComponent(content));

      injectFingerprinting.reopen({ assets: contentJson });
    })
    .finally(() => {
      application.advanceReadiness();
    });
}

export default { initialize };
