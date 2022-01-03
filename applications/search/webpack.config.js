const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

const getUrl = (_env, _module, _port) => {

  if (_env.github) {
    return `https://oseasjs.github.io/module-federation-react/${_module}/`
  }
  else if (_env.vercel) {
    return `https://module-federation-react-${_module}.vercel.app/`
  }
  else {
    return `http://localhost:${_port}/`
  }
  
}

module.exports = (_, argv) => ({

  output: {
    publicPath: getUrl(argv.env, 'search', '9022'),
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
        home: `home@${getUrl(argv.env, 'home', '9020')}/remoteEntry.js`,
        checkout: `checkout@${getUrl(argv.env, 'checkout', '9021')}/remoteEntry.js`,
        search: `search@${getUrl(argv.env, 'search', '9022')}/remoteEntry.js`,
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
