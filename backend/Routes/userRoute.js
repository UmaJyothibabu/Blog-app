const express = require("express");
const router = express.Router();
const userData = require("../Model/user");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/user", async (req, res) => {});

router.post("/user", async (req, res) => {
  try {
    console.log(req.body);
    let item = req.body;
    const newUser = userData(item);
    const saveData = await newUser.save();
    res.json(saveData);
  } catch (error) {
    res.json("Unable to post");
  }
});
module.exports = router;
