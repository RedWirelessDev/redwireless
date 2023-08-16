const { select } = require('@redwireless/postgres-query-builder');

module.exports.getCouponsBaseQuery = () => {
  const query = select().from('coupon');

  return query;
};
