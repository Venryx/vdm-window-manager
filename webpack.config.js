var webpack = require("webpack");
var path = require("path");
var fs = require("fs");

var nodeModules = {};
for (let folder of fs.readdirSync("node_modules")) {
	if (folder == ".bin") continue;
	nodeModules[folder] = "commonjs " + folder;
}

module.exports = {
	mode: "development",
	entry: ["./Source/Main.ts"],
	output: {
		path: __dirname + "/Dist",
		publicPath: "http://localhost:8080/",
		filename: "Main.js",
		libraryTarget: "umd",
	},
	target: "node",
	externals: nodeModules,
	resolve: {
		extensions: [".ts"],
	},
	devtool: "cheap-module-source-map",
	module: {
		rules: [
			{
				test: /\.(jsx?|tsx?)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["@babel/env"]
				}
			},
			{test: /\.tsx?$/, loader: "ts-loader"},
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
	]
};