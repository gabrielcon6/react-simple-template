import React from "react";

import ServicesCard from "./components/ServicesCard";

import "./ServicesPage.css";

//card will be loaded 3 times. One for each service branch.

const DUMMY_SERVICES = [
  {
    id: 1,
    name: "Service One",
    description: "Service 1"
  },
  {
    id: 2,
    name: "Service Two",
    description: "Service 2"
  },
  {
    id: 3,
    name: "Service Three",
    description: "Service 3"
  },
];

const ServicesPage = (props) => {
  return (
    <div className="services">
      {DUMMY_SERVICES.map((service) => (
        <ServicesCard service={service} />
      ))}
    </div>
  );
};

export default ServicesPage;
