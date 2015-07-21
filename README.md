# inject-inline-style

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]

Inject an object as an inline CSS string.

## Installation

```
npm install inject-inline-style
```

## Usage

``` javascript
var injectStyle = require('inject-inline-style')

var style = injectStyle({
  '.button': {
    color: 'red'
  },
  '.button:hover': {
    color: 'blue'
  }
})

console.log(style) // => ".button{color:red}.button:hover{color:blue}"
```

Which injects the following into the HTML document's `<head>`:

``` html
<style type="text/css">.button{color:red}.button:hover{color:blue}</style>
```

## See also

- [inline-style](https://npmjs.com/package/inline-style)

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/inject-inline-style.svg?style=flat-square
[npm-url]: https://npmjs.com/package/inject-inline-style
[license-img]: http://img.shields.io/npm/l/inject-inline-style.svg?style=flat-square
[license-url]: LICENSE
