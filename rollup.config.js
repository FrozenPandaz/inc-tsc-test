// rollup.config.js
import typescript from 'rollup-plugin-typescript';

export default {
  input: './dist/main.js',
  plugins: [
    typescript()
  ]
}