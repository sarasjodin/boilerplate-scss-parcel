const { exec } = require('child_process');

const url = 'http://localhost:1234'; // Parcel's default dev-server URL
const browserCommand = {
  win32: `start chrome --incognito ${url}`,
  darwin: `open -a "Google Chrome" --args --incognito ${url}`,
  linux: `google-chrome --incognito ${url}`
};

exec(browserCommand[process.platform] || browserCommand.linux);
