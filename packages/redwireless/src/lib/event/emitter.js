const { insert } = require('@redwireless/postgres-query-builder');
const { pool } = require('@redwireless/redwireless/src/lib/postgres/connection');

module.exports.emit = async function emit(name, data) {
  await insert('event')
    .given({
      name,
      data
    })
    .execute(pool);
};
