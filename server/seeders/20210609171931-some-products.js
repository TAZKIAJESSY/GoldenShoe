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
          name: "Shoe black",
          description: "Perfect for all types of sport",
          price: 50,
          imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/51Tu6DO39QL._AC_SY1000_.jpg",
          status: "available",
          stock: 10,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoe blue",
          description: "Perfect for all types of sport",
          price: 70,
          imageUrl:
            "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000206776594_01_sw.jpg",
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
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoe summer",
          description: "Comfy and perfect for any outing",
          price: 45,
          imageUrl:
            "https://i.pinimg.com/originals/89/fb/6b/89fb6b34478fb7e38c00970e60dfe7da.jpg",
          status: "available",
          stock: 5,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoe grey",
          description: "Comfy and perfect for any outing",
          price: 35,
          imageUrl: "https://img-s.yoybuy.com/images/I/61nLzzZlsQL.jpg",
          status: "available",
          stock: 5,
          categoryId: 2,
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
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoe london",
          description: "Leather texture and highly recommended one",
          price: 110,
          imageUrl:
            "https://cdn.fashiola.co.uk/L704852999/venice-men-formal-shoes-mens-navy-lace-up-formal-shoes.jpg",
          status: "available",
          stock: 2,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoe spring",
          description: "Leather texture and highly recommended one",
          price: 150,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1209/9912/products/Bogart-Seude-Snake-formal-Shoes-Green-Pair_1600x.jpg?v=1620127721",
          status: "available",
          stock: 2,
          categoryId: 3,
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
