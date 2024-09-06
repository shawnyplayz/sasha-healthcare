import React from 'react';

const Checkbox = ({ label }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="newsletter"
        className="form-checkbox text-black border-black focus:ring-black"
      />
      <label htmlFor="newsletter" className="font-normal text-sm">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
