"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productReturn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productReturn.belongsTo(models.order, { foreignKey: "orderId" });
      productReturn.belongsTo(models.product, { foreignKey: "productId" });
    }
  }
  productReturn.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      reason: DataTypes.STRING,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "productReturn",
    }
  );
  return productReturn;
};
