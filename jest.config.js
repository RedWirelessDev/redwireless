const config = {
  verbose: true,
  setupFilesAfterEnv: [require.resolve('regenerator-runtime/runtime')],
  testMatch: ['**/packages/redwireless/src/**/tests/unit/*.[jt]s?(x)'],
  coveragePathIgnorePatterns: [
    '<rootDir>/.redwireless/',
    '<rootDir>/node_modules/',
    '<rootDir>/packages/core/node_modules/'
  ]
}

module.exports = config;
