import { useLocation, Link } from "react-router-dom";
import "../styles/navbar.css";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const NavBar = (props) => {
  const location = useLocation();
  const nav = () => {};
  return (
    <div className="navbar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdFMDQw2SKsbFzeD-FEnFVnlmcGxr_-xZ0kSWfbyaa6twa0fTmS4WRU5YwfuYMUiBNW8&usqp=CAU"
        alt=""
        className="logo"
      />
      <div className="logos">
        <div className="icon-container">
          <Link className="link" to="/">
            <i
              className={`fa-solid fa-house fa-xl ${
                location.pathname === "/" ? "active" : ""
              }`}
            ></i>
            <span className="icon-text">Home</span>
          </Link>
        </div>
        <div className="icon-container">
          <Link className="link" to="/book">
            <i
              className={`fa-solid fa-user-doctor fa-xl ${
                location.pathname === "/book" ? "active" : ""
              }`}
            ></i>
            <span className="icon-text">Book Appointment</span>
          </Link>
        </div>
        <div className="icon-container">
          <Link className="link" to="/reports">
            <i
              className={`fa-solid fa-file-medical fa-xl ${
                location.pathname === "/reports" ? "active" : ""
              }`}
            ></i>
            <span className="icon-text">Reports</span>
          </Link>
        </div>
        <div className="icon-container">
          <Link className="link" to="/dashboard">
            <i
              className={`fa-solid fa-chart-line fa-xl ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            ></i>
            <span className="icon-text">Dashboard</span>
          </Link>
        </div>
        <div className="icon-container">
          <Link className="link" to="/userlogin" onClick={props.lg}>
            <i
              className={`fa-solid fa-bed fa-xl ${
                location.pathname === "/userlogin" ? "active" : ""
              }`}
            ></i>
            <span className="icon-text">User Login</span>
          </Link>
        </div>
        <div className="icon-container">
          <Link className="link" to="/doclogin">
            <i
              className={`fa-solid fa-user-nurse fa-xl ${
                location.pathname === "/doclogin" ? "active" : ""
              }`}
            ></i>
            <span className="icon-text">Doctor Login</span>
          </Link>
        </div>
        <div className="icon-container">
          <Link className="link" to="/insurances">
            <i
              className={`fa-solid fa-money-check-dollar fa-xl ${
                location.pathname === "/insurances" ? "active" : ""
              }`}
            ></i>
            <span className="icon-text">Insurances</span>
          </Link>
        </div>
      </div>

      <div className="logout">
        <i
          class="fa-solid fa-arrow-right-from-bracket fa-2xl"
          style={{ cursor: "pointer" }}
          onClick={props.logout}
        ></i>
      </div>
    </div>
  );
};

export default NavBar;
