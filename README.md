Ember CLI Inject Fingerprinting
==============================================================================

An alternative addon to include fingerprinted asset paths in an Ember application for when you require to dynamically concatenated paths.

It's focus is on a couple of simple use cases, a service with a method which returns the fingerprinted path and a template helper which does the same directly.

Current functionality
------------------------------------------------------------------------------

- [x] Service with method to retrieve fingerprinted path
- [x] Template helper for convenience
- [x] Injects the fingerprinting in HTML document using meta tag
- [x] Works with Fastboot
- [x] Passing tests (including Fastboot)

To do
------------------------------------------------------------------------------

- [ ] Work with a fingerprinted generated asset map
- [ ] Allow customising asset types in options
- [ ] Get the host in the Fastboot application initializer automatically


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-inject-fingerprinting
```


Usage
------------------------------------------------------------------------------

It works by creating a meta tag in the head of the `index.html` document which includes url encoded key/value pairs of all the assets, in a similar way to how the config is included.

How this meta tag is read depends on whether it is rendered by the browser or via Node.js with Fastboot.

An initializer does this, depending on scenario, and sets a variable in the service

- Browser: just gets the element directly from `document`
- Fastboot: first uses `jsdom` to render the page as HTML nodes to allow access to `document` with `meta` tags

For that reason there is a need to set the host for production explicity, like this:

```js
...
if (environment === 'production') {
  ENV.injectFingerprinting.host = 'http://your.domain'
}
...
```



Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/chrism/ember-cli-inject-fingerprinting.git`
* `cd ember-cli-inject-fingerprinting`
* `yarn install`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
