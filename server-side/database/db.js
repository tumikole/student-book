const { Pool } = require("pg");

const pool = new Pool({
  user: "tumi",
  host: "localhost",
  database: "library",
  password: "mypassword",
  port: 5432,
});

const getClient = async () => {
  const client = await pool.connect();
  return client;
};

module.exports = {
  getClient,
};
