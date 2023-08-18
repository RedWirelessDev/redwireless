const { select } = require('@redsuperadmin/postgres-query-builder');
const { pool } = require('@redsuperadmin/redwireless/src/lib/postgres/connection');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, stack, next) => {
  response.json({
    data: {
      cost: 900
    }
  });
};
