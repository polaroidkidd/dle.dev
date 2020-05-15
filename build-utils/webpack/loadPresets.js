const WebpackMerge = require('webpack-merge');
const path = require('path');
const applyPresets = (env) => {
  const { presets } = env;
  if (presets === undefined) return {};
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((presetName) => {
    return require(path.join(__dirname, `./presets/webpack.${presetName}`))(env);
  });

  return WebpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
