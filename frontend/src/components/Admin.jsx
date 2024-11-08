import React, { useState } from "react";
import "../styles/login1.css";

const Admin = () => {
  const [pw, setpw] = useState("");

  const [flag, setflag] = useState(false);

  const handleInputChange = (event) => {
    setpw(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Password value:", pw);
    if (pw === "nandu@123") {
      console.log("Password is valid!");
      setflag(true);
    } else {
      setflag(false);
      console.log("Password is too short. Please enter a longer password.");
    }
  };
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Authenticate for Admin</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label>Username </label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_3" data-name="Layer 3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
            </g>
          </svg>
          <input type="text" className="input" placeholder="Enter Username" />
        </div>

        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="-64 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <input
            type="password"
            className="input"
            placeholder="Enter Password"
            value={pw}
            onChange={handleInputChange}
          />
        </div>

        <button className="button-submit">Sign In</button>
      </form>
      {flag && (
        <form className="form">
          <h2 style={{ textAlign: "center" }}>Enter New Doctor Details</h2>
          <div className="flex-row">
            <label>Name </label>
          </div>
          <div className="inputForm">
            <input type="text" className="input" placeholder="Enter Name" />
          </div>

          <div className="flex-row">
            <label>Age </label>
          </div>
          <div className="inputForm">
            <input type="text" className="input" placeholder="Enter Age" />
          </div>
          <div className="flex-row">
            <label> work Experience</label>
          </div>
          <div className="inputForm">
            <input
              type="number"
              className="input"
              placeholder="Enter work experience in years"
            />
          </div>

          <div className="flex-row">
            <label>Category </label>
          </div>
          <div className="inputForm">
            <input type="text" className="input" placeholder="Enter Category" />
          </div>
          <div className="flex-row">
            <label>Qualifications </label>
          </div>
          <div className="inputForm">
            <input
              type="text"
              className="input"
              placeholder="Enter Qualifications"
            />
          </div>
          <div className="flex-row">
            <label>Profile photo </label>
          </div>
          <div className="inputForm-file">
            <input type="file" className="input" placeholder="Enter Name" />
          </div>

          <button className="button-submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Admin;
