/**
 * Get specific feature files using the command line flag 'feature'.
 * Returns all features by default. Seperate multiple features with a comma.
 *
 * @example
 * yarn run test --feature=storelocator,search
 */
module.exports = () => {
  const args = require('yargs').argv;

  if (args.feature) {
    return args.feature.split(',').map(feature => {
      return `${process.cwd()}/tests/**/${feature}.feature`;
    });
  }

  return `${process.cwd()}//tests/**/*.feature`;
}
