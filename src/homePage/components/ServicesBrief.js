import React from "react";

import ServicesBriefCard from "./ServicesBriefCard";

import "./ServicesBrief.css";

//there should be 3 cards. One for each type of service.

const ServicesBrief = (props) => {
  return (
    <div className="services-brief">
      <div className="services-brief-header">SERVICES</div>
      <div className="services-brief-cards">
        <ServicesBriefCard className="services-brief-card" />
        <ServicesBriefCard className="services-brief-card" />
        <ServicesBriefCard className="services-brief-card" />
      </div>
    </div>
  );
};

export default ServicesBrief;
