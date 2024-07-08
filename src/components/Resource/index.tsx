import React, { useState } from "react";

import { IResource } from "../../interfaces";

import ResourceSummary from "../ResourceSummary";
import ActionButton from "../ActionButton";
import ResourcesForm from "../ResourcesForm";
import { useStore } from "../../store";

const Resource: React.FC<IResource> = ({ id, course_ref, description, title, link, notes, handlePrimary, handleDelete }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [editForm, setEditForm] = useState(false);

    const { editResource } = useStore((state) => state);

    // TODO: los textos no son responsive !!!!!!!!!!

    return (
        <div className="m-2 bg-slate-200">
            {!editForm && 
                <>
                    <div style={{backgroundColor: showDetails ? 'rgb(203 213 225)' : null}} className="hover:bg-slate-300 flex justify-between ">
                        <div onClick={() => setShowDetails(!showDetails)} className="inline-flex items-center w-full p-3">
                            <a href={link} target="_blank" rel="noreferrer noopener" className="font-semibold mr-6 hover:text-blue-700">{title}</a>
                            <span>{description}</span>                        
                        </div>

                        <div className="inline-flex z-10">
                            <ActionButton handlePrimary={() => setEditForm(true)} handleSecondary={() => handleDelete(id)} primaryActionText="EDIT" secondAction={true} secondActionText="DELETE" />
                        </div>
                    
                    </div>
                    {showDetails && <ResourceSummary isEdit={false} notes={notes} />}
                </>
            }

            {editForm && <ResourcesForm handlePrimary={(resource: IResource) => { editResource(resource); setEditForm(false) }} handleCancel={() => setEditForm(false)} id={id} course={course_ref} title={title} link={link} description={description} notes={notes} />}
        </div>
    )
}

export default Resource;