import React, { useState, useEffect } from "react";

import Popup from "../components/Popup";
import Banner from "../components/Banner";
import Courses from "../components/Courses";
import CoursesForm from "../components/CoursesForm";

import { useStore } from "../store";

const Home: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [courseToEdit, setCourseToEdit] = useState(null);
    const { getCourses } = useStore((state) => state);

    useEffect(() => {
        getCourses();

        return () => {
            getCourses();
        }
    }, [getCourses]);

    return (
        <div className="h-screen w-screen flex flex-col">
            <Banner addNewItem={() => setShowPopup(!showPopup)}/>
            <Courses editCourse={(course) => { setCourseToEdit(course); setShowPopup(!showPopup); }} />

            {showPopup && 
                <Popup handleClose={() => { setCourseToEdit(null); setShowPopup(false) }}>
                    <CoursesForm courseToEdit={courseToEdit} handleClose={() => { setCourseToEdit(null); setShowPopup(false)} } />
                </Popup>
            }
        </div>
    )
}

export default Home;