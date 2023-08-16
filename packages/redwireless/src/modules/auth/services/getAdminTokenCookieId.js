const { getConfig } = require('@redwireless/redwireless/src/lib/util/getConfig');

module.exports.getAdminTokenCookieId = () =>
  getConfig('jwt.adminCookieId', 'admin_token');
