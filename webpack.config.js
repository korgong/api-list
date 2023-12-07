const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { setupMiddlewares } = require('./mockData');
const CDNAddress = '/';
module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';

    return {
        mode: devMode ? 'development' : 'production',
        devtool: devMode ? 'inline-source-map' : 'source-map', // source-map: 独立打包source map，和js源码分卡，并且允许异步加载
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            // specify the base path for all assets(js/css/img,etc)
            // if all assets is in the same root directory, you
            // don't need to set this parameter. as the default is '/'
            publicPath: devMode ? '/' : CDNAddress,
            filename: '[name].bundle.[contenthash].js',
            chunkFilename: '[name].chunk.js',
            clean: true
        },
        devServer: {
            static: './dist',
            historyApiFallback: true,
            setupMiddlewares: setupMiddlewares,
            // proxy: {
            //     '/api': {
            //         target: 'http://localhost:3001',
            //         secure: false,
            //         changeOrigin: true
            //     }
            // },
            client: {
                overlay: false // This will prevent warnings from appearing as overlays in the browser
            }
        },
        plugins: [
            new ESLintPlugin({
                extensions: ['js', 'jsx'] // Your file extensions
            }),
            new HtmlWebpackPlugin({
                title: 'React App',
                template: 'public/index.html'
            }),
            new CompressionPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', 'less-loader']
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192, // All images under 8kb will be inlined with base64 encoding, larger ones will be handled by file-loader
                                name: 'img/[name].[hash:7].[ext]', // this will put all your images into a folder named img in the output directory
                                publicPath: devMode ? '/' : CDNAddress
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    };
};
