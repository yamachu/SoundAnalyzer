const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const output_path = 'dist';

module.exports = function(env, argv) {
    return [
        {
            entry: './src/index.tsx',
            output: {
                path: path.resolve(__dirname, output_path),
                filename: 'index.js',
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js'],
            },
            devtool: argv.mode === 'production' ? false : 'source-map',
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        exclude: /node_modules/,
                        use: ['ts-loader'],
                    },
                    { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
                ],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: 'template/index.html',
                    filename: 'index.html',
                }),
            ],
        },
    ];
};