"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      coupon.belongsTo(models.user, { foreignKey: "userId" }); //coupon-user relationship
    }
  }
  coupon.init(
    {
      userId: DataTypes.INTEGER,
      code: DataTypes.STRING,
      value: DataTypes.INTEGER,
      validity: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "coupon",
    }
  );
  return coupon;
};
