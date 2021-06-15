"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "productReturns",
      [
        {
          orderId: 1,
          productId: 3,
          reason: "color issue",
          comment: "urgent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          productId: 2,
          reason: "size issue",
          comment: "Urgent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("productReturns", null, {});
  },
};
