const { timezones } = require('@redsuperadmin/redwireless/src/lib/locale/timezones');

module.exports = {
  Query: {
    timezones: () => timezones
  }
};
