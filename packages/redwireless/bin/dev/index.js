//https://github.com/node-config/node-config/issues/578
process.env.ALLOW_CONFIG_MUTATIONS = true;
const { start } = require('@redwireless/redwireless/bin/lib/startUp');
const { watch } = require('@redwireless/redwireless/bin/lib/watch/watch');
const { watchMF } = require('@redwireless/redwireless/bin/lib/watch/watchMF');
const { watchPage } = require('@redwireless/redwireless/bin/lib/watch/watchPage');
const { watchSchema } = require('@redwireless/redwireless/bin/lib/watch/watchSchema');

(async () => {
  await start(() => {
    watch([watchPage, watchSchema, watchMF]);
  });
})();
