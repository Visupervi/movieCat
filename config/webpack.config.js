const path = require('path');
console.log("#########");
console.log("运行开始");
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {

  entry: {
    app: path.resolve(__dirname, '../src/index.jsx')
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname,'dist'),
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    quiet: false,//如果不想显示打包信息可以设置成false
    inline: true,
    // lazy:true,//开启懒加载
    progress:true,//显示打包进度
    host: 'localhost',
    port:"9999",
    //设置代理
    proxy:{
      '/api':{
        target:"https://douban.uieee.com/v2",
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:["@babel/preset-react"]
        },
      },
      {
        test: /\.(css|less)$/,
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new HtmlwebpackPlugin({
      title: "react App",
      filename: "index.html",
      template: path.resolve(__dirname, '../src/index.html'),
      favicon: './favicon.ico',
      // inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeAttributeQuotes: true
      }
    })
  ]
};

setTimeout(()=>{
  console.log("######");
  console.log("运行结束");
},5000);