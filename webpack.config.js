const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
	// mode: 'development',
	output: {
		filename: 'index.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		}]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		})
	]
};