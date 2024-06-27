import React from "react";
import { IActionButton } from "../../interfaces";

const ActionButton: React.FC<IActionButton> = ({ hasDelete, primaryActionText, secondAction, secondActionText, handlePrimary, handleSecondary, handleDelete }) => {
    return (
        <div className="inline-flex items-center m-2 rounded">
            <div className="flex-grow inline-flex" style={{ justifyContent: hasDelete ? 'space-between' : 'end' }}>
                
                {hasDelete && <div onClick={() => handleDelete()} className="relative font-medium cursor-pointer hover:text-red-400 text-red-600 m-4">
                    <span>DELETE</span>
                </div>
                }

                <div className="flex">
                    {secondAction && <div onClick={() => handleSecondary()} className="font-medium cursor-pointer hover:text-red-400 text-red-600 m-4">
                        <span>{secondActionText}</span>
                    </div>}
                    <div onClick={() => handlePrimary()} className="flex items-center px-4 py-1 m-2 cursor-pointer rounded text-slate-50 hover:bg-slate-700 bg-slate-500">
                        <span>{primaryActionText}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ActionButton;