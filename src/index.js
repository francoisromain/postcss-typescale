import typescale from './typescale';

module.exports = (opts) => {
  const options = {
    default: {
      scale: '1.25',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      lineHeightFraction: '1',
      index: '1',
    },
  };

  Object.assign(options.default, opts);

  return {
    postcssPlugin: 'postcss-typescale',
    AtRule(node) {
      if (node.name.match(/^typescale/)) {
        const name = node.params ? node.params : 'default';

        options[name] = options[name] || {};

        node.walkDecls((decl) => {
          if (decl.prop.match(/^scale$/)) {
            options[name].scale = decl.value;
          } else if (decl.prop.match(/^font-size$/)) {
            options[name].fontSize = decl.value;
          } else if (decl.prop.match(/^line-height$/)) {
            options[name].lineHeight = decl.value;
          }
        });

        node.remove();
      }
    },

    Declaration(node, { decl }) {
      if (node.prop.match(/^typescale/)) {
        const values = node.value.split(/\s+(?![^[]*\]|[^(]*\)|[^{]*})/);
        options.tmp = { ...options.default };

        if (values[0].match(/^[a-z]/i)) {
          Object.assign(options.tmp, options[values.shift()]);
        }

        const [index, lineHeightFraction] = values;

        if (index) {
          options.tmp.index = index;
        }

        if (lineHeightFraction) {
          options.tmp.lineHeightFraction = lineHeightFraction;
        }

        const declNew = typescale(options.tmp, { decl });

        node.replaceWith(declNew);

        delete options.tmp;
      }
    },
  };
};
