import unprocessedColors from './index.scss';

const parsedColors = Object.entries(unprocessedColors).reduce((obj, val) => {
  if (val[0].match(/-/) && !val[0].match(/text-/)) {
    let color = val[0].split("-")[0]
    let key = val[0].split("-")[1]
    let colorObj = obj[color] || {}
    return { ...obj, [color]: { ...colorObj, [key]: val[1] } }
  }
  return obj
}, {})

export default parsedColors
