const {
  loadCsv
} = require('@redsuperadmin/redwireless/src/lib/locale/translate/translate');

module.exports = async () => {
  await loadCsv();
};
