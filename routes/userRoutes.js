const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/add", controller.createUser);
router.post("/posts/add", controller.createPost);
router.get("/:id/posts", controller.getUserWithPosts);

module.exports = router;