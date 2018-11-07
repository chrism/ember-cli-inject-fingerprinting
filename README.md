Ember CLI Inject Fingerprinting
==============================================================================

Current functionality
------------------------------------------------------------------------------

- [x] Service with method to retrieve fingerprinted path
- [x] Template helper for convenience
- [x] Injects the fingerprinting in HTML document using meta tag
- [x] Works with Fastboot
- [x] Passing tests (including Fastboot)

Still to do
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

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
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
