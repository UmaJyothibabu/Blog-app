const express = require("express");
const router = express.Router();
const postData = require("../Model/posts");
const jwt = require("jsonwebtoken");
const auth = require("./auth");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Read
router.get("/viewall", auth, async (req, res) => {
  try {
    let posts = await postData.find();
    res.json(posts);
    // const tok = sessionStorage.getItem("userToken");
    // console.log(tok, "++++++++++++");
    // const authHeader = req.headers["authorization"];
    // console.log(authHeader);
    // const token = authHeader && authHeader.split(" ")[1];
    // console.log(token);
    // jwt.verify(token, "ict", (err, decoded) => {
    //   if (decoded && decoded.email) {
    //     console.log(decoded);

    //     console.log(posts);
    //     res.json(posts);
    //   } else {
    //     res.json({ message: "Unauthorised user" });
    //   }
    // });
  } catch (error) {
    res.json({ message: "Unable to load" });
  }
});

router.post("/addposts", auth, async (req, res) => {
  try {
    console.log(req.body);
    let item = req.body;
    const newPost = postData(item);
    console.log(newPost);
    await newPost.save();
    res.json({ message: "Posted successfully" });
    // res.json({ message: "Posted successfully" });
    // jwt.verify(req.body.token, "ict", (err, decoded) => {
    //   if (decoded && decoded.email) {
    //     newPost.save();
    //     res.json({ message: "Posted successfully" });
    //   } else {
    //     res.json({ message: "Unauthorised user" });
    //   }
    // });
  } catch (error) {
    res.json("Unable to post");
  }
});

router.delete("/posts/:id", auth, async (req, res) => {
  try {
    const postId = req.params.id;
    console.log(postId);
    const deletedPost = await postData.findByIdAndDelete(postId);
    console.log("Deleted");
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(400).json("Unable to delete");
  }
});

router.put("/edit/:id", auth, async (req, res) => {
  try {
    const item = req.body;
    const postId = req.params.id;
    console.log(postId);

    const updated = await postData.findByIdAndUpdate(postId, req.body);
    res.json({ message: "Updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Unable to update");
  }
});
module.exports = router;
