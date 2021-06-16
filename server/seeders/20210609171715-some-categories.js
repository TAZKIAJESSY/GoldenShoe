"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "sports",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "casual",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "formal",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
