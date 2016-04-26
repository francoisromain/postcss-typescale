import postcss from 'postcss';

export default (rule, options) => {
  const lineHeightA = options.lineHeightFraction.split('/');
  const lineHeightFraction = lineHeightA[1] ? lineHeightA[0] / lineHeightA[1] : lineHeightA[0];
  const lineHeightdefault = parseFloat(options.lineHeight, 10);
  const lineHeightUnit = options.lineHeight.replace(/[0-9]|\./g, '');
  const lineHeight = lineHeightdefault * lineHeightFraction;
  const fontSizeValue = parseFloat(options.fontSize, 10);
  const fontSizeUnit = options.fontSize.replace(/[0-9]|\./g, '');
  const fontSize = fontSizeValue * Math.pow(parseFloat(options.scale), parseFloat(options.index));

  const declNew = [
    postcss.decl({ prop: 'font-size', value: fontSize + fontSizeUnit }),
    postcss.decl({ prop: 'line-height', value: lineHeight + lineHeightUnit }),
  ];

  rule.replaceWith(declNew);
};
