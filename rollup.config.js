import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import pkg from './package.json';
import svgr from '@svgr/rollup';

export default {
  input: 'src/stories/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [
    'react',
    'react-dom',
    'react-proptypes',
    'styled-components',
    'lodash',
  ],
  plugins: [
    babel({
      exclude: ['node_modules/**', '**/*.json'],
      babelHelpers: 'runtime',
    }),
    url(),
    svgr(),
    resolve(),
    commonjs(),
  ],
};
