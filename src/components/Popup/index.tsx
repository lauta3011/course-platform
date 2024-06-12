import React, { ReactNode } from "react";
import Icon from "../Icon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface IPopup {
    children: ReactNode,
    handleClose: () => void
}

const Popup: React.FC<IPopup> = ({ handleClose, children }) => {
    return (
        <div className="fixed flex justify-center h-screen w-screen z-10">
            <div className="absolute opacity-40 w-screen h-screen bg-slate-700 "></div>
            
            <div className="relative top-24 w-9/12 bg-slate-100 rounded">
                <div className="flex justify-end" onClick={() => handleClose()}>
                    <Icon iconBkg="transparent" opacity="100%" size={28} icon={faXmark} /> 
                </div>

                {children}
            </div>
        </div>
    )
}

export default Popup;