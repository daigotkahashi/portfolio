const path = require('path');
const globule = require('globule');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pugFiles = globule.find('src/**/*.pug', {
  ignore: [ 'src/**/_*.pug' ]
});

const buildDefault = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/preset-env' ]
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
              root: path.resolve(__dirname, 'src')
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
  },
  plugins: [],
  devServer: {
    static: {
      directory:`${__dirname}/dist`
    },
    port: 8080,
    open: true
  }
}

pugFiles.forEach((pug) => {
  const html = pug.split('/').slice(-1)[0].replace('.pug', '.html');
  buildDefault.plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      filename: `${path.resolve(__dirname, 'dist')}/${html}`,
      template: pug,
      data: require(`${path.resolve(__dirname, 'src')}/data/global.js`)
    })
  )
});

module.exports = buildDefault;