const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
  entry: ["@babel/polyfill", './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
],

    resolve: {
        extensions: ['.js', '.jsx'],
    },  

  module: {
    rules: [    
        {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  limit: 10000,
                },
              },
            ],
          },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                "style-loader",
                "css-loader",
                "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|ttf|gif)$/i,
                use: [
                    {loader: 'file-loader',},
                ],
            },
    ],
  },
};