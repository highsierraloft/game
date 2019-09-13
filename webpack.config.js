const production = require('./webpack.production.config');
const development = require('./webpack.development.config');

module.exports = (env, argv) => {
  return argv.mode === 'development' ? development : production;
};