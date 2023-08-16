const { del } = require('@redwireless/postgres-query-builder');
const { pool } = require('@redwireless/redwireless/src/lib/postgres/connection');
const {
  OK,
  INTERNAL_SERVER_ERROR
} = require('@redwireless/redwireless/src/lib/util/httpStatus');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate, next) => {
  try {
    const { id } = request.params;
    // Delete the secret from the database
    await del('user_token_secret').where('user_id', '=', id).execute(pool);
    response.status(OK);
    response.$body = {
      data: {}
    };
    next();
  } catch (e) {
    response.status(INTERNAL_SERVER_ERROR);
    return response.json({
      error: {
        status: INTERNAL_SERVER_ERROR,
        message: e.message
      }
    });
  }
};
