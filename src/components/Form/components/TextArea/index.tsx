import React from "react";

interface ITextArea {
    label: string,
    onChange: (change: string) => void
}

const TextArea: React.FC<ITextArea> = ({ label, onChange }) => {
    return (
        <div className="flex-col flex p-4 bg-slate-300 m-4">
            <label>{label}</label>
            <textarea className="h-96" onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export default TextArea;