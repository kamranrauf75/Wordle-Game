import './App.css';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import {Routes, Route, Link } from "react-router-dom";

import AddCourse from "./components/add-course";
/*import EditCourse from "./components/edit-course"; */
import CourseList from "./components/course-list";
import Login from "./components/Login";

import History from "./components/History";

import Apphome from "./components/home";
import Appgame from "./components/game";

import FunctionalComponentWithState from "./components/function-component-state.js";



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
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        Wordle
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/courses"} className="nav-link">
            Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add a User
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/function-component"} className="nav-link">
            Function compoenent
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/game"} className="nav-link">
            Game
          </Link>
        </li>

      </div>
    </nav>
      <div className="container mt-3">
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
          <Route 
            path="/home" element={<Apphome />}
          />

          <Route 
            path="/game" element={<Appgame />}
          />

          <Route 
            path="/History" element={<History />}
          />

                 
          
        </Routes>
      </div>
    </div>
  );
  
}

export default App;