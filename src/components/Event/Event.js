import React from "react";
import "./Event.css";
import event1 from "../../assets/images/event1.png";
import event2 from "../../assets/images/event2.png";
import EventInfo from "../EventInfo/EventInfo";

const Event = () => {
  return (
    <div className="eventContainer">
      <h1 className="eventTitle">Upcoming Events</h1>
      <p className="eventSubTitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className="event">
        <div>
          <img src={event1} width="590px" height="551px" />
        </div>
        <div>
          <EventInfo></EventInfo>
        </div>
      </div>
      <div className="event" id="event2">
        <div>
          <EventInfo></EventInfo>
        </div>
        <div>
          <img src={event2} width="590px" height="551px" />
        </div>
      </div>
    </div>
  );
};

export default Event;
