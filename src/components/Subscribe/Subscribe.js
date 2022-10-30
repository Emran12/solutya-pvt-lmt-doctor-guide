import React from "react";
import "./Subscribe.css";
import people1 from "../../assets/images/people1.png";
import dotGrid from "../../assets/shapes/DotGrid.png";

const Subscribe = () => {
  return (
    <div className="subscribeContainer">
      <div
        className="subscribeLeft"
        style={{
          backgroundImage: `url(${dotGrid}`,
          width: "100px",
          height: "100px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={people1} alt="" />
      </div>
      <div className="subscribeInfo">
        <h1 className="title">Subscribe Now</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec.
        </p>
        <input
          className="emailInputField"
          type="email"
          name=""
          id=""
          placeholder="Your mail here"
        />
      </div>
    </div>
  );
};

export default Subscribe;
