if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  module.exports = require('./dist/float-number-calc.min.js')
} else {
  // eslint-disable-next-line global-require
  module.exports = require('./dist/float-number-calc.js')
}
