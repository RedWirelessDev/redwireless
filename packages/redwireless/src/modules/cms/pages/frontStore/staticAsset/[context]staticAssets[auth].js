const staticMiddleware = require('@redwireless/redwireless/src/lib/middlewares/static');

module.exports = (request, response, stack, next) => {
  staticMiddleware(request, response, next);
};
