const { getConfig } = require('@redsuperadmin/redwireless/src/lib/util/getConfig');

module.exports = {
  Query: {
    themeConfig: () => getConfig('themeConfig')
  }
};
