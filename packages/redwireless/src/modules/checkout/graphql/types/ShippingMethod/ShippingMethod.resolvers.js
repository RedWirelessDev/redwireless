const { select } = require('@redwireless/postgres-query-builder');
const { pool } = require('@redwireless/redwireless/src/lib/postgres/connection');
const { camelCase } = require('@redwireless/redwireless/src/lib/util/camelCase');

module.exports = {
  Query: {
    shippingMethods: async () => {
      const shippingMethods = await select()
        .from('shipping_method')
        .orderBy('shipping_method_id', 'DESC')
        .execute(pool);
      return shippingMethods.map((row) => camelCase(row));
    }
  }
};
