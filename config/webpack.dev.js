const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
    target: "web",
    mode: 'development',
    output: {
        publicPath: 'http://localhost:3000/',
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        proxy: {
            '/api': 'http://localhost:5000',
        }
    },
};

module.exports = merge(commonConfig, devConfig);
