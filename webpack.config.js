const path = require('path');

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
//   mode: 'development',
  // the app entry point is /src/index.js
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
  	// the output of the webpack build will be in /dist directory
    path: path.resolve(__dirname, 'dist1'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      	// for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
        options: {
          // attach the presets to the loader (most projects use .babelrc file instead)
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
				// I haven't used SCSS in the base example, but it's here for you if you
				// want! If you want to use CSS, you can change this next like's regex to
				// /\.(css|scss)$/ or even just /\.css$/
				test: /\.css$/,
				loader: ['style-loader', 'css-loader'],
        // test: /\.css$/,
        // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
        // test: /\.css$/, 
        // exclude: /node_modules/, 
        // loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]" })
			},
    ]
  }
};