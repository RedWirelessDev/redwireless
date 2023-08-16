const {
  loadCsv
} = require('@redwireless/redwireless/src/lib/locale/translate/translate');

module.exports = async () => {
  await loadCsv();
};
