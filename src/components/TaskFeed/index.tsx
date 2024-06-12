import React from "react";

import { tasks } from "../../utils/test-data";

import Item from "../Item";
import NoTask from "../NoTask";

const TaskFeed: React.FC = () => {
    return (
        <div className="bg-orange-500 flex-grow">
            {tasks.length <= 0 ? <NoTask /> : tasks.map((t, index) => {
                return <Item key={index} {...t} />
            })}
        </div>
    )
}

export default TaskFeed;