const { getConfig } = require('@redsuperadmin/redwireless/src/lib/util/getConfig');

module.exports.getTokenCookieId = () => getConfig('jwt.cookieId', 'token');
