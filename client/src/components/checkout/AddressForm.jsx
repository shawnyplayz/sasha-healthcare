import React from "react";

const InputField = ({ label, type, name, id }) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="font-normal text-lg">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      className="bg-transparent border w-full p-2 outline-none rounded-lg border-[#212121]"
    />
  </div>
);

const TextAreaField = ({ label, name, id, placeholder }) => (
  <div className="flex flex-col gap-1 mt-5">
    <label htmlFor={id}>{label}</label>
    <textarea
      name={name}
      id={id}
      className="resize-none border-[#212121] bg-transparent border w-full p-2 outline-none rounded-lg"
      placeholder={placeholder}
      rows={3}
    />
  </div>
);

const AddressForm = () => {
  return (
    <div className="flex flex-col gap-5 max-w-lg mx-auto lg:mx-0">
      <InputField label="Pincode" type="text" name="pincode" id="pincode" />

      {/* Group 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <InputField label="City" type="text" name="city" id="city" />
        <InputField label="State" type="text" name="state" id="state" />
      </div>

      {/* Group 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <InputField label="Phone Number" type="text" name="phone" id="phone" />
        <InputField label="Country" type="text" name="country" id="country" />
      </div>

      {/* Group 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          id="fullName"
        />
        <InputField
          label="Email Address"
          type="email"
          name="email"
          id="email"
        />
      </div>

      <TextAreaField
        label="Full Address (House no., Area, etc) *"
        name="fullAddress"
        id="fullAddress"
        placeholder="Address"
      />
    </div>
  );
};

export default AddressForm;
