const { remote } = require('webdriverio');
const path = require('path');

async function run() {
  const caps = require(path.join(__dirname, 'capabilities.json')).android;

  const options = {
    protocol: 'http',
    hostname: process.env.APPIUM_HOST || '127.0.0.1',
    port: process.env.APPIUM_PORT ? parseInt(process.env.APPIUM_PORT, 10) : 4723,
    path: process.env.APPIUM_BASE_PATH || '/wd/hub',
    logLevel: 'info',
    capabilities: caps,
  };

  console.log('Connecting to Appium with options:', options);

  let client;
  try {
    client = await remote(options);
    console.log('Session started. Context:', await client.getContext());

    // Try to find username field by accessibility id used in SwagLabs examples
    const selectors = [
      '~test-Username',
      '//*[@content-desc="test-Username"]',
      '//*[@resource-id="com.swaglabsmobileapp:id/username"]',
      '//*[@resource-id="username"]'
    ];

    let found = false;
    for (const sel of selectors) {
      try {
        const el = await client.$(sel);
        const exists = await el.isExisting();
        console.log(`Checked selector ${sel}: exists=${exists}`);
        if (exists) {
          found = true;
          break;
        }
      } catch (err) {
        console.log(`Selector ${sel} error: ${err.message}`);
      }
    }

    if (found) {
      console.log('✅ SwagLabs login screen appears to be visible (username field found).');
    } else {
      console.log('❌ Could not find the SwagLabs username field.');
    }

  } catch (err) {
    console.error('Error while connecting or interacting with Appium:', err.message);
  } finally {
    if (client) {
      try {
        await client.deleteSession();
        console.log('Session ended.');
      } catch (e) {
        // ignore
      }
    }
  }
}

run();
