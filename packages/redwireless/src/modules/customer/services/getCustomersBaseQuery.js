const { select } = require('@redwireless/postgres-query-builder');

module.exports.getCustomersBaseQuery = () => {
  const query = select().from('customer');

  return query;
};
