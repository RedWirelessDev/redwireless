const { select } = require('@redwireless/postgres-query-builder');

module.exports.getOrdersBaseQuery = () => {
  const query = select().from('order');

  return query;
};
