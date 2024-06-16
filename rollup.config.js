import pkg from './package.json';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
const deps = {...pkg.dependencies, ...pkg.peerDependencies};

//https://2ality.com/2017/02/babel-preset-env.html

const extensions =  [ '.js', '.ts']

export default {
  input: 'src/index.ts', // our source file
  output: {
    file: pkg.main,
    format: 'iife',
    sourcemap: true,
    name: 'GsiTerrainProvider',
    globals: {
      'cesium': 'Cesium',
      //'get-pixels': 'getPixels',
    }
  },
  external: ['cesium'], //Object.keys(deps),
  plugins: [
    resolve({extensions, module: true}),
    babel({
      extensions,
      exclude: 'node_modules/**'
    }),
    commonjs(),
  ]
};
