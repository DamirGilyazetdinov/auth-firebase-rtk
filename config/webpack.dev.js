const webpack = require('webpack')
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');
const commonConfig = require('./webpack.common');
const env = dotenv.config({path: './.env.development'}).parsed; 
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

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
    plugins: [
        new webpack.DefinePlugin(envKeys)
    ]
};

module.exports = merge(commonConfig, devConfig);
