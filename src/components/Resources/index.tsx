import React, { useMemo, useState } from "react";

import { IResource } from "../../interfaces";

import ActionButton from "../ActionButton";
import Resource from "../Resource";
import ResourcesForm from "../ResourcesForm";
import NoResources from "../NoResources";

import { useStore } from "../../store";

const Resources: React.FC<IResource> = ({ course_ref }) => {
    const { resources, deleteResource, addResource } = useStore((state) => state);
    const [resourceForm, setResourceForm] = useState(false);

    const cachedResources = useMemo(() => resources, [resources])

    const courseResources = cachedResources[course_ref];

    return (
        <div className="bg-slate-50 relative flex-col ml-6 mr-6 pt-4 pb-4 -top-10 rounded shadow-inner">
            <div className="bg-slate-400 h-16 flex justify-end">
                <ActionButton handlePrimary={() => setResourceForm(true)} secondAction={false} primaryActionText="ADD RESOURCE" />
            </div>

            {resourceForm && <ResourcesForm course={course_ref} handlePrimary={(resource) => { addResource(resource); setResourceForm(false) }} handleCancel={() => setResourceForm(false)} />}

            {
                courseResources?.length > 0 ?
                courseResources?.map((item: IResource, index: number) => {
                    return <Resource key={index} {...item} handleDelete={(id) => deleteResource(course_ref, id)}/>
                }) : <NoResources />
            }

        </div>
    )
}

export default Resources;