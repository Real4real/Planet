const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const devMode = process.env.NODE_ENV;
const conf = {
  entry: ['babel-regenerator-runtime', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
        // use: ['babel-loader']
      },

      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
        // use: ['babel-loader']
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            
            {
              loader: 'css-loader',
              options: {
                // If you are having trouble with urls not resolving add this setting.
                // See https://github.com/webpack-contrib/css-loader#url
                sourceMap: true
              }
            },

            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer()
                ],
                sourceMap: true
              }
            },


            {
              loader: 'sass-loader',
                options: {
                  sourceMap: true,
                }
            },
          
          ]
        })
      },

      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      },
      
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      {filename: 'style.css'}
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/img/favicon.png'
    })
  ]
};

module.exports = (env, options) => {
  // let production = options.mode === 'production';
  if (options.mode === "production") {
    conf.plugins.push(new CleanWebpackPlugin("dist"));
    return conf;
  }
  else {
    conf.devtool = 'source-map';
    return conf;
  }
};
// module.exports = (env, options) => {
//   let production = options.mode === 'production';
//   conf.devtool = production ? false : 'source-map';
//   return conf;
// }