const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

{
  plugins: [ new UglifyJSPlugin() ]
}

switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;

  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev');
}
