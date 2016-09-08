
import babel from 'rollup-plugin-babel'
import es2015Rollup from 'babel-preset-es2015-rollup'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      'plugins': [
        ['transform-react-jsx']
      ],
      'presets': [es2015Rollup]
    })
  ],
  dest: 'dist/index.js'
}
