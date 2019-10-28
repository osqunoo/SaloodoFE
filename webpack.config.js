const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env',
              '@babel/react',{
              'plugins': ['@babel/plugin-proposal-class-properties']}]
            }
          }
        },
        {
            test:/\.(s*)css$/,
            use:['style-loader','css-loader', 'sass-loader']
        },
         
        {
          test: /\.(woff(2)?|ttf|eot|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './assets/fonts/'
              }
            }
          ]
        }
        
      ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    writeToDisk: true,
    hot: true,
    port: 8080,
    stats: 'minimal'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};