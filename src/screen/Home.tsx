import React, { useState, useEffect } from "react";

import Popup from "../components/Popup";
import Banner from "../components/Banner";
import Courses from "../components/Courses";
import CoursesForm from "../components/CoursesForm";
import { useStore } from "../store";

const Home: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { getCourses } = useStore((state) => state);

    useEffect(() => {
        getCourses();

        return () => {
            getCourses();
        }
    }, [getCourses]);

    return (
        <div className="h-screen flex flex-col">
            <Banner addNewItem={() => setShowPopup(!showPopup)}/>
            <Courses />

            {showPopup && 
                <Popup handleClose={() => setShowPopup(false)}>
                    <CoursesForm handleClose={() => setShowPopup(false)}/>
                </Popup>
            }
        </div>
    )
}

export default Home;