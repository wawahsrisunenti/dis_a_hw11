const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "host.docker.internal",
  database: "db_todo",
  password: "Beauty6969",
  port: 5432,
});

module.exports = pool;
