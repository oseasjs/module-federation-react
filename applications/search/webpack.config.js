const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

const getUrl = (env) => {

  if (env.github) {
    return 'https://oseasjs.github.io/module-federation-react/search/'
  }
  else if (env.vercel) {
    return 'https://module-federation-react-search.vercel.app/'
  }
  else {
    return 'http://localhost:9022/'
  }
  
}

module.exports = (_, argv) => ({

  output: {
    publicPath: getUrl(argv.env),
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 9022,
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
      name: "search",
      filename: "remoteEntry.js",
      remotes: {
        home: "home@http://localhost:9020/remoteEntry.js",
        checkout: "checkout@http://localhost:9021/remoteEntry.js",
        search: "search@http://localhost:9022/remoteEntry.js",
      },
      exposes: {
        "./Search": "./src/SearchContent",
        "./ProductService": "./src/ProductService",
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
});
