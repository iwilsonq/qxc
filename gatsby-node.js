const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  const rules =
    stage === 'build-html'
      ? [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
          },
          {
            test: /react-leaflet/,
            loader: 'null-loader',
          },
        ]
      : [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
          },
        ]

  actions.setWebpackConfig({
    module: {
      rules,
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({ 'global.GENTLY': false }),
    ],
  })
}
