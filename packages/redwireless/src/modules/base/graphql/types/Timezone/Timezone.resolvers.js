const { timezones } = require('@redwireless/redwireless/src/lib/locale/timezones');

module.exports = {
  Query: {
    timezones: () => timezones
  }
};
