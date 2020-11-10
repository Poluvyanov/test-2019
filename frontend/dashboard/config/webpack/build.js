"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const webpack_1 = __importDefault(require("webpack"));
const autoprefixer_1 = __importDefault(require("autoprefixer"));
const html_webpack_template_1 = __importDefault(require("html-webpack-template"));
const copy_webpack_plugin_1 = __importDefault(require("copy-webpack-plugin"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const terser_webpack_plugin_1 = __importDefault(require("terser-webpack-plugin"));
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const optimize_css_assets_webpack_plugin_1 = __importDefault(require("optimize-css-assets-webpack-plugin"));
exports.mode = 'production';
exports.optimization = {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
            },
        },
    },
    minimizer: [
        new terser_webpack_plugin_1.default({
            terserOptions: {
                parse: {
                    ecma: '8',
                },
                compress: {
                    ecma: 5,
                    warnings: false,
                    comparisons: false,
                    inline: 2,
                },
                mangle: {
                    safari10: true,
                },
                output: {
                    ecma: 5,
                    comments: false,
                    ascii_only: true,
                },
            },
            parallel: true,
            cache: true,
            sourceMap: false,
        }),
        new optimize_css_assets_webpack_plugin_1.default({}),
    ],
};
exports.entry = ['@babel/polyfill', './src/index'];
exports.output = {
    path: path_1.default.join(__dirname, '../../dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
};
exports.module = {
    rules: [
        {
            test: /\.(js|ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    query: {
                        babelrc: false,
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: '> 0.25%, not dead',
                                    },
                                    useBuiltIns: 'usage',
                                    modules: false,
                                },
                            ],
                            '@babel/preset-typescript',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            'react-hot-loader/babel',
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-dynamic-import',
                        ],
                    },
                },
            ],
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            autoprefixer_1.default({
                                overrideBrowserslist: ['>2%', 'last 2 versions'],
                            }),
                        ],
                    },
                },
            ],
        },
        {
            test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            use: [
                {
                    loader: 'file-loader?name=[name].[ext]',
                    options: {
                        outputPath: 'assets',
                    },
                },
            ],
        },
    ],
};
exports.resolve = {
    extensions: ['.ts', '.tsx', '.js', '.json'],
};
exports.plugins = [
    new mini_css_extract_plugin_1.default({
        filename: '[name].[hash].css',
    }),
    new html_webpack_plugin_1.default({
        title: 'Atlantis United',
        inject: false,
        template: html_webpack_template_1.default,
        appMountId: 'app',
    }),
    new webpack_1.default.ProvidePlugin({
        fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),
    new copy_webpack_plugin_1.default([
        {
            from: path_1.default.join(__dirname, '..', '..', 'assets'),
            to: 'assets',
        },
    ]),
];
