import React from "react";

interface YoProps {
    quantity: number | string;
    dmy: string;
}

function Yo({ quantity, dmy }: YoProps) {
    const getPlural = () => {
      
        if (typeof quantity === 'number') {
            if (dmy === 'meses') return quantity === 1 ? 'mês' : 'meses';
            return dmy;
        }

        if (typeof quantity === 'number') {
          if (dmy === 'dias') return quantity === 1 ? 'dia' : 'dias';
          return dmy;
      }

      if (typeof quantity === 'number') {
        if (dmy === 'anos') return quantity === 1 ? 'ano' : 'anos';
        return dmy;
    }
        return dmy;
    };

    return (
        <div className="flex flex-row items-end gap-2 lg:gap-4">
            <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#C64CFF]">
                {quantity}
            </span>
            <span className="text-6xl md:text-7xl lg:text-8xl font-bold">
                {getPlural()} 
            </span>
        </div>
    );
}

export default Yo;