import React from "react";

interface YoProps {
    quantity: number | string;
    dmy: string;
}

function Yo({ quantity, dmy }) {
    return (
      <div className="flex flex-row items-end gap-2 lg:gap-4">
        <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#C64CFF]">
          {quantity}
        </span>
        <span className="text-6xl md:text-7xl lg:text-8xl font-bold">
          {dmy}
        </span>
      </div>
    );
  }

export default Yo;