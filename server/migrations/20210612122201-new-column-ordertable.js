"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("orders", "expectedDelivery", {
      type: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("orders", "expectedDelivery");
  },
};
