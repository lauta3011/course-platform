import React from "react";
import { IActionButton } from "../../interfaces";

const ActionButton: React.FC<IActionButton> = ({ primaryActionText, secondAction, secondActionText, handlePrimary, handleSecondary }) => {
    return (
        <div className="inline-flex items-center justify-end m-2 rounded">
            <div className="flex justify-between">
                {secondAction && <div onClick={() => handleSecondary()} className="flex items-center font-medium cursor-pointer hover:text-red-400 text-red-600 m-4">
                    <span>{secondActionText}</span>
                </div>}
                <div onClick={() => handlePrimary()} className="flex items-center px-4 py-1 m-2 cursor-pointer rounded text-slate-50 hover:bg-slate-700 bg-slate-500">
                    <span>{primaryActionText}</span>
                </div>
            </div>
        </div>
    )
}

export default ActionButton;