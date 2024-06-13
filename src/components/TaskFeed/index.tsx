import React from "react";

// import { tasks } from "../../utils/test-data";

import Item from "../Item";
import NoTask from "../NoTask";

import { useStore } from "../../store";

const TaskFeed: React.FC = () => {
    const { courses } = useStore((state) => state);

    return (
        <div className="bg-orange-500 flex-grow">
            {courses.length <= 0 ? <NoTask /> : courses.map((t, index) => {
                return <Item key={index} id={t.id} name={t.title} desc={t.description} />
            })}
        </div>
    )
}

export default TaskFeed;