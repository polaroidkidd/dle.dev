const webpackMerge = require('webpack-merge');
const path = require('path');
const applyPresets = (env) => {
  const {presets} = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((presetName) => {
    return require(path.join(__dirname, `./presets/webpack.${presetName}`))(
      env
    );
  });

  return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
