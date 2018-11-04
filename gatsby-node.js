const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ],
    },
    plugins: [new VueLoaderPlugin(), new webpack.DefinePlugin({ "global.GENTLY": false })],
  })
}
