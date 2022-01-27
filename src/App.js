import React from "react";
// components and containers
import { Navbar } from "./components";
import { FeatureHeader, Service, Statistics} from "./containers";
//css
import './app.css';
const App = () => {
  return (
    <>
      <Navbar />
      <FeatureHeader />
      <Service/>
    <Statistics/>
    </>
  );
};

export default App;
