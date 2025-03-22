import React, { useState } from "react";
import Dmy from "./components/dmy";
import Yo from "./components/yo";

function App() {
  const [inputs, setInputs] = useState({ day: "", month: "", year: "" });

  const DMY = [
    {
      name: "DAY",
      placeholder: "DD",
      key: "day",
    },
    {
      name: "MONTH",
      placeholder: "MM",
      key: "month",
    },
    {
      name: "YEAR",
      placeholder: "YYYY",
      key: "year",
    },
  ];

  const YO = [
    {
      quantity: "38",
      dmy: "years",
    },
    {
      quantity: "3",
      dmy: "months",
    },
    {
      quantity: "26",
      dmy: "days",
    },
  ];

  const handleInputChange = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const handleButtonClick = () => {
    console.log("Input values:", inputs);
  };

  return (
    <div className="bg-[#fff] w-[900px] h-[600px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[192px]">
      <div className="m-16 flex flex-col gap-6">
        <div className="flex flex-row gap-8 w-full">
          {DMY.map((item, index) => {
            return (
              <Dmy
                key={index}
                name={item.name}
                placeholder={item.placeholder}
                onChange={(value) => handleInputChange(item.key, value)}
              />
            );
          })}
        </div>
        <div className="relative">
          <hr className="border-[#6F6E6E]" />
          <button
            className="absolute top-1/2 right-0 flex items-center justify-center transform -translate-y-1/2 cursor-pointer"
            onClick={handleButtonClick}
          >
            <img
              src="images/icon-arrow.svg"
              alt="icon-arrow"
              className="bg-[#C64CFF] rounded-full p-2"
            />
          </button>
        </div>
        <div className="flex flex-col">
          {YO.map((item, index) => {
            return (
              <Yo key={index} quantity={item.quantity} dmy={item.dmy} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;