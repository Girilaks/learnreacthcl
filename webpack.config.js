module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }
}


// The above configuration implies the following:

// './index.js' is the entry point of the application.

// Output will be generated in './dist/bundle.js'

// We are processing every .js using the babel-loader, 
// excluding node_modules to avoid external libraries to go through Babel, slowing down compilation.