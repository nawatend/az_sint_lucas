/* global require */
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')


// eslint-disable-next-line no-undef
module.exports = withCSS(withSass())

// next.config.js
// module.exports = {
//     target: 'serverless',
// }