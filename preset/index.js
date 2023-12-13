// preset/index.js

require('./overrides.scss');
require('./spml.scss');

const storyparkColors = require('./colors/index').default;

const preset = {
  theme: {
    dark: false,
    themes: {
      light: {
        ...storyparkColors,
        primary: storyparkColors.teal,
        error: storyparkColors.red,
        background: storyparkColors.grey.lighten4,
      },
    },
  },
  icons: {
    iconfont: 'fa4',
  },
}

module.exports = { preset }
