import React, { useState } from "react";

import { IResources } from "../../interfaces";
import ActionButton from "../ActionButton";
import Resource from "../Resource";
import ResourcesForm from "../ResourcesForm";

const Resources: React.FC<IResources> = ({ resources }) => {
    const [addResource, setAddResource] = useState(false);
    return (
        <div className="bg-slate-50 relative flex-col ml-6 mr-6 pt-4 pb-4 -top-10 rounded shadow-inner">
            <div className="bg-slate-400 h-16 flex justify-end">
                <ActionButton handlePrimary={() => setAddResource(true)} secondAction={false} primaryActionText="ADD RESOURCE" />
            </div>

            {addResource && <ResourcesForm />}
            
            {
                resources.map((res, index) => {
                    return (
                        <Resource key={index} {...res} />
                    )
                })
            }

        </div>
    )
}

export default Resources;