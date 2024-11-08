import BookAppointment from "./components/BookAppointment";
import React, { useState } from "react";

import ChatBot from "./components/ChatBot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./styles/App.css";
import Reports from "./components/Reports";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import DashBoard from "./components/DashBoard";
import Insurances from "./components/Insurances";
import Admin from "./components/Admin";

function App() {
  const [img, setimg] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9t4ColDnY4w2KJuyo3VQk9l41rWpG35ullBgK_N31C9lKwMVdS9qm90BkeLUKStT4oY&usqp=CAU"
  );
  const [result2, setresult] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyCqvjV3hp5zH03Xseik1EphvGKsWULi6ww",
    authDomain: "test-27b5d.firebaseapp.com",
    projectId: "test-27b5d",
    storageBucket: "test-27b5d.appspot.com",
    messagingSenderId: "449984571870",
    appId: "1:449984571870:web:7c7eb2384e6a5d81d6154f",
  };
  const app = initializeApp(firebaseConfig);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("auth-token")
  );

  const lg = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(getAuth(app), provider);

      setimg(result.user.photoURL);
      setresult(result);
      localStorage.setItem(
        "auth-token",
        result._tokenResponse.oauthAccessToken
      );
      setIsLoggedIn(true);
      // Update state to trigger re-render
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    if (localStorage.getItem("auth-token")) {
      localStorage.removeItem("auth-token");
      await signOut(getAuth(app));
      setIsLoggedIn(false); // Update state to trigger re-render
      setimg(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9t4ColDnY4w2KJuyo3VQk9l41rWpG35ullBgK_N31C9lKwMVdS9qm90BkeLUKStT4oY&usqp=CAU"
      );
    }
  };
  return (
    <div>
      <Router>
        <ChatBot />
        <div className="home">
          <div className="navbar">
            <NavBar lg={lg} logout={logout} />
          </div>
          <div className="section">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/book" element={<BookAppointment />} />
              <Route exact path="/reports" element={<Reports />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route
                exact
                path="/dashboard"
                element={<DashBoard isLoggedIn={isLoggedIn} />}
              />
              <Route exact path="/insurances" element={<Insurances />} />
            </Routes>
          </div>
          <div className="user">
            <div className="info">
              <img src={img} alt="" />

              {isLoggedIn && result2 ? (
                <div>
                  <p style={{ textAlign: "center", fontWeight: "600" }}>
                    {" "}
                    {result2.user.displayName}
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      opacity: "0.8",
                    }}
                  >
                    {" "}
                    {result2.user.email}
                    {localStorage.setItem("email", result2.user.email)}
                    {localStorage.setItem("username", result2.user.displayName)}
                  </p>
                </div>
              ) : (
                <p style={{ color: "White" }}>Login to Continue</p>
              )}
            </div>

            {isLoggedIn && (
              <div className="apps">
                <div className="appts">
                  <img
                    src="https://wp.scoopwhoop.com/wp-content/uploads/2022/11/image-32.png?w=1024"
                    alt=""
                  />
                  <p>12th Jan 2023 with Dr Selvig</p>
                </div>
                <div className="appts">
                  <img
                    src="https://www.boardvitals.com/wp-content/uploads/2016/03/Defibrifail-1024x683.jpg"
                    alt=""
                  />
                  <p>15th Jan 2023 with Dr HoLee</p>
                </div>
                <div className="appts">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_640.jpg"
                    alt=""
                  />
                  <p>15th Feb 2023 with Dr Clarie</p>
                </div>
                <div className="appts">
                  <img
                    src="https://64.media.tumblr.com/167c2ffa6f84ed752caa8124fb2e3423/25e49f13b70e4700-7a/s1280x1920/c1a6e8caa9a24b65385bdeef8907e23f70597604.jpg"
                    alt=""
                  />
                  <p>8th May 2023 with Dr Solace</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
