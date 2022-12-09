const {config} = require('./wdio.shared.conf');

// ============
// Capabilities
// ============
config.capabilities = [
    // Chrome example
    {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
            ],
        },
        'cjson:metadata': {
            device: 'MacBook Pro 15',
            platform: {
                name: 'Linux',
                version: '1.2.3.4'
            }
        },

    },
    // {
    //     "browserName": "chrome",
    //     "goog:chromeOptions": {
    //         mobileEmulation: { deviceName: "iPhone X" },
    //         args: ["--window-size=375,812"]
    //     },
    //     'cjson:metadata': {
    //         device: 'Emulated iPhone X',
    //         platform: {
    //             name: 'Linux',
    //             version: 'window-size=375,812'
    //         }
    //     },
    // },
    // {
    //     "browserName": "chrome",
    //     "goog:chromeOptions": {
    //         mobileEmulation: { deviceName: "iPhone 6" },
    //         args: ["--window-size=375,667"]
    //     },
    //     'cjson:metadata': {
    //         device: 'Emulated iPhone 6',
    //         platform: {
    //             name: 'Linux',
    //             version: 'window-size=375,667'
    //         }
    //     },
    // },
    // {
    //     "browserName": "chrome",
    //     "goog:chromeOptions": {
    //         mobileEmulation: { deviceName: "Galaxy S5" },
    //         args: ["--window-size=360,640"]
    //     },
    //     'cjson:metadata': {
    //         device: 'Emulated Galaxy S5',
    //         platform: {
    //             name: 'Linux',
    //             version: 'window-size=360,640'
    //         }
    //     },
    // }
];
config.services = config.services.concat('chromedriver');

exports.config = config;





