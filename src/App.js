import React from "react";
// components and containers
import { Navbar } from "./components";
import { FeatureHeader, Service, Statistics, AboutUs, Footer} from "./containers";
//css
import './app.css';
const App = () => {
  return (
    <>
      <Navbar />
      <FeatureHeader />
      <Service/>
      <Statistics/>
      <AboutUs/>
      <Footer/>

    </>
  );
};

export default App;
