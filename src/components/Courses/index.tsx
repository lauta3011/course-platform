import React from "react";

// import { tasks } from "../../utils/test-data";

import Course from "../Course";
import NoCourses from "../NoCourses";

import { useStore } from "../../store";
import { IResource } from "../../interfaces";

const TaskFeed: React.FC = () => {
    const { courses } = useStore((state) => state);
    return (
        <div className="bg-orange-500 flex-grow">
            {courses.length <= 0 ? <NoCourses /> : courses.map((t, index) => {
                const resources: IResource[] = t.resources;
                return <Course key={index} resources={resources} id={t.id} name={t.title} desc={t.description} />
            })}
        </div>
    )
}

export default TaskFeed;