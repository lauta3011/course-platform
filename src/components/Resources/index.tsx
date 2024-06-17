import React, { useState } from "react";

import { IResources } from "../../interfaces";
import ActionButton from "../ActionButton";
import Resource from "../Resource";
import ResourcesForm from "../ResourcesForm";
import NoResources from "../NoResources";
import { useStore } from "../../store";

const Resources: React.FC<IResources> = ({ course, resources }) => {
    const { addResource, deleteResource } = useStore((state) => state);
    const [resourceForm, setResourceForm] = useState(false);

    return (
        <div className="bg-slate-50 relative flex-col ml-6 mr-6 pt-4 pb-4 -top-10 rounded shadow-inner">
            <div className="bg-slate-400 h-16 flex justify-end">
                <ActionButton handlePrimary={() => setResourceForm(true)} secondAction={false} primaryActionText="ADD RESOURCE" />
            </div>

            {resourceForm && <ResourcesForm course={course} handleAdd={(resource) => { addResource(resource); setResourceForm(false) }} handleCancel={() => setResourceForm(false)} />}

            {
                resources?.length > 0 ?
                resources?.map((res, index) => {
                    return (
                        <Resource key={index} {...res} handleDeleteResource={(id) => deleteResource(id)}/>
                    )
                }) : <NoResources />
            }

        </div>
    )
}

export default Resources;