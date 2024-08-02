// daftarkan express
const express = require("express");

const app = express();

// Setup Mongoose
const mongoose = require("mongoose");

// Setup Bcrypt
const bcrypt = require("bcrypt");

// Setup Model User
const User = require("./models/user");

// Setup Mongos
mongoose
  .connect("mongodb://localhost:27017/auth_demo")

  .then((result) => {
    console.log("Database Terhubung");
  })
  .catch((err) => {
    console.log(err);
  });

// Setup EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Setup Middleware
app.use(express.urlencoded({ extended: true }));

// Setup route Home
app.get("/", function (req, res) {
  res.render("home");
});

// Setup get Route Register
app.get("/register", (req, res) => {
  res.render("register");
});

// Setup post Route Register
app.post("/register", async(req, res) => {
    res.send(req.body);

    const { username, password } = req.body;

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();

    res.redirect("/");

   
  });
  

// Setup Route Admin
app.get("/admin", (req, res) => {
  res.send("Halaman Admin hanya boleh diakses oleh user dengan role admin");
});


// pemanggilan localhost:3000/
app.listen(3000, () => {
  console.log("Server Berjalan di Port 3000");
});
