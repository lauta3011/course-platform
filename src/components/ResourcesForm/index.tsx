import React, { useState } from "react";

import Input from "../Input";
import ActionButton from "../ActionButton";
import ResourceSummary from "../ResourceSummary";

import { IResourceForm } from "../../interfaces";

const ResourcesForm: React.FC<IResourceForm> = ({ id, course, title, link, description, notes, handleCancel, handlePrimary }) => {
    const [resourceForm, setResourceForm] = useState({
        id: id,
        title: title,
        link: link,
        description: description,
        notes: notes,
        course_ref: course 
    });

    const addResource = () => {
        const { title, link, description } = resourceForm;

        if(title !== '' && link !== '' && description !== '') {
            handlePrimary(resourceForm);
        }
    }

    return (
        <div className="flex justify-between flex-col bg-slate-200">
            <div className="inline-flex bg-slate-300 px-2 py-4">
                <div className="flex flex-col">
                    <Input background="bg-slate-200" value={resourceForm.title || ''} size={23} type="text" label="Title" onChange={(value) => setResourceForm({ ...resourceForm, title: value }) }  />
                    <Input background="bg-slate-200" value={resourceForm.link || ''} size={14} type="text" label="Link" onChange={(value) => setResourceForm({ ...resourceForm, link: value })} />
                </div>

                <div className="flex flex-grow">
                    <Input background="bg-slate-200" value={resourceForm.description || ''} size={20} type="text" label="Description" onChange={(value) => setResourceForm({ ...resourceForm, description: value })} />
                </div>

                <div className="inline-flex z-10">
                    <ActionButton  handlePrimary={() => addResource()} handleSecondary={() => handleCancel()} primaryActionText="CONFIRM" secondAction={true} secondActionText="CANCEL" />
                </div>
            </div>

            <div>
                <ResourceSummary handleSetResourceForm={(value) => setResourceForm({ ...resourceForm, notes: value })} isEdit={true} notes={resourceForm.notes || ''} />
            </div>
        </div>
    )
}

export default ResourcesForm;