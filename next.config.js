const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack(config, options) {
    return config
  },
  i18n: {
    localeDetection: true,
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
  },
})