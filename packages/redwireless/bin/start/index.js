//https://github.com/node-config/node-config/issues/578
process.env.ALLOW_CONFIG_MUTATIONS = true;
const { start } = require('@redwireless/redwireless/bin/lib/startUp');

(async () => {
  await start();
})();
