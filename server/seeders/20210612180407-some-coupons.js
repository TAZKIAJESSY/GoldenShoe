"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "coupons",
      [
        {
          userId: 1,
          code: "227374MN",
          value: 10,
          validity: "2021-06-27",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          code: "227376MN",
          value: 5,
          validity: "2021-07-27",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
