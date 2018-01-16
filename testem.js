/* eslint-env node */
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  parallel: -1,
  launch_in_ci: [
    'Chrome',
    'Firefox'
  ],
  launch_in_dev: [
    'Chrome',
    'Firefox'
  ],
  browser_args: {
    Chrome: [
      '--headless',
      '--disable-gpu',
      '--remote-debugging-port=9222',
      '--window-size=1440,900'
    ],
    Firefox: [
      '-headless',
      '--window-size=1440,900'
    ]
  }
};
