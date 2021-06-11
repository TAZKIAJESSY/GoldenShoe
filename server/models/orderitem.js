"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orderItem.belongsTo(models.order, { foreignKey: "orderId" }); //join table
      orderItem.belongsTo(models.product, { foreignKey: "productId" }); //join table
    }
  }
  orderItem.init(
    {
      quantity: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orderItem",
    }
  );
  return orderItem;
};
