const { select } = require('@redwireless/postgres-query-builder');
const { camelCase } = require('@redwireless/redwireless/src/lib/util/camelCase');

module.exports = {
  Order: {
    paymentTransactions: async ({ orderId }, _, { pool }) => {
      const items = await select()
        .from('payment_transaction')
        .where('payment_transaction_order_id', '=', orderId)
        .execute(pool);
      return items.map((item) => camelCase(item));
    }
  }
};
