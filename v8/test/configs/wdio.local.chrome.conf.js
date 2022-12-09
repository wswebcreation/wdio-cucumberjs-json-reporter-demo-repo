const { config } = require('./wdio.shared.conf');

// ============
// Capabilities
// ============
config.capabilities = [
  // Chrome example
  {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--no-sandbox', '--disable-infobars', '--headless'],
    },
    'cjson:metadata': {
      device: 'Test Device',
      browser: {
        name: 'safari',
        version: '14.1',
      },
      platform: {
        name: 'ios',
        version: '14',
      },
    },
  },
];
config.services = config.services.concat('chromedriver');

exports.config = config;
