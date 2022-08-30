module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@Navigation': './src/navigation',
            '@components': './src/components',
            '@containers': './src/containers',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@utils': './src/utils',
            '@services': './src/services',
            '@store': './src/store'
          }
        }
      ]
    ]
  }
}
