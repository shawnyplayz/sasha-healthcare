import Container from "@/components/utils/Container";
import ContactUsInfo from "@/components/pages/ContactUsInfo";
import ContactUsSubmission from "@/components/pages/ContactUsSubmission";
import React from "react";

const ContactUsSection = () => {
  return (
    <div className="container mx-auto">
      <div className="flex lg:flex-row flex-col">
        <ContactUsInfo />
        <ContactUsSubmission />
      </div>
    </div>
  );
};

export default ContactUsSection;
