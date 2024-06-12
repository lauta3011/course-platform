import React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon";

interface IButton {
    icon: IconProp,
    height: number,
    width: number,
    handleClick: () => void
}

const Button: React.FC<IButton> = ({ icon, height, width, handleClick }) => {
    return (
        <div onClick={() => handleClick()} style={{ width: width, height: height }} className={`flex items-center ml-4 mr-4 justify-center bg-green-600 transition ease-in-out hover:bg-green-800 rounded shadow-2xl`}>
            <Icon icon={icon} opacity="100%" iconBkg="slate-100" size={28}/>
        </div>
    )
}

export default Button;