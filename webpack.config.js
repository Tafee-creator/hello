const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.scss', '.html'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              { tag: 'img', attribute: 'src', type: 'src' },
              { tag: 'img', attribute: 'srcset', type: 'srcset' },
              { tag: 'link', attribute: 'href', type: 'src' },
              { tag: 'object', attribute: 'data', type: 'src' },
              { tag: 'embed', attribute: 'src', type: 'src' },
              { tag: 'source', attribute: 'src', type: 'src' },
              { tag: 'source', attribute: 'srcset', type: 'srcset' },
              { tag: 'image', attribute: 'xlink:href', type: 'src' },
            ],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', 
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            if (pathData.filename.includes('icon')) {
              return 'img/icons/[hash][ext][query]';
            } else if (pathData.filename.includes('brand')) {
              return 'img/brands/[hash][ext][query]';
            } else if (pathData.filename.includes('photo')) {
              return 'img/photo/[hash][ext][query]';
            } else {
              return 'img/[hash][ext][query]';
            }
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  stats: {
    children: true,
  },
};
