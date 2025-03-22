import React, { useState } from "react";

interface DmyProps {
    name: string;
    placeholder: string;
}

function Dmy({ name, placeholder }: DmyProps) {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholder);

    return (
        <div className="flex flex-col gap-1.5 ml-8 mt-8">
            <h1 className="text-[#6F6E6E] font-bold">{name}</h1>
            <div className="bg-transparent w-[160px] h-[64px] border-[1px] border-[#6F6E6E] rounded-[8px] shadow-lg">
                <input
                    className="ml-1 outline-none w-full h-full text-[#6F6E6E] text-center"
                    type="text"
                    placeholder={currentPlaceholder}
                    onFocus={() => setCurrentPlaceholder("")} 
                    onBlur={() => setCurrentPlaceholder(placeholder)}
                />
            </div>
            <div></div>
        </div>
    );
}

export default Dmy;