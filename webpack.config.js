const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// if your assets is in the other domain
// const CDNAddress = 'http://localhost:3009/dist/';

// as we server is http://localhost:8081/, provided by nginx. so the CDNAddress is
// same for both 'http://localhost:8081/' and '/'
const CDNAddress = '/';
// result for 'http://localhost:8081/' and '/'
// <script defer="defer" src="http://localhost:8081/main.bundle.6dcd44f297e3811f930e.js"></script>
// <script defer="defer" src="/main.bundle.6dcd44f297e3811f930e.js"></script>
const getProxy = (app, url, json) => {
    app.get(url, (_req, res) => {
        res.send(json);
    });
};
const postProxy = (app, url, json) => {
    app.post(url, (_req, res) => {
        res.json(json);
    });
};
function proxySetup(app) {
    getProxy(app, '/test', [1, 2, 3]);
    // postProxy(app, '/test', require('./src/mock/db').data);
}

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
            setupMiddlewares: (middlewares, devServer) => {
                if (!devServer) {
                    throw new Error('webpack-dev-server is not defined');
                }
                devServer.app.use((req, res, next) => {
                    setTimeout(() => {
                        next();
                    }, 1000);
                });
                devServer.app.get('/api/list', (req, res) => {
                    if (Number(req.query._page) === 1) {
                        res.json(
                            require('./src/mock/db').data.list.slice(0, 3)
                        );
                    } else if (Number(req.query._page) === 2) {
                        res.json(
                            require('./src/mock/db').data.list.slice(3, 6)
                        );
                    } else if (Number(req.query._page) === 3) {
                        res.json(
                            require('./src/mock/db').data.list.slice(6, 9)
                        );
                    } else {
                        res.json(
                            require('./src/mock/db').data.list.slice(9, 11)
                        );
                    }
                });
                proxySetup(devServer.app);
                return middlewares;
            },
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
