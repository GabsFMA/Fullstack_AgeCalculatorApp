import React from "react";

interface YoProps {
    quantity: number | string;
    dmy: string;
}

function Yo({ quantity, dmy }: YoProps) {
    return(
        <div className="flex flex-row gap-1.5 ml-8 mt-8">
            <span className="text-[#C64CFF] text-8xl font-bold">{quantity}</span>
            <span className="text-8xl font-bold">{dmy}</span>
        </div>
    )
}

export default Yo;