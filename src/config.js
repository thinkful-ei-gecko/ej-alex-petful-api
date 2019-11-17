module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  TEST_DATABASE_URL: process.env.DB_URL || 'postgresql://petful@localhost/petful-api-test',
};
