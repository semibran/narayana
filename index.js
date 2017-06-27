var choose = require('choose')

module.exports = function narayana(n, k) {
  return (1 / n) * choose(n, k) * choose(n, k - 1)
}
