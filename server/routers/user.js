const { Router } = require("express"); //import router class from express
const router = new Router(); //create a new router class
const User = require("../models").user;

//get all users
// http GET :4000/users
router.get("/", async (req, res, next) => {
  try {
    const getUsers = await User.findAll();
    res.send(getUsers);
  } catch (error) {
    next(error.message);
  }
});

module.exports = router;
