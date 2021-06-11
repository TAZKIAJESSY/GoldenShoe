=>**user---order**

user.hasMany(models.order)

order.belongsTo(models.user, { foreignKey: "userId" })

=>**category---product**

category.hasMany(models.product)

product.belongsTo(models.category, { foreignKey: "categoryId" })

=>**order--orderItems--product**

order.belongsToMany(models.product, {
through: "orderItem",
foreignKey: "orderId",
});

product.belongsToMany(models.order, {
through: "orderItem",
foreignKey: "productId",
});

      orderItem.belongsTo(models.order, { foreignKey: "orderId" }); //join table
      orderItem.belongsTo(models.product, { foreignKey: "productId" }); //join table
