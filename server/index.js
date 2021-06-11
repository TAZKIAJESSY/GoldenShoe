const express = require("express"); //import express
const cors = require("cors"); //import cors

const userRouter = require("./routers/user"); //import user router
const categoryRouter = require("./routers/category");
const productRouter = require("./routers/product");

const port = 4000;
const app = express(); //create an express server

//middlewares
const jsonParser = express.json();
app.use(jsonParser);
app.use(cors());

//Registering the router to the app
app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);

//start server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
