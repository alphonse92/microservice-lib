NODE_ENV=test ./node_modules/nyc/bin/nyc.js  --reporter=lcov --reporter=html ./node_modules/mocha/bin/mocha --exit --require @babel/register --require @babel/polyfill --timeout 10000  "test/**/*.js";
