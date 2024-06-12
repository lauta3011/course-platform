import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IIcon {
    icon: IconProp,
    iconBkg: string,
    size: number,
    opacity: string
}

const Icon: React.FC<IIcon> = ({ icon, iconBkg, size, opacity }) => {
    return (
        <div style={{backgroundColor: iconBkg}} className={`flex justify-center items-center p-4 rounded`}>
            <FontAwesomeIcon style={{ fontSize: size, opacity: opacity }} icon={icon} />
        </div>
    )
}

export default Icon;