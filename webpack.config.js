const path = require("path")
const fs = require('fs')

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  externals: nodeModules,
  mode: 'production',
  target: 'node'
}