const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');
const { join } = require('path');
const { cwd } = require('process');

/**
 * This file holds all the shared config options
 * The rest of the files will extend options
 * More information about the config can be found
 * here https://webdriver.io/docs/configurationfile.html
 */
exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  // ==================
  // Specify Test Files
  // ==================
  specs: [join(cwd(), './test/features/sample.feature')],
  // ============
  // Capabilities
  // ============
  maxInstances: 100,
  // capabilities can be found in the `wdio.local.chrome.conf.js` or `wdio.saucelabs.conf.js`
  // ===================
  // Test Configurations
  // ===================
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  // Added the `cucumberjs-json`, see
  // https://github.com/wswebcreation/wdio-cucumberjs-json-reporter
  reporters: [
    'spec', 
    // 'cucumberjs-json'
  ],
  // If you are using Cucumber you need to specify the location of your step definitions.
  // See https://webdriver.io/docs/frameworks.html#using-cucumber for more information about the properties
  cucumberOpts: {
    require: [join(cwd(), './test/step-definitions/*.steps.js')],
    backtrace: false,
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  // ========
  // Services
  // ========
  services: [],

  // =====
  // Hooks
  // =====
  // onPrepare: () => {
  //   // Remove the `.tmp/` folder that holds the json and report files
  //   removeSync('.tmp/');
  // },
  // onComplete: () => {
  //   // Generate the report when it all tests are done
  //   generate({
  //     // Required
  //     // This part needs to be the same path where you store the JSON files
  //     // default = '.tmp/json/'
  //     jsonDir: '.tmp/json/',
  //     reportPath: '.tmp/report/',
  //     // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
  //   });
  // },
  // //   onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // //     console.log('////////////////////onWorkerStart////////////////////');
  // //     //   console.log('////////////////////////////////////////////////');
  // //     //   console.log('caps = ', caps);
  // //     //   console.log('specs = ', specs);
  // //     //   console.log('args = ', args);
  // //     //   console.log('execArgv = ', execArgv);
  // //     //   console.log('////////////////////////////////////////////////');
  // //   },
  // beforeSession: function (config, capabilities, specs) {
  //   console.log('////////////////////beforeSession////////////////////');
  //   console.log('config = ', config);
  //   console.log('capabilities = ', capabilities);
  //   console.log('specs = ', specs);
  //   // Get the feature file
  //   const { readFileSync } = require('fs');
  //   const featureData = readFileSync(specs[0], 'utf8');
  //   // console.log('featureData = ', featureData);
  //   try {
  //     // Now parse the feature file so we can get the tags
  //     var Gherkin = require('@cucumber/gherkin');
  //     var Messages = require('@cucumber/messages');
  //     var uuidFn = Messages.IdGenerator.uuid();
  //     var builder = new Gherkin.AstBuilder(uuidFn);
  //     var matcher = new Gherkin.GherkinClassicTokenMatcher(); // or Gherkin.GherkinInMarkdownTokenMatcher()

  //     var parser = new Gherkin.Parser(builder, matcher);
  //     var gherkinDocument = parser.parse(featureData);
  //     //   console.log(
  //     //     'gherkinDocument = ',
  //     //     JSON.stringify(gherkinDocument, null, 2)
  //     //   );
  //     //   console.log('findTags(gherkinDocument) =', findTags(gherkinDocument));
  //     var pickles = Gherkin.compile(gherkinDocument, specs[0], uuidFn);
  //     // console.log('pickles = ', JSON.stringify(pickles, null, 2));
  //     const tags = findTags(pickles);
  //     console.log('tags =', tags);
  //     capabilities['sauce:options'] = { tags };
  //     // capabilities['sauce:options'].tags = tags;

  //     console.log('capabilities = ', capabilities);
  //   } catch (e) {
  //     console.log('e = ', e);
  //   }

  //   // console.log('////////////////////////////////////////////////');
  // },
  // //   beforeFeature: function (uri, feature) {
  // //     console.log('////////////////////beforeFeature////////////////////');
  // //     console.log('uri = ', uri);
  // //     console.log('feature = ', feature);
  // //     console.log('////////////////////////////////////////////////');
  // //   },
};

function findTags(obj) {
  // Create and return a new array of tags that have unique values
  return [...new Set(findTagsHelper(obj, []))];
}

function findTagsHelper(obj, list) {
  const key = 'tags';
  if (!obj) return list;
  if (obj instanceof Array) {
    for (var i in obj) {
      list = list.concat(findTagsHelper(obj[i], []));
    }
    return list;
  }
  if (obj[key]) {
    for (var i in obj[key]) {
      if (!list.includes(obj[key][i].name)) {
        list.push(obj[key][i].name);
      }
    }
  }

  if (typeof obj == 'object' && obj !== null) {
    var children = Object.keys(obj);
    if (children.length > 0) {
      for (i = 0; i < children.length; i++) {
        list = list.concat(findTagsHelper(obj[children[i]], []));
      }
    }
  }
  return list;
}
