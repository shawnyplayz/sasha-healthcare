import React from "react";
import Button from "../buttons/Button";
import Checkbox from "./Checkbox";

const ContactUsForm = () => {
  return (
    <div className="bg-white my-24 mx-auto p-8 w-2/3 max-w-4xl h-auto shadow-lg">
      <h2 className="text-black mb-12 font-volkhov font-normal text-5xl">
        Contact Us
      </h2>
      <form className="space-y-8">
        <div className="flex flex-col">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full border-b-2 border-black focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full border-b-2 border-black focus:outline-none resize-none"
          />
        </div>

        <Checkbox label="I would like to receive the newsletter." />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
