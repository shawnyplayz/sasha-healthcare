import Container from "@/components/utils/Container";
import ContactUsInfo from "@/components/pages/ContactUsInfo";
import ContactUsSubmission from "@/components/pages/ContactUsSubmission";
import React from "react";

const ContactUsSection = () => {
  return (
    <Container>
      <div>
        <div className="flex lg:flex-row flex-col">
          <ContactUsInfo />
          <ContactUsSubmission />
        </div>
      </div>
    </Container>
  );
};

export default ContactUsSection;
