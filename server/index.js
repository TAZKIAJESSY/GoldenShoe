const express = require("express");
const loggerMiddleWare = require("morgan");
const { PORT } = require("./config/constants");

const authRouter = require("./routers/auth"); //import user router
const categoryRouter = require("./routers/category");
const productRouter = require("./routers/product");
const orderRouter = require("./routers/order");
const couponRouter = require("./routers/coupon");

const app = express(); //create an express server

const cors = require("cors");
app.use(cors());

//middlewares

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

//Registering the router to the app
app.use("/", authRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/coupons", couponRouter);

//start server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
