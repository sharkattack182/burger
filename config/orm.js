
var connection = require("../config/connection.js");

var orm = {
  selectAll: function() {
    connection.query("SELECT * FROM burgers ORDER BY ID", function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function(burger_name) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES ??";
    console.log(queryString);
    connection.query(queryString, [burger_name], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function(id) {
    var queryString =
    "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString, [id], function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;