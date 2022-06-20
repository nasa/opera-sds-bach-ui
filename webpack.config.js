const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const { BASEPATH } = require("./src/config");

module.exports = {
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
              {
                plugins: ['@babel/plugin-proposal-class-properties'
                 , '@babel/plugin-transform-runtime'
              ],
              },
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot|gif)$/,
        type: "asset/resource"
      },
      {
        test: /\.png$/,
        type: "asset/inline"
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@bach/api": path.resolve(__dirname, "src/api"),
      "@bach/components": path.resolve(__dirname, "src/components"),
      "@bach/config": path.resolve(__dirname, "src/config"),
      "@bach/contexts": path.resolve(__dirname, "src/contexts"),
      "@bach/images": path.resolve(__dirname, "src/images"),
      "@bach/pages": path.resolve(__dirname, "src/pages"),
      "@bach/reducers": path.resolve(__dirname, "src/reducers"),
      "@bach/constants": path.resolve(__dirname, "src/constants"),
      "@bach/test-utils": path.resolve(__dirname, "src/test_utils.jsx"),
    },
  },
  output: {
    publicPath: BASEPATH, // will probably prepend with /bach-ui (in production)
  },
};
