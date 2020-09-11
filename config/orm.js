
var connection = require("../config/connection.js");

var orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers ORDER BY ID", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(burger_name, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES ??";
    console.log(queryString);
    connection.query(queryString, burger_name, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(id, cb) {
    var queryString =
    "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString, id, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;