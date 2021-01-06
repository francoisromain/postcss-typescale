export default (options, { decl }) => [
  decl({
    prop: 'font-size',
    value: `calc(${parseFloat(options.scale) ** parseFloat(options.index)} * ${
      options.fontSize
    })`,
  }),
  decl({
    prop: 'line-height',
    value: `calc(${options.lineHeightFraction} * ${options.lineHeight})`,
  }),
];
