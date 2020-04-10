import React from "react";

import AddressDetails from "./AddressDetails";
import ContactForm from "./ContactForm";
import Map from "./Map"

import "./ContactBrief.css";

const ContactBrief = (props) => {
  return (
    <div className="contact-brief">
      <div className="contact-brief-map"><Map /></div>
      <div className="contact-brief-content">
        <div className="contact-brief-content__title">CONTACT US</div>
        <div className="contact-brief-content__address">
          <AddressDetails />
        </div>
      </div>
      <div className="contact-brief-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactBrief;
