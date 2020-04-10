import React from "react";

import ContactBrief from "../contactPage/components/ContactBrief";

import './ContactPage.css'

const ContactPage = (props) => {
  return (
    <div className='contact'>
      <ContactBrief mapButton={false} />
    </div>
  );
};

export default ContactPage;
