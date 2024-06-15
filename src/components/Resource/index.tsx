import React, { useState } from "react";

import { IResource } from "../../interfaces";
import ResourceDetails from "../ResourceDetails";
// import Icon from "../Icon";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Resource: React.FC<IResource> = ({ id, courseId, title, link, notes }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div onClick={() => setShowDetails(!showDetails)} className="flex justify-between mt-2 mb-2 p-4 hover:bg-slate-200">
            <div className="inline-flex items-center">
                <h3 className="font-semibold mr-6">{title}</h3>
                <span>{notes}</span>
            </div>

            {showDetails && <ResourceDetails courseId={courseId} id={id} title={title} link={link} />}
        </div>
    )
}

export default Resource;