const { currencies } = require('@redwireless/redwireless/src/lib/locale/currencies');

module.exports = {
  Query: {
    currencies: () => currencies
  }
};
