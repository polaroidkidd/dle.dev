const WebpackMerge = require('webpack-merge');
const path = require('path');
const applyPresets = (env) => {
  console.log('apply presets: ', env);

  const { presets } = env;
  if (presets === undefined) return {};
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((presetName) => {
    return require(path.join(__dirname, `./presets/webpack.${presetName}.ts`))(
      env
    );
  });

  return WebpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
