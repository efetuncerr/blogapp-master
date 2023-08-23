import React from "react";
import Slider from "../../Components/Slider/Slider";
import OurServices from "../../Components/OurServices/OurServices";
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {

  
  return (
    <div>
      <Navbar />
      <Slider />
      <OurServices />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
