import React from "react";

interface IInput {
    type: string,
    label: string,
    onChange: (change: string) => void
}

const Input: React.FC<IInput> = ({ type, label, onChange }) => {
    return (
        <div className="flex-col justify-center flex-1 p-4 bg-slate-300 m-4">
            <label>{label}</label>
            <input className="w-5/6 ml-4" type={type} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export default Input;