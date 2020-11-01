import { merge } from 'webpack-merge';
import { IConfiguration } from './webpack.config';

const path = require('path');

const applyPresets = (mode: IConfiguration['mode'], presets: string[]) => {
  if (presets === undefined) return {};

  const mergedPresets = [].concat(...[presets]);

  const mergedConfigs = mergedPresets.map((presetName) => {
    return require(path.join(__dirname, `./presets/webpack.${presetName}.ts`))(mode);
  });

  return merge({}, ...mergedConfigs);
};

export { applyPresets };
