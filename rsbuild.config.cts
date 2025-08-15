/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { defineConfig } = require('@rsbuild/core');
const { pluginSass } = require('@rsbuild/plugin-sass');
const { pluginSvgr } = require('@rsbuild/plugin-svgr');
const { pluginReact } = require('@rsbuild/plugin-react');

module.exports = defineConfig({
  html: {
    template: './public/index.html'
  },
  tools: {
    htmlPlugin: (options) => {
      options.title = 'Game';
    }
  },
  source: {
    entry: {
      index: './src/index.tsx'
    }
  },
  output: {
    distPath: {
      root: 'build'
    },
    cssModules: {
      localIdentName: '[hash:8]_[local]'
    }
  },
  plugins: [
    pluginSass(),
    pluginSvgr({
      svgrOptions: {
        exportType: 'named',
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            }
          ]
        }
      }
    }),
    pluginReact()
  ]
});
