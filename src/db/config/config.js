require('dotenv/config')

module.exports = {
  development: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || 'Well.10091999',
    database: process.env.MYSQL_DATABASE || "DB_cdc",
    host: process.env.MYSQL_HOST || "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || "DB_cdc",
    host: process.env.MYSQL_HOST || "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || "DB_cdc",
    host: process.env.MYSQL_HOST || "127.0.0.1",
    dialect: "mysql"
  }

}