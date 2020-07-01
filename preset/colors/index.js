import unprocessedColors from './index.scss';

const parsedColors = Object.entries(unprocessedColors).reduce((obj, [key, value]) => {
  if (key.match(/-/) && !key.match(/text-/)) {
    let [color, subKey] = key.split("-")
    let colorObj = obj[color] || {}

    return {
      ...obj,
      [color]: { ...colorObj, [subKey]: value }
    }
  }
  return obj
}, {})

export default parsedColors
