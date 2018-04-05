const argv = require('yargs').argv;
const path = require('path');
const featureFilter = require('./helpers/featureFilter');

/**
 * Protractor config file
 */
exports.config = {
  /**
   * Protractor specific
   */
  allScriptsTimeout: 15000,
  beforeLaunch: () => {
    console.log(
      '+----------------------------------------+\n' +
      '|          Launching protractor          |\n' +
      '+----------------------------------------+'
    );
  },
  directConnect: true,
  disableChecks: true,
  onPrepare: () => {
    let disableAngular = true;
    browser.ignoreSynchronization = disableAngular;
    browser.waitForAngularEnabled(!disableAngular);
  },
  SELENIUM_PROMISE_MANAGER: false,

  /**
   * CucumberJS specific
   */
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    'require-module': 'ts-node/register',
    require: [path.resolve(process.cwd(), './tests/**/*.steps.ts')],
    tags: argv.tags || ''
  },
  specs: featureFilter(),
}
