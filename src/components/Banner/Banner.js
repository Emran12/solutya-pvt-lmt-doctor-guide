import React from "react";
import "./Banner.css";
import groupCurve from "../../assets/shapes/GroupCurve.png";
import dotGrid from "../../assets/shapes/DotGrid.png";
const Banner = () => {
  return (
    <div>
      <div>
        <img src={groupCurve} alt="" id="groupCurve"></img>
        <img src={dotGrid} alt="" id="dptGrid"></img>
        <div className="bannerInfo">
          <h1 id="bannerHeading">Find The Care You Need </h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
