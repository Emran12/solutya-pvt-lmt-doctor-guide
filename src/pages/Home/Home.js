import React from "react";
import Banner from "../../components/Banner/Banner";
import Event from "../../components/Event/Event";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Event />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
