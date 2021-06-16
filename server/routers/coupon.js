const { Router } = require("express"); //import router class from express
const router = new Router(); //create a new router class
const User = require("../models").user;
const Coupon = require("../models").coupon;

const { Op } = (Sequelize = require("sequelize"));

//get all coupon
// http GET :4000/coupons
router.get("/", async (req, res, next) => {
  try {
    const getCoupons = await Coupon.findAll();
    res.send(getCoupons);
  } catch (error) {
    next(error.message);
  }
});

//get specific coupon
router.get("/:code", async (req, res, next) => {
  try {
    const code = req.params.code;
    const specificCoupon = await Coupon.findOne({
      where: { code: code, validity: { [Op.gte]: new Date() } },
    }); ////opertaion >= today

    if (specificCoupon) {
      res.status(200).send(specificCoupon);
    } else {
      res.status(404).send("Your coupon code is not valid to use");
    }
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
