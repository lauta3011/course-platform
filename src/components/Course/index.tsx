import React, { useState }  from "react";

import { faArrowDown, faFolder} from "@fortawesome/free-solid-svg-icons";

import Icon from "../Icon";
import Resources from "../Resources";
import { IResource } from "../../interfaces";

interface ICourseItem {
    id: number,
    name: string,
    desc: string,
    resources: IResource[]
}

const Course: React.FC<ICourseItem> = ({ id, name, desc, resources }) => {
    const [showResources, setShowResources] = useState(false);
    
    return (
        <>
            <div onClick={() => setShowResources(!showResources)} className="bg-slate-200 h-28 relative m-5 z-10 flex items-center justify-between overflow-hidden rounded shadow-2xl">
                <div className="flex items-center m-4" >
                    <Icon opacity="100%" size={28} iconBkg="#36d336" icon={faFolder} />

                    <div className="ml-4">
                        <h1 className="text-slate-950 text-4xl">{name}</h1>
                        <span>{desc}</span>
                    </div>
                </div>

                <div className="flex justify-center">
                    {!showResources && <Icon opacity="55%" size={28} iconBkg="transparent" icon={faArrowDown} /> }
                </div>
            </div>

            {showResources && <Resources resources={resources} />}
        </>
    )
}

export default Course;