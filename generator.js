const {
  updateFile,
  injectGoogleFontLink,
  VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  VuetifyPresetGenerator(api, 'storypark', () => {
    updateFile(api, './public/index.html', lines => {
      const lastLink = lines.reverse().findIndex(line => line.match(/^\s*<\/head>/))
      const typekitLink = 'https://use.typekit.net/pht3rur.js'
      const link1 = `<script src="${typekitLink}"></script>`
      const link2 = '<script>try { Typekit.load({ async: true }); } catch (e) { };</script>'

      if (lines.join('').indexOf(link1) > -1) {
        return lines.reverse()
      }

      lines.splice(lastLink + 1, 0, `    ${link2}`, `    ${link1}`)

      return lines.reverse()
    })
  })
}
