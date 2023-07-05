const express = require("express");
const router = express.Router();
const postData = require("../Model/posts");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Read
router.get("/posts", async (req, res) => {
  try {
    let data = await postData.find();
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
});

router.post("/posts", async (req, res) => {
  try {
    console.log(req.body);
    let item = req.body;
    const newPost = postData(item);
    const saveData = await newPost.save();
    res.json(saveData);
  } catch (error) {
    res.json("Unable to post");
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    console.log(postId);
    const deletedPost = await postData.findByIdAndDelete(postId);
    console.log("Deleted");
    res.json(deletedPost);
  } catch (error) {
    res.status(400).json("Unable to delete");
  }
});

router.put("/posts", async (req, res) => {
  try {
    const item = req.body;
    const postId = req.body._id;
    console.log(postId);
    const updateData = {
      $set: {
        title: req.body.title,
        content: req.body.content,
        img_url: req.body.img_url,
        createdAt: req.body.createdAt,
      },
    };
    console.log(updateData);
    const updated = await postData.findByIdAndUpdate(postId, updateData);
    res.send(updated);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Unable to update");
  }
});
module.exports = router;
