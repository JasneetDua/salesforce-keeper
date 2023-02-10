const LwcWebpackPlugin = require('lwc-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [new LwcWebpackPlugin()],
    entry: './content-src/index.js',
    output: {
        path: path.resolve(__dirname, 'scripts'),
        filename: 'content.js'
    }
};