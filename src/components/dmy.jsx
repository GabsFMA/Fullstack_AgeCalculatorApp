import React from "react";

function Dmy({ name, placeholder, value, error, showErrorBorder, min, max, onChange }) {
  return (
    <div className="flex flex-col gap-1.5 ml-2 md:ml-8 mt-4 md:mt-8 w-full md:w-auto">
      <h1
        className={`text-xs md:text-sm font-bold ${
          error ? "text-red-500" : "text-[#6F6E6E]"
        }`}
      >
        {name}
      </h1>
      <div
        className={`bg-transparent w-full md:w-[120px] lg:w-[160px] h-12 md:h-14 lg:h-16 border-[1px] rounded-lg md:rounded-[8px] shadow-lg ${
          showErrorBorder ? "border-red-500" : "border-[#6F6E6E]"
        }`}
      >
        <input
          className={`appearance-none [&::-webkit-inner-spin-button]:appearance-none ml-1 outline-none w-full h-full text-center text-xl md:text-2xl lg:text-3xl ${
            showErrorBorder ? "text-red-500" : "text-[#6F6E6E]"
          }`}
          type="number"
          placeholder={placeholder}
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {error && (
        <p className="text-red-500 text-[10px] md:text-xs italic mt-1 max-w-[160px]">
          {error}
        </p>
      )}
    </div>
  );
}

export default Dmy;