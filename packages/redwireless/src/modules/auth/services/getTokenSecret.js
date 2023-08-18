const { getConfig } = require('@redsuperadmin/redwireless/src/lib/util/getConfig');

module.exports.getTokenSecret = () =>
  getConfig('jwt.web_token_secret', 'secret');
