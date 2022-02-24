import React from "react";
// components and containers
import { Navbar } from "../components";
import {
  FeatureHeader,
  Service,
  Statistics,
  AboutUs,
  ContactUs,
  Footer,
} from "../containers";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <FeatureHeader />
      <Service />
      <Statistics />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
