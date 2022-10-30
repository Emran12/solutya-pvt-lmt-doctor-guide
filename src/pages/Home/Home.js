import React from "react";
import Achievement from "../../components/Achievement/Achievement";
import Banner from "../../components/Banner/Banner";
import Department from "../../components/Department/Department";
import Event from "../../components/Event/Event";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import Testimonial from "../../components/Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Achievement />
      <Department />
      {/* <Testimonial /> */}
      <Event />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
