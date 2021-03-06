module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: ['../dist/index-umd.js', 'test.js'],
    reporters: ['mocha'],
    port: 9876,
    client: {mocha: {ui: 'tdd'}},
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless', 'FirefoxHeadless'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  })
}
