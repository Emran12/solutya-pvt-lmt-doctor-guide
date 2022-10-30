import React from "react";
import "./EventInfo.css";
import clock from "../../assets/icons/clock.png";
import location from "../../assets/icons/location.png";
import calendar from "../../assets/icons/Calendar.png";

const EventInfo = () => {
  return (
    <div className="eventInfoContainer">
      <h1 className="eventHeader">How to lead a good healthy life</h1>
      <div className="eventSubContainer">
        <p className="eventSubInfo">
          <img src={calendar} alt="" />
          <span>15 Oct, 2019</span>
        </p>
        <p className="eventSubInfo">
          <img src={clock} alt="" />
          <span>8:00 AM - 5:00 PM</span>
        </p>
        <p className="eventSubInfo">
          <img src={location} alt="" />
          <span>Uttara, TX 70240</span>
        </p>
      </div>
      <p className="eventInfo">
        Early had add equal china quiet visit. Appear an manner as no limits
        either praise in. In in written on charmed justice is amiable farther
        besides. Law insensible middletons unsatiable for apartments boy
        delightful unreserved. Early had add equal china quiet visit. Appear an
        manner as no limits either praise in. In in written on charmed justice
        is amiable farther besides. Law insensible middletons unsatiable for
        apartments boy delightful unreserved.
      </p>
    </div>
  );
};

export default EventInfo;
