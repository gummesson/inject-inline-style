/*!
 * Dependencies
 */

var inlineStyle = require('inline-style')
var insertCss = require('insert-css')

/*!
 * Exports
 */

module.exports = injectStyle

/**
 * Inject `obj` as an inline CSS string.
 *
 * @param {Object} obj
 * @return {String}
 */

function injectStyle(obj) {
  if (!obj) return null

  var selectors = Object.keys(obj)
  var styles = []

  selectors.forEach(function(key) {
    var selector = obj[key]
    var style = inlineStyle(selector)
    var inline = key.concat('{').concat(style).concat('}')
    styles.push(inline)
  })

  var results = styles.join('')
  insertCss(results)

  return results
}