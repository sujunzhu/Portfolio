const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
		contentBase: './dist',
		port: 3000
	}
});
