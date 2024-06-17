import React from "react";

interface ITextArea {
    label: string,
    value?: string,
    onChange: (change: string) => void
}

const TextArea: React.FC<ITextArea> = ({ label, value, onChange }) => {
    return (
        <div className="flex-col flex">
            <textarea value={value} className="shadow-inner p-2 bg-white appearance-none h-28 focus:outline-none  border-none" placeholder={label} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export default TextArea;