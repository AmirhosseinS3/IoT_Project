var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nodejsiot",
  database: "iotdb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (username, password) VALUES ?";
    var values = [
      ['AmirHossein', 'Estiri'],
      ['Shabnam', 'Sheikhha'],
      ['AmirReza', 'Shaeiri'],
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });