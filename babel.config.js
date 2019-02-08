module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@react-native-community/status-bar": "./js/StatusBar.js"
        },
        cwd: "babelrc"
      }
    ]
  ]
}
