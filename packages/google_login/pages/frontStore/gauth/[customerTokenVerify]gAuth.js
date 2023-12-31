const { buildUrl } = require('@redsuperadmin/redwireless/src/lib/router/buildUrl');
const { getConfig } = require('@redsuperadmin/redwireless/src/lib/util/getConfig');
const {
  getGoogleAuthUrl
} = require('@redsuperadmin/google_login/services/getGoogleAuthUrl');

module.exports = (request, response, delegate, next) => {
  // Check if customer is already logged in
  if (request.isCustomerLoggedIn()) {
    response.redirect('/');
    return;
  }
  const client_id = getConfig('google_login.client_id');
  const homeUrl = getConfig('shop.homeUrl', 'http://localhost:3000');
  const redirect_uri = `${homeUrl}${buildUrl('gcallback')}`;
  const googleAuthUrl = getGoogleAuthUrl(client_id, redirect_uri);
  response.redirect(googleAuthUrl);
};
