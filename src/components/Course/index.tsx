import React, { useState }  from "react";
import { faEdit, faFolder} from "@fortawesome/free-solid-svg-icons";

import { ICourse } from "../../interfaces";

import Icon from "../Icon";
import Resources from "../Resources";

const Course: React.FC<ICourse> = ({ id, title, description, handleEdit }) => {
    const [showResources, setShowResources] = useState(false);
    
    return (
        <>
            <div className="flex items-center justify-between bg-slate-200 hover:-translate-y-1 transition h-28 relative m-5 z-10 overflow-hidden rounded shadow-2xl">
                <div onClick={() => setShowResources(!showResources)}  className="flex items-center p-4 w-full h-full">
                    <Icon opacity="100%" size={28} iconBkg="#36d336" icon={faFolder} />

                    <div className="pl-4">
                        <h1 className="text-slate-950 text-4xl">{title}</h1>
                        <span>{description}</span>
                    </div>
                </div>

                <div onClick={() => handleEdit({ id, title, description })} className="flex justify-center mr-2 rounded hover:bg-slate-300">
                    <Icon opacity="55%" size={28} iconBkg="transparent" icon={faEdit} />
                </div>
            </div>

            {showResources && <Resources course_ref={id} />}
        </>
    )
}

export default Course;