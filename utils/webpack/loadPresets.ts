import { merge } from 'webpack-merge';

const path = require('path');

const applyPresets = (env) => {
  const { presets } = env;
  console.debug('presets: ', presets);
  if (presets === undefined) return {};
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((presetName) => {
    return require(path.join(__dirname, `./presets/webpack.${presetName}`))(env);
  });

  return merge({}, ...mergedConfigs);
};

module.exports = applyPresets;
