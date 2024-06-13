import React from "react";

import { taskDetails } from "../../utils/test-data";

interface IResources {
    taskId: number
};

const Resources: React.FC<IResources> = ({ taskId }) => {
    return (
        <div className="bg-slate-50 flex-col ml-6 mr-6 pt-4 pb-4 -mt-6 rounded shadow-inner">
            {taskDetails?.map((tD, index) => {
                return (
                    <div key={index} className="flex mt-2 mb-2 p-4 hover:bg-slate-200">
                        <h3 className="font-semibold mr-6">{tD.title}</h3>
                        <span>{tD.shortDesc}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Resources;