import React from "react";

function Yo({ quantity, dmy }) {
  const getPluralForm = () => {
    if (typeof quantity !== 'number') return dmy;

    const pluralRules = {
        meses: { singular: 'mês', plural: 'meses' },
        dias: { singular: 'dia', plural: 'dias' },
        anos: { singular: 'ano', plural: 'anos' }
    };

    const rule = pluralRules[dmy];
    return quantity === 1 ? rule?.singular : rule?.plural || dmy;
  };

  return (
    <div className="flex flex-row items-end gap-2 lg:gap-4">
      <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#C64CFF]">
        {quantity}
      </span>
      <span className="text-6xl md:text-7xl lg:text-8xl font-bold">
        {getPluralForm()} 
      </span>
    </div>
  );
}

export default Yo;