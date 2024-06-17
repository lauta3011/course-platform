import React from "react";
import { IInput } from "../../interfaces";

const Input: React.FC<IInput> = ({ type, size, label, value, onChange }) => {
    return (
        <div className="flex flex-grow">
            <input style={{ fontSize: size }} value={value} className={`bg-transparent m-1 px-1 rounded appearance-none focus:outline-none border-none w-full`} placeholder={label} type={type} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export default Input;