# postcss-typescale

[![npm version][npm-img]][npm] [![Build Status][ci-img]][ci] [![Dependency Status][dep-img]][dep]

[francoisromain.github.io/postcss-typescale][github.io]

A [PostCSS] plugin to set type.

[github.io]: http://francoisromain.github.io/postcss-typescale
[PostCSS]:   https://github.com/postcss/postcss
[ci-img]:    https://travis-ci.org/francoisromain/postcss-typescale.svg
[ci]:        https://travis-ci.org/francoisromain/postcss-typescale
[npm-img]:   https://badge.fury.io/js/postcss-typescale.svg
[npm]:       https://badge.fury.io/js/postcss-typescale
[dep-img]:   https://david-dm.org/francoisromain/postcss-typescale.svg
[dep]:       https://david-dm.org/francoisromain/postcss-typescale


* * * 

## Installation

Install the [npm package](https://www.npmjs.com/package/postcss-typescale):

    $ npm install postcss-typescale --save-dev

Require with PossCSS:

``` js
postcss([ require('postcss-typescale') ])
```

See [PostCSS docs](https://github.com/postcss/postcss#usage) to setup with Gulp, Grunt, Webpack, npm scripts… 

* * * 

### Configuration (optional)

Global settings (and default values):

``` css
@typescale ([name]) {
  scale: 1.25;          /* See type-scale.com to choose a scale */
  font-size: 1rem;      /* default font size */
  line-height: 1.5rem;  /* If no unit is provided, line-height is relative to font-size */
}
```

- _name_ (optional): custom identifier. If no _name_ is provided, the default settings are overwritten.

* * * 

## Usage

`typescale: ([name]) [index] ([line-height-fraction])`

- _name_ (optional, default = _default_): string identifier referring to a settings atRule.
- _index_: positive or negative integer. font-size = _font-size_ * _scale_ <sup>_index_</sup>.
- _line-height-fraction_ (optional, default = 1): float or fraction. line-height = _line-height_ * _line-height-fraction_.

#### Examples

```css
.my-title {
  typescale: 3 1.5;
}

.my-small-text {
  typescale: -1;
}

.my-extra-small-text {
  typescale: -2 0.5;
}
```

[input](https://github.com/francoisromain/postcss-typescale/blob/gh-pages/test/src/01.css), [output](https://github.com/francoisromain/postcss-typescale/blob/gh-pages/test/dist/01.css), [markup](https://github.com/francoisromain/postcss-typescale/blob/gh-pages/test/01.html), [demo](http://localhost/francoisromain.github.io/postcss-typescale/test/01.html)

