const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Главный файл для входа, где подключаются SCSS и другие файлы
  output: {
    filename: 'bundle.js', // Имя финального JS файла
    path: path.resolve(__dirname, 'dist'), // Папка для вывода
    assetModuleFilename: 'assets/[hash][ext][query]', // Путь для изображений
  },
  devtool: 'inline-source-map', // Генерация sourcemap для отладки
  devServer: {
    static: './dist', // Указываем, где искать файлы для разработки
    hot: true, // Включение горячей перезагрузки
  },
  resolve: {
    extensions: ['.js', '.scss', '.html'],
    alias: {
      '@src': path.resolve(__dirname, 'src'), // Настроим алиас для @src
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i, // Обработка HTML файлов
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
          MiniCssExtractPlugin.loader, // Извлечение CSS в отдельные файлы
          'css-loader', // Обработка CSS
          'postcss-loader', // Обработка PostCSS (если используется, например, autoprefixer)
          'resolve-url-loader', // Разрешение путей для ресурсов, таких как изображения в SCSS
          {
            loader: 'sass-loader', // Обработка SCSS
            options: {
              sourceMap: true, // Включение source maps для правильной работы resolve-url-loader
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Обработка изображений
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', // Обработка шрифтов
      },
      {
        test: /\.m?js$/, // Обработка JS файлов
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
      template: './src/index.html', // Шаблон HTML
      filename: 'index.html', // Выходной файл HTML
      inject: 'body', // Вставка JS в конец body
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // Выходной файл для стилей
    }),
  ],
  stats: {
    children: true,
  },
};
