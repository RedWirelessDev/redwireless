/* eslint-disable no-unused-vars */
const { del, select } = require('@redsuperadmin/postgres-query-builder');
const { pool } = require('@redsuperadmin/redwireless/src/lib/postgres/connection');
const {
  OK,
  INTERNAL_SERVER_ERROR,
  INVALID_PAYLOAD
} = require('@redsuperadmin/redwireless/src/lib/util/httpStatus');

module.exports = async (request, response, delegate, next) => {
  try {
    const { id } = request.params;
    const attribute = await select()
      .from('attribute')
      .where('uuid', '=', id)
      .load(pool);

    if (!attribute) {
      response.status(INVALID_PAYLOAD);
      response.json({
        error: {
          status: INVALID_PAYLOAD,
          message: 'Invalid attribute id'
        }
      });
      return;
    }
    await del('attribute').where('uuid', '=', id).execute(pool);

    response.status(OK);
    response.json({
      data: attribute
    });
  } catch (e) {
    response.status(INTERNAL_SERVER_ERROR);
    response.json({
      error: {
        status: INTERNAL_SERVER_ERROR,
        message: e.message
      }
    });
  }
};
