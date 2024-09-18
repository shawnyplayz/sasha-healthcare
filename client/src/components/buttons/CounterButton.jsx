"use client";

import React, { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="flex items-center justify-between border border-[#9F9F9F] rounded-xl p-2">
      <button
        onClick={decrement}
        className="text-lg w-10 h-10 transition rounded-l-lg flex items-center justify-center"
      >
        -
      </button>
      <span className="text-lg w-16 text-center">{count}</span>
      <button
        onClick={increment}
        className="text-lg w-10 h-10 transition rounded-r-lg flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export default CounterButton;
