const CoursesDAO =require("../dao/coursesDAO");


class CoursesController {

    static async apiAddCourse(req, res, next) {
      try {
        // console.log("i wma here")
        const courseCode = req.body.code;
        const courseName = req.body.name;
        // const courseDescription = req.body.description;
         
        const CourseResponse = await CoursesDAO.addCourse(
          courseCode,
          courseName,
        //   courseDescription
        )
        if(CourseResponse == null){
            res.json({ status: "Signup_Failed" })
        }
        else{
            res.json({ status: "success" })
        }
       
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
    }

    static async apilogin(req, res, next) {
        try {
          // console.log("i wma here")
          const courseCode = req.body.code;
          const courseName = req.body.name;
          // const courseDescription = req.body.description;
           
          const CourseResponse = await CoursesDAO.login(
            courseCode,
            courseName,
          //   courseDescription
          )
          console.log("CourseResponse: ",CourseResponse)
          if(CourseResponse === "LogIn_Successful"){
            res.json({ status: "LogIn_Successful" })
          }
          if(CourseResponse === "LogIn_Failed"){
            res.json({ status: "LogIn_Failed" })
          }
          
        //   res.json({ status: "success" })
        } catch (e) {
          res.status(500).json({ error: e.message })
        }
      }

      static async apihistory(req, res, next) {
        try {
          // console.log("i wma here")
          const courseCode = req.body.code;
        //   const courseName = req.body.name;
          // const courseDescription = req.body.description;
           
          const CourseResponse = await CoursesDAO.login(
            courseCode,
            // courseName,
          //   courseDescription
          )
          console.log("CourseResponse: ",CourseResponse)
        //   if(CourseResponse === "LogIn_Successful"){
        //     res.json({ status: "LogIn_Successful" })
        //   }
        //   if(CourseResponse === "LogIn_Failed"){
        //     res.json({ status: "LogIn_Failed" })
        //   }
          res.json({ status: CourseResponse })
        //   res.json({ status: "success" })
        } catch (e) {
          res.status(500).json({ error: e.message })
        }
      }
      

    
  }

  module.exports = CoursesController;