"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          userId: 1,
          deliveryStatus: "2021-06-26",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          deliveryStatus: "2021-06-27",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
