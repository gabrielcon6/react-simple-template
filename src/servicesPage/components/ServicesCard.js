import React from "react";

import './ServicesCard.css'

const ServicesCard = (props) => {
  return (
    <div className='service-card'>
      <div>{props.service.name}</div>
      <div>{props.service.description}</div>
    </div>
  );
};

export default ServicesCard;
