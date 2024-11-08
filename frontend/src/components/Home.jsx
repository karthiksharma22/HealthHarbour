import React, { useEffect, useRef } from "react";
import "../styles/home.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="main">
      <div className="block">
        <div className="text">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Healing Lives, Empowering Care:",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Healing Lives, Empowering Care: Your Health,",
              1000,
              "Healing Lives, Empowering Care: Our Priority",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "27px",
              display: "inline-block",
              fontWeight: "500",
            }}
            repeat={Infinity}
          />
          <p className="para" style={{ color: "#626363" }}>
            Choose health, embrace wellness. Nourish your body, stay active, and
            make well-being a priority. A healthier you starts now!
          </p>
        </div>
        <img
          src="https://cdni.iconscout.com/illustration/free/thumb/free-doctor-2130490-1797869.png?f=webp"
          alt=""
          className="img"
        />
      </div>
    </div>
  );
};

export default Home;
