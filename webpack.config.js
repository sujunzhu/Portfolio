const path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/bundle.js"
  },
  devServer: {
		contentBase: './dist',
		port: 3000
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      },
      {
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader?name=src/images/[name].[ext]"
      }
    ]
  }
};
