const { select } = require('@redwireless/postgres-query-builder');

module.exports.getCollectionsBaseQuery = () => {
  const query = select().from('collection');

  return query;
};
