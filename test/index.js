/*!
 * Dependencies
 */

var test = require('tape')
var injectStyle = require('../')

/*!
 * Tests
 */

test('injectStyle([obj])', function(t) {
  t.test('injectStyle()', function(assert) {
    var style = injectStyle()
    assert.equal(style, '')
    assert.end()
  })

  t.test('injectStyle(obj)', function(assert) {
    var obj = {
      '.button': {
        backgroundColor: 'red',
        color: 'white'
      },
      '.button:hover': {
        backgroundColor: 'blue',
        color: 'white'
      }
    }

    var style = injectStyle(obj)
    var injected = document.querySelector('style')

    var results = [
      '.button{background-color:red;color:white}',
      '.button:hover{background-color:blue;color:white}'
    ].join('')

    assert.equal(style, results)
    assert.equal(injected.innerHTML, results)
    assert.end()
  })
})
