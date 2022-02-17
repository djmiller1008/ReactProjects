const path = require("path");

module.exports = {
  context: __dirname,
    entry: './frontend/widgets.jsx',
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".jsx", ".js", "*"]
    },
    module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  }
}