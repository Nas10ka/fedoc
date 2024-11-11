// styleguide.config.js
const path = require('path');
const reactScriptsWebpackConfig = require('react-scripts/config/webpack.config');

// CRA exports a function for the Webpack config, so we need to call it with 'production' or 'development'
const craWebpackConfig = reactScriptsWebpackConfig('development');

module.exports = {
  title: 'My Component Library',
  components: 'src/components/*.js', // Adjust this path to your components
  webpackConfig: {
    ...craWebpackConfig, // Spread in CRA’s config
    module: {
      rules: [
        ...craWebpackConfig.module.rules, // Use CRA's rules

        // Optionally add more loaders here if needed
      ],
    },
  },
};
