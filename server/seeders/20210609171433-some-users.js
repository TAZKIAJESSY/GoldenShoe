"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Tazkia",
          lastName: "Jessy",
          address: "Utrecht",
          email: "jessy@gmail.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "And",
          lastName: "Digital",
          address: "Amsterdam",
          email: "and@gmail.com",
          password: "welcome",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
