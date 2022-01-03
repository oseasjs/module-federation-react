const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

const getUrl = (env, _module, port) => {

  if (env.github) {
    return `https://oseasjs.github.io/module-federation-react/${_module}/`
  }
  else if (env.vercel) {
    return `https://module-federation-react-${module}.vercel.app/`
  }
  else {
    return `http://localhost:${port}/`
  }
  
}

module.exports = (_, argv) => ({
  output: {
    publicPath: getUrl(argv.env, 'home'),
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    port: 9020,
    historyApiFallback: true
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
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        home: `home@${getUrl(argv.env, 'home', '9020')}/remoteEntry.js`,
        checkout: `checkout@${argv.env, 'checkout', '9021'}/remoteEntry.js`,
        search: `search@${getUrl(argv.env, 'search', '9022')}/remoteEntry.js`,
      },
      exposes: {
        "./Home": "./src/HomeContent",
        "./Frame": "./src/Frame",
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
