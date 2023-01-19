import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Employee from "./components/Employee/Employee";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/"></Link>
        <Link to="/Login"></Link>
        <Link to="/Employee"></Link>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Employee" element={<Employee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
