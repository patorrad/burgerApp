// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.CLEARDB_DATABASE_URL) {
  connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burger_db"
});
};

//mysql://b633cf825fa8ea:9b9fac6e@us-cdbr-iron-east-05.cleardb.net/heroku_2e2cb7e01d6da89?reconnect=true

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
