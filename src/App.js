import React from "react";
// components and containers
import { Navbar } from "./components";
import { FeatureHeader } from "./containers";
//css
import './app.css';
const App = () => {
  return (
    <>
      <Navbar />
      <FeatureHeader />
    </>
  );
};

export default App;
