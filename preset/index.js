// preset/index.js

require('./overrides.scss')

const storyparkColors = require('./colors/index').default;
const textColors = require('./colors/text.scss');

const preset = {
  theme: {
    dark: false,
    themes: {
      light: {
        ...storyparkColors,
        primary: storyparkColors.teal,
        error: storyparkColors.red,
        background: storyparkColors.grey.lighten4,
        defaultFont: textColors.textPrimary,
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
}

module.exports = { preset }
