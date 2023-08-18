const { buildUrl } = require('@redsuperadmin/redwireless/src/lib/router/buildUrl');
const {
  setContextValue,
  getContextValue
} = require('../../../../graphql/services/contextHelper');
const { getCustomerCart } = require('../../../services/getCustomerCart');
const {
  translate
} = require('@redsuperadmin/redwireless/src/lib/locale/translate/translate');

module.exports = async (request, response, delegate, next) => {
  const cart = await getCustomerCart(
    getContextValue(request, 'customerTokenPayload', {})
  );
  if (!cart) {
    response.redirect(302, buildUrl('cart'));
    return;
  }
  const items = cart.getItems();

  if (items.length === 0 || cart.hasItemError()) {
    response.redirect(302, buildUrl('cart'));
  } else {
    setContextValue(request, 'pageInfo', {
      title: translate('Checkout'),
      description: translate('Checkout')
    });
    setContextValue(request, 'cart_id', cart.getData('uuid'));
    next();
  }
};
