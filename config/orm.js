
var connection = require("../config/connection.js");

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}



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

  updateOne: function(condition, cb) {
    var queryString =
    "UPDATE burgers SET devoured = true WHERE " + condition;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;