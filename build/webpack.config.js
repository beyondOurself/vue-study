const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
			,
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		/**HMR */
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// vue
		new VueLoaderPlugin(),
		//替换 html的插件
		new HtmlWebpackPlugin({
			title: '',
			template: path.resolve(__dirname, '../index.html'),
		}),
	],
	mode: "development"
}
