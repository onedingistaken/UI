const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js", // index.js location
    output: {
        path: path.resolve(__dirname, "dist"), // output location
        filename: 'bundle.js',
        publicPath: "/"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader' } // read config from babel
        ]
    }
};