const { getConfig } = require('@redwireless/redwireless/src/lib/util/getConfig');

module.exports.getTokenCookieId = () => getConfig('jwt.cookieId', 'token');
