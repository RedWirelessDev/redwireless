const { insert, select } = require('@redsuperadmin/postgres-query-builder');
const bcrypt = require('bcryptjs');
const { pool } = require('@redsuperadmin/redwireless/src/lib/postgres/connection');
const {
  OK,
  INTERNAL_SERVER_ERROR,
  INVALID_PAYLOAD
} = require('@redsuperadmin/redwireless/src/lib/util/httpStatus');
const { buildUrl } = require('@redsuperadmin/redwireless/src/lib/router/buildUrl');
const { debug } = require('@redsuperadmin/redwireless/src/lib/log/debuger');
const { emit } = require('@redsuperadmin/redwireless/src/lib/event/emitter');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate, next) => {
  const { body } = request;
  // eslint-disable-next-line camelcase
  const { email, full_name, password } = body;
  try {
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Check if email is already used
    const existingCustomer = await select()
      .from('customer')
      .where('email', '=', email)
      .load(pool);

    if (existingCustomer) {
      response.status(INVALID_PAYLOAD);
      response.json({
        error: {
          status: INVALID_PAYLOAD,
          message: 'Email is already used'
        }
      });
      return;
    }

    const status = 1;
    await insert('customer')
      .given({
        email,
        // eslint-disable-next-line camelcase
        full_name,
        password: hash,
        group_id: 1,
        status: status
      })
      .execute(pool);

    const customer = await select()
      .from('customer')
      .where('email', '=', email)
      .load(pool);

    // If status = 1, Emit event customer_registered
    // In case of status = 0, the custom extension will need to emit the event
    if (status === 1) {
      await emit('customer_registered', { ...customer });
    }

    response.status(OK);
    response.$body = {
      data: {
        ...customer,
        links: [
          {
            rel: 'customerGrid',
            href: buildUrl('customerGrid'),
            action: 'GET',
            types: ['text/xml']
          },
          {
            rel: 'edit',
            href: buildUrl('customerEdit', { id: customer.uuid }),
            action: 'GET',
            types: ['text/xml']
          }
        ]
      }
    };
    next();
  } catch (e) {
    debug('critical', e);
    response.status(INTERNAL_SERVER_ERROR);
    response.json({
      error: {
        status: INTERNAL_SERVER_ERROR,
        message: e.message
      }
    });
  }
};
