"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Shoe heroku",
          description: "Perfect for all types of sport",
          price: 50,
          imageUrl:
            "https://image.shutterstock.com/image-photo/sport-shoes-260nw-269007500.jpg",
          status: "available",
          stock: 10,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoe jordana",
          description: "Comfy and perfect for any outing",
          price: 20,
          imageUrl:
            "https://i.pinimg.com/originals/5a/6f/ce/5a6fce81928db6ed465a6eb12665a7db.jpg",
          status: "available",
          stock: 5,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoe history",
          description: "Leather texture and highly recommended one",
          price: 100,
          imageUrl:
            "https://marvel-b1-cdn.bc0a.com/f00000000114841/www.florsheim.com/styleguide/resources/images/about/styleTips/Q27/27header.jpg",
          status: "available",
          stock: 2,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
