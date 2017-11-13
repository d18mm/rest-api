'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    password:DataTypes.STRING,
    role:DataTypes.STRING,
    salt:DataTypes.STRING
  });
  return User;
};
