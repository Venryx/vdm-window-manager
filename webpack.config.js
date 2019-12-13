var webpack = require("webpack");
var path = require("path");
var fs = require("fs");

let es2015Modules = ["js-vextensions"];

var extModules = {};
for (let folder of fs.readdirSync("node_modules")) {
	if (folder == ".bin") continue;
	// bundle these using webpack, since they are es2015, and NodeJS can't (itself) import es2015 from a Webpack bundle
	if (es2015Modules.includes(folder)) continue;
	extModules[folder] = "commonjs " + folder;
}
extModules.edge = "edge-js"; // fixes issue (forget what it was)

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
	externals: extModules,
	resolve: {
		extensions: [
			'.js', '.jsx', '.json',
			'.ts', '.tsx', // always accept ts[x], because there might be some in node_modules (eg. vwebapp-framework)
			//'.mjs', // needed for mobx-sync
		],
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