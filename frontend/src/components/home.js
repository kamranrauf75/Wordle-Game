
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import {Routes, Route, Link } from "react-router-dom";


// function App() {

//   return (
//     <main className="App">
//       <Login />
//     </main>
//   );
// }


function App() {
  return (
    <div>
    {/* <nav className="navbar navbar-expand navbar-dark bg-dark"> */}
      <a href="/" className="navbar-brand">
        Wordle
      </a>
      {/* <div className="navbar-nav mr-auto">
        <li className="nav-item"> */}
        <button type="button" class="btn btn-primary btn-lg">
            <Link to={"/"} className="nav-link">
            Logout
            </Link>
        </button>
          
        {/* </li>
        <li className="nav-item"> */}
          <button type="button" class="btn btn-primary btn-lg">
            <Link to={"/Leaderboard"} className="nav-link">
            Leaderboard

            </Link>
        </button>
        {/* </li>
        <li className="nav-item"> */}
        <button type="button" class="btn btn-primary btn-lg">
            <Link to={"/game"} className="nav-link">
            Game
            </Link>
        </button>

        <button type="button" class="btn btn-primary btn-lg">
            <Link to={"/History"} className="nav-link">
            History
            </Link>
        </button>
        {/* </li> */}

      {/* </div> */}
    {/* </nav> */}
      {/* <div className="container mt-3">
        <Routes>
        <Route 
            path="/add" element={<AddCourse />}
          />
          
          <Route 
            path="/" element={<Login />}
          />
         
         <Route 
            path="/courses" element={<CourseList />}
          />
          <Route 
            path="/function-component" element={<FunctionalComponentWithState />}
          />

                 
          
        </Routes>
      </div> */}
    </div>
  );
  
}

export default App;


// function
