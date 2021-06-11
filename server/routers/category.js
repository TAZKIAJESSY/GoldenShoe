const { Router } = require("express");
const router = new Router();

const Category = require("../models").category;
const Product = require("../models").product;

//get all categories
// http GET :4000/categories
router.get("/", async (req, res, next) => {
  try {
    const getCategories = await Category.findAll();
    res.send(getCategories);
  } catch (error) {
    next(error.message);
  }
});

//products belonging to a specific category
//http GET :4000/categories/2
router.get("/:categoryId", async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const specificCategory = await Category.findByPk(categoryId, {
      include: [Product],
    });
    if (!specificCategory) {
      res.status(404).send("Category not found");
    } else {
      res.send(specificCategory);
    }
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
