"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category, { foreignKey: "categoryId" }); //category-product relation

      product.belongsToMany(models.order, {
        through: "orderItem",
        foreignKey: "productId",
      });

      // product.belongsToMany(models.order, {
      //   through: "productReturn",
      //   foreignKey: "productId",
      // });
    }
  }

  product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      price: DataTypes.INTEGER,
      status: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
