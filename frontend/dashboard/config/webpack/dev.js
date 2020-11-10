"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const autoprefixer_1 = __importDefault(require("autoprefixer"));
const html_webpack_template_1 = __importDefault(require("html-webpack-template"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
exports.mode = 'development';
exports.entry = ['@babel/polyfill', './src/index'];
exports.output = {
    filename: '[name].js',
    publicPath: '/',
    path: '/',
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
            loader: 'file-loader?name=[name].[ext]',
        },
    ],
};
exports.resolve = {
    extensions: ['.ts', '.tsx', '.js', '.json'],
};
exports.plugins = [
    new html_webpack_plugin_1.default({
        title: 'Atlantis United',
        inject: false,
        template: html_webpack_template_1.default,
        appMountId: 'app',
    }),
];
