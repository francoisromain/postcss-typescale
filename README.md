# postcss-typescale

[![npm version][npm-img]][npm] [![Build Status][ci-img]][ci] [![Dependency Status][dep-img]][dep]

[francoisromain.github.io/postcss-typescale][github.io]

A [PostCSS] plugin to set type based on a [typographic scale](http://type-scale.com).

[github.io]: http://francoisromain.github.io/postcss-typescale
[PostCSS]:   https://github.com/postcss/postcss
[ci-img]:    https://travis-ci.org/francoisromain/postcss-typescale.svg
[ci]:        https://travis-ci.org/francoisromain/postcss-typescale
[npm-img]:   https://badge.fury.io/js/postcss-typescale.svg
[npm]:       https://badge.fury.io/js/postcss-typescale
[dep-img]:   https://david-dm.org/francoisromain/postcss-typescale.svg
[dep]:       https://david-dm.org/francoisromain/postcss-typescale


* * * 

## Examples

``` css
@typescale {
  scale: 1.25;
  font-size: 1rem;
  line-height: 1.5rem;
}

.xxl {
  typescale: 3 2;
}

.xl {
  typescale: 2 1.5;
}

.l {
  typescale: 1 1.5;
}

.m {
  typescale: 0 1;
}

.s {
  typescale: -1 1;
}

.xs {
  typescale: -2 0.5;
}
```

01: [input](https://github.com/francoisromain/postcss-typescale/blob/gh-pages/test/src/01.css), [output](https://github.com/francoisromain/postcss-typescale/blob/gh-pages/test/dist/01.css), [markup](https://github.com/francoisromain/postcss-typescale/blob/gh-pages/test/01.html), [demo](https://francoisromain.github.io/postcss-typescale/test/01.html)

02: [input](https://github.com/francoisromain/postcss-typescale/blob/gh-pages/test/src/02.css), [output](https://github.com/francoisromain/postcss-typescale/blob/gh-pages/test/dist/02.css), [markup](https://github.com/francoisromain/postcss-typescale/blob/gh-pages/test/02.html), [demo](https://francoisromain.github.io/postcss-typescale/test/02.html)

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
  scale: 1.25;          /* Typographic scale */
  font-size: 1rem;      /* Default font size */
  line-height: 1.5rem;  /* Baseline grid */
}
```

- _name_ (optional): custom identifier. If no _name_ is provided, the default settings are overwritten.

The line-height can be relative to the font-size if _line-height_ is set to 1 without unit.

* * * 

## Usage

`typescale: ([name]) [index] ([line-height-fraction])`

- _name_ (optional, default = _default_): string identifier referring to an atRule settings.
- _index_: positive or negative integer defining the font-size. font-size = _settings font-size_ * _scale_ <sup>_index_</sup>.
- _line-height-fraction_ (optional, default = 1): float or fraction defining the line-height. line-height = _settings line-height_ * _line-height-fraction_.


