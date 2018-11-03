const VueLoaderPlugin = require('vue-loader/lib/plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  console.log('vue', VueLoaderPlugin)
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  })
}
