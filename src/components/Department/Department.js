import React from "react";
import "./Department.css";
import Neurology from "../../assets/images/Neurology.png";
import HearingTestsAids from "../../assets/images/HearingTestsAids.png";
import CancerScreening from "../../assets/images/CancerScreening.png";
import CardiacSurgery from "../../assets/images/CardiacSurgery.png";
import OrthopedicClinic from "../../assets/images/OrthopedicClinic.png";
import PediatricAdultAudiology from "../../assets/images/PediatricAdultAudiology.png";

const Department = () => {
  const services = [
    {
      id: 1,
      name: "Neurology",
      img: Neurology,
    },
    {
      id: 2,
      name: "Hearing Tests Aids",
      img: HearingTestsAids,
    },
    {
      id: 3,
      name: "Cancer Screening ",
      img: CancerScreening,
    },
    {
      id: 4,
      name: " Cardiac Surgery",
      img: CardiacSurgery,
    },
    {
      id: 5,
      name: "Orthopedic Clinic",
      img: OrthopedicClinic,
    },
    {
      id: 6,
      name: "Pediatric Adult Audiology",
      img: PediatricAdultAudiology,
    },
  ];
  return (
    <div className="deptContainer">
      <h1 className="depTitle">Our Medical Care</h1>
      <p className="depSubTitle">Services We Provide</p>
    </div>
  );
};

export default Department;
