const express = require("express");
const router = express.Router();
const userData = require("../Model/user");
const jwt = require("jsonwebtoken");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username);
  let data = await userData.find({
    username: username,
  });

  if (!data.length) {
    res.json({ message: "User not found" });
  }
  try {
    let userinfo = data.find((value) => value.password === password);
    if (userinfo) {
      jwt.sign(
        { email: username, id: userinfo._id },
        "ict",
        {
          expiresIn: "1d",
        },
        (err, token) => {
          if (err) {
            res.json({ message: "Token not generated" });
          } else {
            res.json({
              message: "Login successfully",
              token: token,
              data: userinfo,
            });
          }
        }
      );
    } else {
      res.json({ message: "Login failed" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    let item = req.body;
    const newUser = userData(item);
    const saveData = await newUser.save();
    res.json({ message: "Registered successfully" });
  } catch (error) {
    res.json("Unable to post");
  }
});
module.exports = router;
