//https://github.com/node-config/node-config/issues/578
process.env.ALLOW_CONFIG_MUTATIONS = true;
const { start } = require('@redsuperadmin/redwireless/bin/lib/startUp');
const { watch } = require('@redsuperadmin/redwireless/bin/lib/watch/watch');
const { watchMF } = require('@redsuperadmin/redwireless/bin/lib/watch/watchMF');
const { watchPage } = require('@redsuperadmin/redwireless/bin/lib/watch/watchPage');
const { watchSchema } = require('@redsuperadmin/redwireless/bin/lib/watch/watchSchema');

(async () => {
  await start(() => {
    watch([watchPage, watchSchema, watchMF]);
  });
})();
