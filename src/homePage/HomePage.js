import React from "react";

import Banner from "./components/Banner";
import ServicesBrief from "./components/ServicesBrief";
import AboutBrief from "./components/AboutBrief";
import ContactBrief from "../contactPage/components/ContactBrief";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Banner />
      <ServicesBrief />
      <AboutBrief />
      <ContactBrief />
    </React.Fragment>
  );
};

export default HomePage;
