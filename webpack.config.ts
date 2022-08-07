import type {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const webpackConfig: Configuration = {
  cache: {
    type: 'filesystem',
    buildDependencies: {
      // https://webpack.js.org/blog/2020-10-10-webpack-5-release/#persistent-caching
      config: [__filename],
    },
  },
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        exclude: /(node_modules)/,
        test: /.[tj]sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-proposal-class-properties'],
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My React App',
      template: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  stats: {
    errorDetails: true,
  },
};

export default webpackConfig;
