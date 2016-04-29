import postcss from 'postcss';
import typescale from './typescale';

module.exports = postcss.plugin('postcss-typescale', (opts) => {
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

  return (css) => {
    css.walk((node) => {
      if (node.type === 'atrule' && node.name.match(/^typescale/)) {
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
      } else if (node.type === 'decl' && node.prop.match(/^typescale/)) {
        const values = node.value.split(/\s+(?![^\[]*\]|[^(]*\)|[^\{]*})/);
        options.tmp = Object.assign({}, options.default);

        if (values[0].match(/^[a-z]/i)) {
          Object.assign(options.tmp, options[values.shift()]);
        }

        if (values[0]) {
          options.tmp.index = values[0];
        }

        if (values[1]) {
          options.tmp.lineHeightFraction = values[1];
        }

        typescale(node, options.tmp);
        delete options.tmp;
      }
    });
  };
});
