// Set up MySQL connection.
var mysql = require("mysql");

var connection;

// connection= mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "",
//   password: "",
//   database: "krusty_krab_db"
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
  else {
    connection = mysql.createConnection({
      host: "enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "g31yha3y4y6rh7it",
      password: "absdcgcn00h0vlet",
      database: "a17pz637jmnud92k"
    });
  };
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
