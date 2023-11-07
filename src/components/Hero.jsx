import React from "react";

export default function Hero({ input, setInput }) {
  function handleChange(inputidentifier, newvalue) {
    setInput((prev) => {
      return {
        ...prev,
        [inputidentifier]: newvalue,
      };
    });
  }
  //console.log(input);
  return (
    <div
      className="flex flex-col md:flex-row flex-wrap justify-center items-center
   p-4 text-center h-auto  mx-36 bg-red-300"
    >
      <div>
        <p>Initial investment</p>
        <input
          type="number"
          placeholder="🌱"
          className="rounded-md p-1 me-3"
          required
          onChange={(e) => handleChange("initialInvestment", e.target.value)}
        />
      </div>
     
      <div>
        <p>Expected Returns (%)</p>
        <input
          type="number"
          placeholder="🎇"
          className="rounded-md p-1 me-3"
          required
          onChange={(e) => handleChange("expectedReturns", e.target.value)}
        />
      </div>
      <div>
        <p>Duration (in years)</p>
        <input
          type="number"
          placeholder="🌱"
          className="rounded-md p-1"
          required
          onChange={(e) => handleChange("duration", e.target.value)}
        />
      </div>
    </div>
  );
}
