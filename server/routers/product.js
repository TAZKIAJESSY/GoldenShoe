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

//details of a specific product
//http GET :4000/produts/id
router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const specificProduct = await Product.findOne({ where: { id: id } });
    if (specificProduct) {
      res.status(200).send(specificProduct);
    } else {
      res.status(404).send("Not found");
    }
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
