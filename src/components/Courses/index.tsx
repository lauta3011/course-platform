import React from "react";

// import { tasks } from "../../utils/test-data";

import Course from "../Course";
import NoCourses from "../NoCourses";

import { useStore } from "../../store";

interface ICourses {
    editCourse: (course: any) => void
} 

const Courses: React.FC<ICourses> = ({ editCourse }) => {
    const { courses } = useStore((state) => state);
    
    return (
        <div className="bg-orange-500 flex-grow">
            {courses.length <= 0 ? <NoCourses /> : courses.map((t, index) => {
                return <Course handleEdit={(course) => editCourse(course)} key={index} id={t.id} title={t.title} description={t.description} />
            })}
        </div>
    )
}

export default Courses;