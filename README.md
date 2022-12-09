# Sample repo with WDIO 6/7/8 for testing `wdio-cucumberjs-json-reporter`

## Steps
- select the WDIO version you want to use by using `cd v{6|7|8}`
- install the dependencies with `npm install`
- for local development make sure you have a local version of the reporter cloned [`wdio-cucumberjs-json-reporter`](https://github.com/webdriverio-community/wdio-cucumberjs-json-reporter)
- open a second terminal for the ``wdio-cucumberjs-json-reporter`, 
  - install those dependencies with `npm i`
  - run `npm run watch`
  - then run `npm link` to link the project
- in the terminal for this sample project run `npm link wdio-cucumberjs-json-reporter`
- run your tests

