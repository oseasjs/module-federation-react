const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:9021/",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    port: 9021,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "checkout",
      filename: "remoteEntry.js",
      remotes: {
        home: "home@http://localhost:9020/remoteEntry.js",
        checkout: "checkout@http://localhost:9021/remoteEntry.js",
        search: "search@http://localhost:9022/remoteEntry.js",
      },
      exposes: {
        "./Checkout": "./src/CheckoutContent",
        "./AddToCart": "./src/AddToCart",
        "./store": "./src/store",
        "./CartService": "./src/CartService",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
