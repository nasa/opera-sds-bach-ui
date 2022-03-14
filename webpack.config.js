const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const { BASEPATH } = require("./src/config");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader?mimetype=image/png",
          },
        ],
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
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: BASEPATH, // will probably prepend with /bach-ui (in production)
    filename: "index_bundle.js",
  },
};
