const express = require("express");
const app = express();
app.use(express.static("public"));
// Set your view engine with ejs (or pug)
app.set("view engine", "ejs");
// app.use(logger); // should be on the top of the file if you want to use it everywhere, this is for every route
// app.get("/", logger, (req, res) => {
//   // If u just want it for this route, just put it between "/" and (req,res)
//   //   console.log("Got the request, responsed");
//   //   // Server response a json with default status
//   //   res.json({ message: "Default Status" });

//   // // Download the file:
//   //  res.download("server.js");

//   // Render HTML with EJS view engine. You can also send data with it
//   res.render("index", { text11: "index.ejs" });
// });

// Import your Routers
const userRouter = require("./routes/users");

// Use the Router
app.use("/users", userRouter);

// Create your middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.listen(3000);
