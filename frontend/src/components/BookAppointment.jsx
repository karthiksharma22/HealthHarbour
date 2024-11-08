import React, { useState, useEffect } from "react";
import Doctor from "./Doctor";
import "../styles/book.css";
import DateOB from "./DateOB";

const BookAppointment = () => {
  const [category, setcategory] = useState("");
  const [booked, setbooked] = useState(false);
  const [doctor, setdoctor] = useState({});
  const [time, settime] = useState(Date.now());

  useEffect(() => {
    const getdocdetails = async () => {
      const response = await fetch(`http://localhost:5000/fecthdoctordetails`);
      const data = await response.json();
      setdoctor(data.doctor_categories);
      settime(Date.now());
    };

    getdocdetails();
  }, [time]);

  const handleChange = (e) => {
    setcategory(e.target.value);
  };

  return (
    <div className="main">
      <h1>Select the Category</h1>
      <input type="text" value={category} onChange={handleChange} />

      {
        <div className="container">
          {doctor[category] === undefined
            ? "No Doctors in this Category"
            : doctor[category].map((ele) => {
                return <Doctor details={ele} setbooked={setbooked} />;
              })}
        </div>
      }

      {booked && <DateOB booked={booked} />}
    </div>
  );
};

export default BookAppointment;
