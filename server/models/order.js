"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.user, { foreignKey: "userId" }); //order-user relationship

      order.belongsToMany(models.product, {
        through: "orderItem",
        foreignKey: "orderId",
      });
    }
  }
  order.init(
    {
      userId: DataTypes.INTEGER,
      deliveryStatus: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
