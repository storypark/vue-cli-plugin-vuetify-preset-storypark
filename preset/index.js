// preset/index.js

require('./overrides.scss')

const storyparkColors = {
  teal: {
    base: '#00B2D0',
    lighten1: '#93D4E5',
    lighten2: '#B8E4F2',
    lighten3: '#D2F1FA',
    lighten4: '#E8F9FF',
    darken1: '#0084A5',
    darken2: '#075476',
  },
  purple: {
    base: '#8484D1',
    lighten1: '#9F9FE2',
    lighten2: '#BEBEEA',
    lighten3: '#DCDCF4',
    lighten4: '#EAEAF9',
    darken1: '#6161AA',
    darken2: '#433D7C',
  },
  green: {
    base: '#7FC489',
    lighten1: '#A2D992',
    lighten2: '#BEBEEA',
    lighten3: '#D0F4B6',
    lighten4: '#DEF9CE',
    darken1: '#3D8977',
    darken2: '#0D5E58',
  },
  yellow: {
    base: '#FFD55B',
    lighten1: '#FFE579',
    lighten2: '#FFF099',
    lighten3: '#FFF5B8',
    lighten4: '#FFFAD6',
    darken1: '#EDB846',
    darken2: '#D39C29',
  },
  red: {
    base: '#F8546E',
    lighten1: '#FF8798',
    lighten2: '#FFF099',
    lighten3: '#FFC4CD',
    lighten4: '#F9D6DF',
    darken1: '#E63A5C',
    darken2: '#D31C4B',
  },
  orange: {
    base: '#FFA042',
    lighten1: '#FBB566',
    lighten2: '#FDC57E',
    lighten3: '#FED099',
    lighten4: '#FEDDBA',
    darken1: '#F78321',
    darken2: '#E56526',
  },
  grey: {
    base: '#B7C2CB',
    lighten1: '#D1D8DF',
    lighten2: '#E1E6EB',
    lighten3: '#EBEFF4',
    lighten4: '#F1F5F9',
    lighten5: '#F7F9FC',
    darken1: '#9CA7B2',
    darken2: '#808B98',
    darken3: '#687381',
    darken4: '#4E5A67',
    darken5: '#384450',
  },
}

const preset = {
  theme: {
    dark: false,
    themes: {
      light: {
        ...storyparkColors,
        primary: storyparkColors.teal,
        error: storyparkColors.red,
        background: storyparkColors.grey.lighten4,
        defaultFont: '#4B4141', // Also defined in ./variables.scss
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
}

module.exports = { preset }
