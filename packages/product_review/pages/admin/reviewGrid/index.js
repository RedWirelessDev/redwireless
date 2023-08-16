const {
  buildFilterFromUrl
} = require('@redwireless/redwireless/src/lib/util/buildFilterFromUrl');
const {
  setContextValue
} = require('@redwireless/redwireless/src/modules/graphql/services/contextHelper');

// eslint-disable-next-line no-unused-vars
module.exports = (request, response) => {
  setContextValue(request, 'pageInfo', {
    title: 'Reviews',
    description: 'Reviews'
  });
  const { query } = request;
  setContextValue(request, 'filtersFromUrl', buildFilterFromUrl(query));
};