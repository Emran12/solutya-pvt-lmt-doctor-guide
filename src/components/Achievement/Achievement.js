import React from "react";
import bed from "../../assets/icons/bed.png";
import award from "../../assets/icons/award.png";
import happy from "../../assets/icons/happy.png";
import medicalExpert from "../../assets/icons/medicalExpert.png";
import bgImage from "../../assets/images/bgImage.png";
import "./Achievement.css";

const Achievement = () => {
  const data = [
    {
      id: 1,
      title: "Medical Experts",
      value: 50,
      img: medicalExpert,
    },
    {
      id: 2,
      title: "Hospital Rooms",
      value: 500,
      img: bed,
    },
    {
      id: 3,
      title: "Awwwards Win",
      value: 20,
      img: award,
    },
    {
      id: 4,
      title: "Happy Patients",
      value: 5000,
      img: happy,
    },
  ];
  return (
    <div
      className="achievementContainer"
      style={{
        backgroundImage: `url(${bgImage}`,
        height: "510px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#D9D9D9",
      }}
    >
      <div className="achievements">
        <div className="achievementInfo">
          {data.map((d) => (
            <div>
              <img src={d.img} alt="" />
              <p className="achievementTitle">{d.value}</p>
              <hr />
              <p>{d.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
