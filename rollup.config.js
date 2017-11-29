import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    name: 'Cowtest',
    plugins: [
      resolve({
        extensions: ['.js'],
        preferBuiltins: true,
      }),
      commonjs(),
      babel({
        exclude: ['node_modules/**'],
      }),
    ],
  },
];
