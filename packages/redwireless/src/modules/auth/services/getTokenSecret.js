const { getConfig } = require('@redwireless/redwireless/src/lib/util/getConfig');

module.exports.getTokenSecret = () =>
  getConfig('jwt.web_token_secret', 'secret');
