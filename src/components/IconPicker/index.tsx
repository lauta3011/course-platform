import React from "react";

import { getIcon } from "../../assets/icons";

import Icon from "../Icon";

const IconPicker: React.FC = () => {
    const icon = getIcon('glasses');

    return (
        <div className="bg-white absolute left-36 h-64 w-96 shadow-lg rounded">
            <Icon icon={icon} iconBkg="transparent" size={28} opacity="100%" />
        </div>
    )
}

export default IconPicker;