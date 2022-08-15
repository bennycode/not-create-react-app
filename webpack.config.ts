/// <reference path="node_modules/webpack-dev-server/types/lib/Server.d.ts"/>
import type {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const webpackConfig: Configuration = {
  devServer: {
    open: true,
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
      template: 'index.html',
      title: 'My React App',
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
