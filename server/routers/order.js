const { Router } = require("express"); //import router class from express
const router = new Router(); //create a new router class
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const Order = require("../models").order;
const OrderItem = require("../models").orderItem;
const Product = require("../models").product;

// //create a new order for user
// // http POST :4000/orders

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    //Expected delivery date - 7 days ahead
    const expectedDate = new Date() + 7;

    const order = await Order.create({
      userId: req.user.id,
      status: "Confirmed",
      expectedDelivery: expectedDate,
    });

    if (order) {
      req.body.items.forEach(async (item) => {
        const orderItems = await OrderItem.create({
          quantity: item.quantity,
          productId: item.product.id,
          orderId: order.id,
        });
      });

      res.send(order);
    } else {
      res.status(400).send("Unable to create the order");
    }
  } catch (e) {
    next(e.message);
  }
});

//get user order
// http POST :4000/login email=jessy@gmail.com password=1234
// http GET :4000/orders  Authorization:"Bearer token"

router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const myOrders = await Order.findAll({
      include: [Product],
      where: { userId: req.user.id },
    });

    if (myOrders) {
      res.status(200).send(myOrders);
    } else {
      res.status(404).send("No order found");
    }
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
