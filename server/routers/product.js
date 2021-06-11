const { Router } = require("express");
const router = new Router();

const Product = require("../models").product;

//Get all products
//http GET :4000/products
router.get("/", async (req, res, next) => {
  try {
    const getProducts = await Product.findAll();
    res.send(getProducts);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
