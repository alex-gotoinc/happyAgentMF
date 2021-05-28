const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const path = require('path');

const deps = require('./package.json').dependencies;

module.exports = {
	entry: './src/index.js',
	output: {},
	mode: 'development',
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		},
		contentBase: path.join(__dirname, 'dist'),
		port: 3001
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-react"],
				},
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "sass-loader"},
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new ModuleFederationPlugin({
			name: 'mfReactChat',
			library: {type: 'var', name: 'mfReactChat'},
			filename: 'mfReactChatEntry.js',
			exposes: {
				'./Chat': './src/components/Chat'
			},
			shared: {
				'react': {
					requiredVersion: deps['react'],
					singleton: true
				},
				'react-dom': {
					requiredVersion: deps['react-dom'],
					singleton: true
				}
			}
		})
	],
	
};