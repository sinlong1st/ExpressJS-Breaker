const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});
router.get("/new", (req, res) => {
  res.render("users/new");
});
router.post("/", (req, res) => {
  let isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

// We can do it all get, put, delete with method route in express like this:
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User ID: ${req.user.firstName} ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete: ${req.params.id}`);
  });
const users = [{ name: "Tai" }, { name: "Linh" }];
// router.param is a really good method in expressJS
// whenever it find the param (this case is id), it excecute the function and we can get that data wherever we want
// => save lots of code
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
