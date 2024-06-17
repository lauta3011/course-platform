import React from "react";

import { IResourceSummary } from "../../interfaces";
import TextArea from "../TextArea";

const ResourceSummary: React.FC<IResourceSummary> = ({ notes, isEdit, handleSetResourceForm }) => {
    return (
        <div className="flex flex-col bg-slate-200 mx-2 p-2 rounded">
            <h3 className="text-xl my-2 font-thin">Summary:</h3>
            <div className="min-h-24">
                {isEdit ? <TextArea label="Add your own summary..." value={notes} onChange={(value) =>  handleSetResourceForm(value)}/> : <p>{notes}</p>}
            </div>
        </div>
    )
}

export default ResourceSummary;