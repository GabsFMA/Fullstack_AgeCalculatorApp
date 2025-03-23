import React from 'react';

function Dmy({ name, placeholder, value, error, min, max, onChange }) {
    return (
      <div className="flex flex-col gap-1.5 ml-8 mt-8">
        <h1 className={`text-sm font-bold ${error ? 'text-red-500' : 'text-[#6F6E6E]'}`}>
          {name}
        </h1>
        <div className={`bg-transparent w-[160px] h-[64px] border-[1px] rounded-[8px] shadow-lg 
          ${error ? 'border-red-500' : 'border-[#6F6E6E]'}`}>
          <input
            className={`ml-1 outline-none w-full h-full text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none
              ${error ? 'text-red-500' : 'text-[#6F6E6E]'}`}
            type="number"
            placeholder={placeholder}
            value={value}
            min={min}
            max={max}
            onChange={(e) => onChange(e.target.value)}
            // Adicione estas props
            formNoValidate
            required={false}
          />
        </div>
        {error && (
          <p className="text-red-500 text-xs italic mt-1 max-w-[160px]">
            {error}
          </p>
        )}
      </div>
    );
  }

export default Dmy;