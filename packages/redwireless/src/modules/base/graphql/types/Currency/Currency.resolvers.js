const { currencies } = require('@redsuperadmin/redwireless/src/lib/locale/currencies');

module.exports = {
  Query: {
    currencies: () => currencies
  }
};
