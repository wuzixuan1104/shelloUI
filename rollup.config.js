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
  external: ['react', 'react-dom', 'styled-components'],

  plugins: [
    resolve(),
    babel({
      babelHelpers: 'external',
      exclude: ['node_modules/**', '**/*.json'],
    }),
    commonjs(),
    svgr(),
    url(),
    svgr(),
  ],
};
