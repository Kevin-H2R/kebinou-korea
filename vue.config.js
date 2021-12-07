require = require('esm')(module);
const { routes } = require('./src/router/routes.js');

module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    sitemap: {
      baseURL: 'https://kebinou.com',
      routes,
    }
  }
}
