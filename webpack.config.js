module.exports = {
	entry: "./app/js/app.js",
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	watchOptions: {
 	 poll: true
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader/webpack', 'babel?presets[]=react,presets[]=es2015'],
			},
			{
				test: /\.css$/,
				loader: 'style-loader' 
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[name]_[local]_[hash:base64:5]' 
				} 
			}
		]
	},
	devServer: {
		historyApiFallback: true
	}
}