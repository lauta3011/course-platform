import React from "react";
import { IInput } from "../../interfaces";

const Input: React.FC<IInput> = ({ type, size, label, onChange }) => {
    return (
        <input style={{ fontSize: size }} className="bg-transparent appearance-none focus:outline-none border-none w-11/12" placeholder={label} type={type} onChange={(e) => onChange(e.target.value)}/>
    )
}

export default Input;