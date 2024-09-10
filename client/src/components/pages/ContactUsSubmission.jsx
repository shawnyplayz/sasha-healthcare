import React from "react";
import ContactUsForm from "../utils/ContactUsForm";

const ContactUsSubmission = () => {
  return (
    <div
      className="lg:bg-[url('/Images//ContactUsAssets/background.svg')] w-full bg-no-repeat flex items-center justify-center"
      style={{ backgroundSize: "cover" }}
    >
      <ContactUsForm />
    </div>
  );
};

export default ContactUsSubmission;
