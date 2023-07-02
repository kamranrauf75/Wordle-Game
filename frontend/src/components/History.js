
import React from 'react';
import axios from 'axios';
import '../index.css';
import { useRef, useState, useEffect, useContext } from 'react';

// let g=""
export default class AddCourse extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
          course_code: '',
        //   course_name: '',
          
          course_description: "false",
   }

//    const [success, setSuccess] = useState(false);
   //Execution context

   this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
//    this.onChangeCourseName = this.onChangeCourseName.bind(this);
//    this.onChangeCourseDescription = this.onChangeCourseDescription.bind(this); //success
   this.onSubmit = this.onSubmit.bind(this);
  }



  
render() {
  return (

    <div style={{marginTop: 10}}>
        <h3>Accessing History</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
                <label>Write y to access history: </label>
                <input 
                        type="text" 
                        className="form-control"
                        value={this.state.course_code}
                        onChange={this.onChangeCourseCode}
                        />
            </div>
          
            {/* <div className="form-group"> 
                <label>Password: </label>
                <input  type="text"
                        className="form-control"
                        value={this.state.course_name}
                        onChange={this.onChangeCourseName}
                        />
            </div> */}
            
            <div className="form-group">
                <input type="submit" value="history" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}

// onChangeCourseName(e) {
//   this.setState({
//       course_name: e.target.value
//   });
// }

// onChangeCourseDescription(e) {
//   this.setState({
//       course_description: e.target.value
//   });
// }

onChangeCourseCode(e) {
  this.setState({
      course_code: e.target.value
  });
}

onSubmit(e) {
  e.preventDefault();

  console.log(`Form submitted:`);
  console.log(`Course Code: ${this.state.course_code}`);
//   console.log(`Course Name: ${this.state.course_name}`);
  // console.log(`Course Description: ${this.state.course_description}`);
  
  const course = {

    code : this.state.course_code,
    // name : this.state.course_name,
    // description: this.state.course_description
  };
  

  console.log("fff")
//   console.log(this.state.course_description);

  axios.post('http://localhost:9000/history', course )
          .then( res => {

              console.log(res.data)
            //   if (res.data.status == "LogIn_Failed"){
            //       alert("Login Failed")
            //   }
            //   else if(res.data.status == "LogIn_Successful") {
            //     alert("Login Successfully")

            //     // this.setState({
            //     //     course_description: "true"
            //     // });
            //     console.log("3: ",this.state.course_description);
            //   }
            //   else{
            //       alert("sdn")
            //   }

            //   console.log("2: ",this.state.course_description);
            } );

console.log("fff")


//  console.log(JSON.stringify(response?.data));

   //resetting the sate       
  this.setState({
    course_code: '',
    course_name: '',
    // course_description: '',

  }); 
}

}

// new code

