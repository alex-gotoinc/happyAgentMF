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
		port: 3000
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
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				},
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new ModuleFederationPlugin({
			name: 'mfReact',
			library: {type: 'var', name: 'mfReact'},
			remotes: {
				mfReactChat: 'mfReactChat'
			},
			shared: {
				'react': {
					requiredVersion: deps['react'],
					singleton: true,
					eager: true
				},
				'react-dom': {
					requiredVersion: deps['react-dom'],
					singleton: true,
					eager: true
				}
			}
		})
	],
	
};