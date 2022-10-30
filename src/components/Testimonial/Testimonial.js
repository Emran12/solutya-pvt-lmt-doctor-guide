import React from "react";
import "./Testimonial.css";
import bgImage from "../../assets/images/bgImage2.png";
import avatar from "../../assets/images/avatar.png";
const Testimonial = () => {
  return (
    <div
      className="testimonialContainer"
      style={{
        backgroundImage: `url(${bgImage}`,
        height: "510px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.2,
      }}
    >
      <h1 className="feedBackHeader">Patient Feedback</h1>
      <div className="feedBackContainer">
        <div>
          <img src={avatar} alt="avatar" width="224px" height="224px"></img>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
            duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu
            et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla
            aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="author">
            TOM COOPPER <br />
            <span className="authorDesignation">Managing Director Or Art</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
