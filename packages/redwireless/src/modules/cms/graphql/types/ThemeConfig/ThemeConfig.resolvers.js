const { getConfig } = require('@redwireless/redwireless/src/lib/util/getConfig');

module.exports = {
  Query: {
    themeConfig: () => getConfig('themeConfig')
  }
};
