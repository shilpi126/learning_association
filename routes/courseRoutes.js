const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.post("/addcourses", courseController.addCourse);
router.post("/addStudentCourses", courseController.addStudentsToCourses);

module.exports = router;