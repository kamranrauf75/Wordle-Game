
const mongodb = require("mongodb");
const dotenv = require("dotenv");

let courses;
 
dotenv.config();

class CoursesDAO {
  static async injectDatabase(conn) {
    if (courses) {
      return
    }
    try {
      courses = await conn.db(process.env.COURSES_DB_NAME).collection("courses")
    } catch (e) {
      console.error(
        `Unable to access the collection handle in CoursesDAO: ${e}`,
      )
    }
  }

  
  
  static async addCourse(courseCode, courseName, courseDescription) {

    console.log("addCourse", courseCode);
    
    try {
      const courseDoc = { 
          code: courseCode,
          name: courseName,
        //   description: courseDescription 
        }
    console.log("result: ",);
    let result = await courses.findOne({code: courseCode});
    console.log("result: ",result);

    if (result = null) {
        return await courses.insertOne(courseDoc)
    }
    else{
        console.log("User Already exists")

        return null
    }

      
    } catch (e) {
      console.error(`Unable to add the course: ${e}`)
      return { error: e }
    }
  }

  static async login(courseCode, courseName, courseDescription) {

    console.log("Log In attempt", courseCode);
    
    try {
      const courseDoc = { 
          code: courseCode,
          name: courseName,
        //   description: courseDescription 
        }
        //change it not working
      let result = await courses.findOne(courseDoc);  //from website reffered by sir
        // if (err) throw err;
        console.log(result);

        if (result != null) {
            console.log("Log in successfuly")
            return "LogIn_Successful"
        }
        else{
            console.log("Log in failed")
            return "LogIn_Failed"
        }

        // db.close();
     
    } catch (e) {
      console.error(`Unable to Log in: ${e}`)
      return { error: e }
    }


  }

  static async login(courseCode, courseName, courseDescription) {

    console.log("Log In attempt", courseCode);
    
    try {
      const courseDoc = { 
          code: courseCode,
        //   name: courseName,
        //   description: courseDescription 
        }
        //change it not working

      let result = await courses.find({}).toArray();  //from website reffered by sir
        // if (err) throw err;
        console.log("re: ",result);

        return result;

        // if (result == null) {
        //     console.log("Log in successfuly")
        //     return "Successful"
        // }
        // else{
        //     console.log("Log in failed")
        //     return "Failed"
        // }

        // db.close();
     
    } catch (e) {
      console.error(`Unable to Log in: ${e}`)
      return { error: e }
    }


  }


}

module.exports = CoursesDAO;
