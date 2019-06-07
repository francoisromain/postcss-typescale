import postcss from 'postcss';

export default (rule, options) => {
  const declNew = [
    postcss.decl({
      prop: 'font-size',
      value: `calc(${parseFloat(options.scale) ** parseFloat(options.index)} * ${
        options.fontSize
      })`,
    }),
    postcss.decl({
      prop: 'line-height',
      value: `calc(${options.lineHeightFraction} * ${options.lineHeight})`,
    }),
  ];

  rule.replaceWith(declNew);
};
