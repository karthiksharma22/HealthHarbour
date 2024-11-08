import React from "react";

const DateOB = (props) => {
  const handlesubmit = async () => {
    let i = document.getElementsByTagName("input")[1].value;

    const formattedDate =
      String(i).slice(0, 10) + " on " + String(i).slice(11) + " hrs";

    await fetch(`http://localhost:5000/send-email/${props.booked.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: localStorage.getItem("username"),
        datetime: formattedDate,
        docname: `Dr. ${props.booked.name}`,
        pemail: localStorage.getItem("email"),
        demail: props.booked.demail,
      }),
    });

    alert("Appointment booked successfully");
  };

  return (
    <div>
      <h2>Select Date Time of your Appointment</h2>
      <input
        type="datetime-local"
        name=""
        id=""
        style={{
          backgroundColor: "#0877b0",
          color: "white",
          outline: 0,
          border: "none",
          padding: "10px",
          borderRadius: "5px",
        }}
      />{" "}
      <input
        type="submit"
        value="Book Appointment"
        style={{
          backgroundColor: "#198754",
          color: "white",
          outline: 0,
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          marginLeft: "60px",
        }}
        onClick={handlesubmit}
      />
    </div>
  );
};

export default DateOB;
