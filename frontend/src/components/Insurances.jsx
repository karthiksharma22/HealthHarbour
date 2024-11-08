import React from "react";
import "../styles/ins.css";

const Insurances = () => {
  return (
    <div style={{ margin: "40px" }}>
      <h2>Possible Health Insurances </h2>
      <table>
        <tr
          style={{
            fontWeight: "600",
            backgroundColor: "#618b68",
            color: "white",
          }}
        >
          <td>Name of Insurance</td>
          <td>Advantages</td>
          <td>Money</td>
        </tr>
        <tr>
          <td>HDFC ERGO</td>
          <td>Comprehensive coverage with a wide network of hospitals</td>
          <td>₹3 lakhs to ₹50 lakhs</td>
        </tr>
        <tr>
          <td>Max Bupa Health Insurance</td>
          <td>
            Offers various plans catering to different needs and budgets,
            including family floater and specific disease coverage
          </td>
          <td>₹2 lakhs to ₹1 crore</td>
        </tr>
        <tr>
          <td>Apollo Munich Health Insurance</td>
          <td>
            Range of plans with lifelong renewability and critical illness
            coverage
          </td>
          <td>₹5 lakhs to ₹50 lakhs</td>
        </tr>
        <tr>
          <td>ICICI Lombard Health Insurance</td>
          <td>
            Broad spectrum of health insurance plans with varying coverage
            options
          </td>
          <td>₹3 lakhs to ₹25 lakhs</td>
        </tr>
        <tr>
          <td>Star Health Insurance</td>
          <td>
            Known for senior citizen plans and policies for specific needs like
            diabetes, cancer, etc
          </td>
          <td>₹2 lakhs to ₹25 lakhs</td>
        </tr>
        <tr>
          <td>Religare Health Insurance</td>
          <td>
            Comprehensive plans with features like no claim bonus, lifelong
            renewability, etc
          </td>
          <td>₹5 lakhs to ₹75 lakhs</td>
        </tr>
        <tr>
          <td>ManipalCigna Health Insurance</td>
          <td>
            Various health insurance plans including comprehensive coverage and
            critical illness plans
          </td>
          <td>₹3 lakhs to ₹1 crore</td>
        </tr>
      </table>
    </div>
  );
};

export default Insurances;
