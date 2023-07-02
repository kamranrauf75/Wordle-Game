const express = require('express'); 
const CoursesCtrl =require("../api/courses.controller");


const router = express.Router()


console.log("Ehllo")
router
  .route("/add")
  .post(CoursesCtrl.apiAddCourse)

router
  .route("/login")
  .post(CoursesCtrl.apilogin)

router
  .route("/history")
  .post(CoursesCtrl.apihistory)

// router
//   .route("/leaderboard")
//   .post(CoursesCtrl.apileaderboard)
  

module.exports = router;