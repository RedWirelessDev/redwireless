const staticMiddleware = require('@redsuperadmin/redwireless/src/lib/middlewares/static');

module.exports = (request, response, stack, next) => {
  staticMiddleware(request, response, next);
};
