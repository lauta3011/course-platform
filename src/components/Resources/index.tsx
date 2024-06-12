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
                    <div key={index} className="flex m-4 p-2 hover:shadow-lg ease-linear delay-75">
                        <h3 className="font-semibold mr-6">{tD.title}</h3>
                        <span>{tD.shortDesc}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Resources;