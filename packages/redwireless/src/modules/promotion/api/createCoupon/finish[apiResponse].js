const {
  commit,
  rollback,
  select
} = require('@redsuperadmin/postgres-query-builder');
const { pool } = require('@redsuperadmin/redwireless/src/lib/postgres/connection');
const { buildUrl } = require('@redsuperadmin/redwireless/src/lib/router/buildUrl');
const {
  OK,
  INTERNAL_SERVER_ERROR
} = require('@redsuperadmin/redwireless/src/lib/util/httpStatus');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate, next) => {
  const promises = [];
  Object.keys(delegate).forEach((id) => {
    // Check if middleware is async
    if (delegate[id] instanceof Promise) {
      promises.push(delegate[id]);
    }
  });
  const result = await delegate.createCoupon;
  const connection = await delegate.getConnection;
  const results = await Promise.allSettled(promises);
  const failed = results.find((r) => r.status === 'rejected');
  if (!failed) {
    await commit(connection);
    // Load the updated coupon
    const query = select().from('coupon');

    const coupon = await query
      .where('coupon_id', '=', result.insertId)
      .load(pool);

    response.status(OK);
    response.json({
      data: {
        ...coupon,
        links: [
          {
            rel: 'couponGrid',
            href: buildUrl('couponGrid'),
            action: 'GET',
            types: ['text/xml']
          },
          {
            rel: 'edit',
            href: buildUrl('couponEdit', { id: coupon.uuid }),
            action: 'GET',
            types: ['text/xml']
          }
        ]
      }
    });
  } else {
    await rollback(connection);
    response.status(INTERNAL_SERVER_ERROR);
    response.json({
      error: {
        status: INTERNAL_SERVER_ERROR,
        message: failed.reason.message
      }
    });
  }
};
