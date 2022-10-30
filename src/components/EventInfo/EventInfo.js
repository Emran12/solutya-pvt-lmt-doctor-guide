import React from "react";
import "./EventInfo.css";
import clock from "../../assets/icons/clock.png";
import location from "../../assets/icons/location.png";
import calendar from "../../assets/icons/Calendar.png";

const EventInfo = () => {
  return (
    <div>
      <h1>How to lead a good healthy life</h1>
      <p>
        Early had add equal china quiet visit. Appear an manner as no limits
        either praise in. In in written on charmed justice is amiable farther
        besides. Law insensible middletons unsatiable for apartments boy
        delightful unreserved. Early had add equal china quiet visit. Appear an
        manner as no limits either praise in. In in written on charmed justice
        is amiable farther besides. Law insensible middletons unsatiable for
        apartments boy delightful unreserved.
      </p>
      <div>
        <p>
          <img src={calendar} alt="" />
          <span></span>
        </p>
      </div>
    </div>
  );
};

export default EventInfo;
