const { getConfig } = require('@redsuperadmin/redwireless/src/lib/util/getConfig');

module.exports = {
  Query: {
    carriers: () => {
      const carriers = getConfig('oms.carriers', {});
      return Object.keys(carriers).map((key) => {
        return {
          ...carriers[key],
          code: key
        };
      });
    }
  }
};
