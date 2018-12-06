
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
const webpack = require('webpack');

const rootDir = process.cwd();
const srcDir = path.resolve(rootDir, 'src');
const publicDir = path.resolve(rootDir, 'public');

module.exports = {
  entry: {
    index: srcDir + '/index.tsx',
  },
  output: {
    path: path.resolve(rootDir, 'build'),
    filename: '[name].min.js',
    chunkFilename: 'chunks/[name]/[chunkhash].js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryDirectory: 'es',
              libraryName: 'antd',
              style: 'css',
            })]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                modules: true,
                namedExport: true,
                localIdentName: '[local]_[hash:base64:6]',
                minimize: true,
              }
            },
            {
              loader: 'less-loader',
            }
          ],
          fallback: 'style-loader'
        })
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      pages: path.resolve(srcDir, 'pages'),
      components: path.resolve(srcDir, 'components'),
      containers: path.resolve(srcDir, 'containers'),
      common: path.resolve(srcDir, 'common'),
      api: path.resolve(srcDir, 'api'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(publicDir, 'index.html'),
      inject: true,
      chunks: ['index'],
    }),
    new CaseSensitivePathsPlugin(),
    new ExtractTextPlugin({
      filename: 'index.min.css',
      allChunks: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin({})
  ],
};