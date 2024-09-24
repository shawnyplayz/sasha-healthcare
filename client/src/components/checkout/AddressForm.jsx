import React from "react";

const InputField = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
}) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id} className="font-normal text-lg">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-transparent border w-full p-2 outline-none rounded-lg border-[#212121]"
    />
  </div>
);

const TextAreaField = ({ label, name, id, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-1 mt-5">
    <label htmlFor={id}>{label}</label>
    <textarea
      name={name}
      id={id}
      className="resize-none border-[#212121] bg-transparent border w-full p-2 outline-none rounded-lg"
      placeholder={placeholder}
      rows={3}
      value={value}
      onChange={onChange}
    />
  </div>
);

const AddressForm = ({ userAddress, onInputChange, addressErrors }) => {
  return (
    <div className="flex flex-col gap-5 max-w-lg mx-auto lg:mx-0">
      {/* Pincode Input */}
      <div>
        <InputField
          label="Pincode"
          type="text"
          name="pincode"
          id="pincode"
          placeholder="400101"
          value={userAddress.pincode}
          onChange={onInputChange}
        />
        {addressErrors.pincode && (
          <p className="text-red-500 text-sm mt-1">{addressErrors.pincode}</p>
        )}
      </div>

      {/* City and State Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <div>
          <InputField
            label="City"
            type="text"
            name="city"
            id="city"
            placeholder="Mumbai"
            value={userAddress.city}
            onChange={onInputChange}
          />
          {addressErrors.city && (
            <p className="text-red-500 text-sm mt-1">{addressErrors.city}</p>
          )}
        </div>

        <div>
          <InputField
            label="State"
            type="text"
            name="state"
            id="state"
            placeholder="Maharashtra"
            value={userAddress.state}
            onChange={onInputChange}
          />
          {addressErrors.state && (
            <p className="text-red-500 text-sm mt-1">{addressErrors.state}</p>
          )}
        </div>
      </div>

      {/* Phone Number and Country Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <div>
          <InputField
            label="Phone Number"
            type="text"
            name="phoneNumber"
            id="phone"
            placeholder="+91 14000 5650"
            value={userAddress.phoneNumber}
            onChange={onInputChange}
          />
          {addressErrors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {addressErrors.phoneNumber}
            </p>
          )}
        </div>

        <div>
          <InputField
            label="Country"
            type="text"
            name="country"
            id="country"
            placeholder="India"
            value={userAddress.country}
            onChange={onInputChange}
          />
          {addressErrors.country && (
            <p className="text-red-500 text-sm mt-1">{addressErrors.country}</p>
          )}
        </div>
      </div>

      {/* Full Name and Email Address Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <div>
          <InputField
            label="Full Name"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Steve Smith"
            value={userAddress.fullName}
            onChange={onInputChange}
          />
          {addressErrors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {addressErrors.fullName}
            </p>
          )}
        </div>

        <div>
          <InputField
            label="Email Address"
            type="email"
            name="emailAddress"
            id="email"
            placeholder="sasha@gmail.com"
            value={userAddress.emailAddress}
            onChange={onInputChange}
          />
          {addressErrors.emailAddress && (
            <p className="text-red-500 text-sm mt-1">
              {addressErrors.emailAddress}
            </p>
          )}
        </div>
      </div>

      {/* Full Address Input */}
      <div>
        <TextAreaField
          label="Full Address (House no., Area, etc) *"
          name="fullAddress"
          id="fullAddress"
          placeholder="Address"
          value={userAddress.fullAddress}
          onChange={onInputChange}
        />
        {addressErrors.fullAddress && (
          <p className="text-red-500 text-sm mt-1">
            {addressErrors.fullAddress}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
