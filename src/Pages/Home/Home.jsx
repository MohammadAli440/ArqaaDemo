import React from "react";
import Hero from "./Hero/Hero";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import HowWeWork from "./HowWeWork/HowWeWork";
import ProductHighlights from "./ProductHighlights/ProductHighlights";
import ManufacturingPlant from "./ManufacturingPlant/ManufacturingPlant";
import OurServices from "./OurServices/OurServices";
import CallToAction from "./CallToAction/CallToAction"; 
import CompanyContent from "./CompanyContent/CompanyContent";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
       <HowWeWork />
       <CompanyContent/>
      <ProductHighlights />
      <ManufacturingPlant />
      <OurServices />
      <CallToAction />
    </div>
  );
};

export default Home;
