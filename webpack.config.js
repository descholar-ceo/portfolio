const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
require('dotenv').config();

module.exports = (env) => ({
  context: __dirname,
  entry: './src/entry/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'descholar.js',
    publicPath: '/',
  },
  mode: env ? 'production' : 'development',
  devServer: {
    inline: true,
    port: process.env.PORT,
    contentBase: path.join(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)$/,
        use: ['file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: { enabled: false },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: { interlaced: false },
              // the webp option will enable WEBP
              webp: { quality: 75 },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  performance: {
    hints: false,
  },
});
