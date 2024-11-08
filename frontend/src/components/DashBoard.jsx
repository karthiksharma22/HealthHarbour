import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const DashBoard = (props) => {
  const chartRef = useRef(null);
  const [user, setuser] = useState(0);
  const [avg, setavg] = useState(0);
  const [show, setshow] = useState(false);

  useEffect(() => {
    // Sample data
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
      ],
      datasets: [
        {
          label: "Your Test Results",
          data: [65, 59, 80, 81, 56, 43, 53, 65, 43, 78],
          fill: true,
          borderColor: "#750899",
          tension: 0.1,
        },
        show == true
          ? {
              label: "Average Test Results",
              data: [45, 30, 60, 40, 75, 32, 35, 40, 35, 36],
              fill: true,
              borderColor: "rgb(255, 99, 132)",
              tension: 0.1,
            }
          : {},
      ],
    };

    setuser(
      data.datasets[0].data.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0)
    );

    show &&
      setavg(
        data.datasets[1].data.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        }, 0)
      );

    // Chart configuration
    const config = {
      type: "line",
      data: data,
    };

    // Create the chart
    const myChart = new Chart(chartRef.current, config);

    // Cleanup on component unmount
    return () => {
      myChart.destroy();
    };
  }, [show]); // Empty dependency array to run the effect only once

  return (
    <div style={{ margin: "40px 40px" }}>
      <h2>Your Periodic Test Analysis</h2>

      {props.isLoggedIn ? (
        <>
          <div
            style={{ margin: "30px 0px", opacity: "0.6", cursor: "pointer" }}
            onClick={() => setshow(true)}
          >
            Compare with the average person ?{" "}
            <b style={{ textDecoration: "underline" }}>
              <i> Click Here </i>
            </b>
          </div>
          <canvas ref={chartRef} width={500} height="200"></canvas>
        </>
      ) : (
        "Login to see Analytics"
      )}

      {props.isLoggedIn && show ? (
        user / 10 > avg / 10 ? (
          <i>
            <p>**** Your situtation is worse than an average person</p>
          </i>
        ) : (
          <i>
            <p>**** Your situtation is better than an average person</p>
          </i>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default DashBoard;
