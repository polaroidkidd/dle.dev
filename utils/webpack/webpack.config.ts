import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfiguration, ProgressPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

export interface IConfiguration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

// Webpack Configs
import { developmentConfig } from './webpack.development';
import { productionConfig } from './webpack.production';
import { applyPresets } from './loadPresets';

/**
 * Base Webpack Configuration
 * @param mode Webpack Mode (prod, dev, none)
 * @param presets Currently available preset is "analyze"
 * @param depEnv Deployment Environment (production, staging)
 */
const config = ({
  mode = 'production',
  presets = undefined,
  depEnv = 'production',
}: {
  mode: IConfiguration['mode'];
  presets?: string;
  depEnv?: string;
}): IConfiguration => {
  const { presetsArray, hasPresets }: { presetsArray: string[]; hasPresets: boolean } =
    presets === undefined
      ? {
          presetsArray: [],
          hasPresets: false,
        }
      : { presetsArray: presets.split(','), hasPresets: true };
  const isProduction: boolean = mode === 'production';

  return merge(
    {
      mode: mode,
      entry: [
        'react-hot-loader/babel',
        // entrypoint
        './src/index.tsx',
      ],

      output: {
        path: __dirname + '/../../dist',
        publicPath: '/',
      },
      resolve: {
        alias: !isProduction
          ? {
              'react-dom': '@hot-loader/react-dom',
            }
          : {},
        fallback: { path: require.resolve('path-browserify') },
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
      },
      module: {
        rules: [
          {
            test: /node_modules\/vfile\/core\.js/,
            use: [
              {
                loader: 'imports-loader',
                options: {
                  type: 'commonjs',
                  imports: ['single process/browser process'],
                },
              },
            ],
          },
          {
            test: /\.([jt])sx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: false,
                babelrc: false,
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      corejs: {
                        version: '3',
                        proposals: true,
                      },
                      useBuiltIns: 'entry',
                      targets: {
                        browsers: ['>1%', 'Firefox ESR', 'not ie < 11'],
                      },
                    },
                  ],
                  '@babel/preset-typescript',
                  '@babel/preset-react',
                ],
                plugins: [
                  'syntax-async-functions',
                  '@babel/transform-runtime',
                  ['@babel/plugin-proposal-unicode-property-regex', { useUnicodeFlag: false }],
                  '@babel/plugin-syntax-dynamic-import',
                  ['@babel/plugin-proposal-decorators', { legacy: true }],
                  ['@babel/plugin-proposal-class-properties', { loose: true }],
                  '@babel/plugin-transform-object-assign',
                  'react-hot-loader/babel',
                  [
                    'module-resolver',
                    {
                      root: ['.'],
                      extensions: ['.ts', '.tsx', '.jsx', '.js', '.css', '.scss'],
                      alias: {
                        '@components': './src/app/components',
                        '@pages': './src/app/pages',
                        '@styles': './src/app/styles',
                        '@assets': './src/app/assets',
                        '@containers': './src/app/containers',
                        '@utils': './src/app/utils',
                      },
                    },
                  ],
                ],
              },
            },
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin({ verbose: true }),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './public/index.html',
          title: 'dle.dev',
          inject: 'body',
          excludeChunks: ['blog', 'contact', 'home', 'style', 'vitae', 'vendorMain', 'vendorUtils'],
          minify:
            isProduction && hasPresets && !presetsArray.some((p) => p !== 'analyze')
              ? {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                }
              : false,
          hash: false,
          cache: isProduction && hasPresets && !presetsArray.some((p) => p !== 'analyze'),
          favicon: './public/favicon.ico',
          templateParameters: {
            PUBLIC_URL: depEnv === 'production' ? 'https://dle.dev' : 'https://staging.dle.dev',
          },
        }),
        new PreloadWebpackPlugin({
          rel: 'preload',
          include: ['home', 'blog', 'contact', 'vitae', 'main', 'vendorMain'],
        }),
        new PreloadWebpackPlugin({
          rel: 'prefetch',
          include: ['vendorUtils'],
        }),
        new ProgressPlugin({ activeModules: true, entries: true, modules: true, profile: true, percentBy: 'modules' }),
      ],
    },
    modeConfig(isProduction, hasPresets ? presetsArray : undefined),
    applyPresets(mode, hasPresets ? presetsArray : undefined)
  );
};

const modeConfig = (isProduction: boolean, presets: string[]): IConfiguration => {
  if (isProduction) {
    return productionConfig(presets);
  } else {
    return developmentConfig();
  }
};

export default config;
