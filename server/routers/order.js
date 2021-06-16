const { Router } = require("express"); //import router class from express
const router = new Router(); //create a new router class
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const Order = require("../models").order;
const OrderItem = require("../models").orderItem;
const Product = require("../models").product;
const ProductReturn = require("../models").productReturn;

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

//create return
// http POST :4000/login email=jessy@gmail.com password=1234
// http POST :4000/orders/returnproduct orderId=3 productId=5 Authorization:"Bearer token"
router.post("/returnproduct", authMiddleware, async (req, res, next) => {
  try {
    const { orderId, returnProducts } = req.body;

    console.log("req body", req.body);

    returnProducts.forEach(async (pr) => {
      const returnProduct = await ProductReturn.create({
        orderId: orderId,
        productId: pr.productId,
        reason: pr.reason,
      });

      if (returnProduct) {
        const deleteItem = await OrderItem.destroy({
          where: { orderId: orderId, productId: pr.productId },
        });
      }
    });

    res.status(200).send({ message: "Product return successfully processed!" });
  } catch (error) {
    next(error);
  }
});

// //delete a specific order product while returning
// router.delete(
//   "/:orderId/:productId",
//   authMiddleware,
//   async (req, res, next) => {
//     try {
//       const oid = parseInt(req.params.orderId);
//       const pid = parseInt(req.params.productId);

//       if (Order.userId === req.user.id) {
//         const deleteRow = await OrderItem.destroy({
//           where: { orderId: oid, productId: pid },
//         });

//         res.status(200).send({ message: "Order product deleted" });
//       } else {
//         return res.status(400).send("You are not authorized to delete order");
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// );

module.exports = router;
