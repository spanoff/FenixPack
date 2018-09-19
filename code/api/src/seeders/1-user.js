'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "The Admin",
        email: "admin@itq.space",
        password: bcrypt.hashSync("123456", config.saltRounds),
        role: params.user.roles.admin,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The User",
        email: "user@itq.space",
        password: bcrypt.hashSync("123456", config.saltRounds),
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Александр Владимирович",
        email: "asto@itq.space",
        password: bcrypt.hashSync("123456", config.saltRounds),
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
