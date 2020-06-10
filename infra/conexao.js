const mysql = require("mysql");

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "nodeapi",
  password: "nodeapi",
  database: "nodeapi",
});

module.exports = conexao;
