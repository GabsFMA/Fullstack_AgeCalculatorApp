import React from "react";

interface DmyProps {
    name: string;
    placeholder: string;
    value: string;
    min?: number;
    max?: number;
    onChange: (value: string) => void;
}

function Dmy({ name, placeholder, value, min, max, onChange }: DmyProps) {
    return (
        <div className="flex flex-col gap-1.5 ml-8 mt-8">
            <h1 className="text-[#6F6E6E] font-bold">{name}</h1>
            <div className="bg-transparent w-[160px] h-[64px] border-[1px] border-[#6F6E6E] rounded-[8px] shadow-lg relative">
                <input
                    className="ml-1 outline-none w-full h-full text-[#6F6E6E] text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    placeholder={placeholder}
                    value={value}
                    min={min}
                    max={max}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Dmy;