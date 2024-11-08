import React from "react";
import "../styles/doctor.css";

const Doctor = (props) => {
  const capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  return (
    <div className="doccontainer">
      <img src={props.details.img} alt="no img" />
      <div className="docbody">
        <h2> {capitalize(props.details.name)} </h2>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            {capitalize(props.details.category)} - {props.details.age} yrs
          </p>
          <p>
            <i className="fa-solid fa-star" style={{ color: "#e7eb05" }}>
              {" " + (props.details.rating ? props.details.rating : "0.0  ")}
            </i>
          </p>
        </p>
        <p>
          <i
            className="fa-solid fa-user"
            style={{ color: "#618b68", marginRight: "13px" }}
          ></i>
          {props.details.patients + " "}
          patients
        </p>
        <p>
          <i
            className="fa-regular fa-hourglass-half"
            style={{ color: "#618b68", marginRight: "13px" }}
          ></i>
          {props.details.experience} years Experience
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#225178",
            fontStyle: "italic",
            textDecoration: "underline",
          }}
        >
          <i
            className="fa-solid fa-envelope"
            style={{ color: "#618b68", marginRight: "13px" }}
          ></i>
          {props.details.mail}
        </p>
        <p style={{ marginBottom: "20px" }}>
          <i
            className="fa-solid fa-stethoscope"
            style={{ color: "#618b68", marginRight: "13px" }}
          ></i>
          {props.details.qualifications}
        </p>
        <button
          className="btnnnn"
          onClick={() => {
            props.setbooked({
              name: props.details.name,
              demail: props.details.mail,
              id: props.details._id,
            });
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Doctor;
