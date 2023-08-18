const { insert } = require('@redsuperadmin/postgres-query-builder');
const { pool } = require('@redsuperadmin/redwireless/src/lib/postgres/connection');

module.exports.emit = async function emit(name, data) {
  await insert('event')
    .given({
      name,
      data
    })
    .execute(pool);
};
