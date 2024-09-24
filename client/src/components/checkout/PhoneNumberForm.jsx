import React from "react";

const PhoneNumberForm = ({
  phoneNumber,
  setPhoneNumber,
  phoneError,
  setPhoneError,
}) => {
  return (
    <div>
      <div className="bg-transparent flex flex-col gap-2">
        <label htmlFor="Phone" className="text-black">
          Phone No*
        </label>
        <input
          type="text"
          placeholder="+91 1400 5650"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            if (phoneError) {
              setPhoneError(false);
            }
          }}
          required
          className={`bg-transparent border p-2 max-w-[690px] outline-none rounded-lg ${
            phoneError ? "border-red-500" : "border-[#212121]"
          }`}
        />
        {phoneError && (
          <p className="text-red-500 text-sm">
            Please enter a valid phone number
          </p>
        )}
      </div>
    </div>
  );
};

export default PhoneNumberForm;
