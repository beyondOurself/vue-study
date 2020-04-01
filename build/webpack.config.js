const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		bundle: "./src/index.js"
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '../dist')
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	},
	plugins: [
		//替换 html的插件
		new HtmlWebpackPlugin({
			title: '',
			template: path.resolve(__dirname, '../index.html'),
			inject: 'head' // body,head
		}),
	],
	mode: "development"
}
