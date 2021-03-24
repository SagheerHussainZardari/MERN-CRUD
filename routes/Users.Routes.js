const User = require("../models/Users.Model");
const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send("Error: " + err);
    } else {
      res.send(users);
    }
  });
});

router.post("/add", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.send(req.body);
    })
    .catch((err) => {
      res.status(500).send("Error 500: User Not Added");
    });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  User.findByIdAndDelete(id).then((user) => {
    res.send("User " + id + " Deleted");
  });
});

router.put("/update/:id", (req, res) => {
  const id = req.params.id;

  User.findById(id, (err, user) => {
    if (!user) {
      res.send("No User Found!");
    } else {
      user.password = req.body.password;
      user.email = req.body.email;

      user.save().then((err, user) => {
        res.send("User update");
      });
    }
  });
});

module.exports =  router;
