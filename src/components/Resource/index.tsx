import React, { useState } from "react";

import { IResource } from "../../interfaces";
import ResourceSummary from "../ResourceSummary";
import ActionButton from "../ActionButton";
import ResourcesForm from "../ResourcesForm";

const Resource: React.FC<IResource> = ({ id, courseId, description, title, link, notes, handleDeleteResource }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [editResource, setEditResource] = useState(false);

    return (
        <div className="m-2 bg-slate-200">
            {!editResource && 
                <>
                    <div style={{backgroundColor: showDetails ? 'rgb(203 213 225)' : null}} className="hover:bg-slate-300 p-4 flex justify-between ">
                        <div onClick={() => setShowDetails(!showDetails)} className="inline-flex items-center">
                            <a href={link} target="_blank" rel="noreferrer noopener" className="font-semibold mr-6 hover:text-blue-700">{title}</a>
                            <span>{description}</span>
                        </div>

                        <div className="inline-flex z-10">
                            <ActionButton handlePrimary={() => setEditResource(true)} handleSecondary={() => handleDeleteResource(id)} primaryActionText="EDIT" secondAction={true} secondActionText="DELETE" />
                        </div>
                    
                    </div>
                    {showDetails && <ResourceSummary isEdit={false} notes={notes} />}
                </>
            }

            {editResource && <ResourcesForm handleAdd={() => console.log('agrego!!!')} handleCancel={() => setEditResource(false)} course={courseId} title={title} link={link} description={description} notes={notes} />}
        </div>
    )
}

export default Resource;