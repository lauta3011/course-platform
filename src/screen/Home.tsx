import React, { useState, useEffect } from "react";

import Popup from "../components/Popup";
import Banner from "../components/Banner";
import TaskFeed from "../components/TaskFeed";
import TaskForm from "../components/TaskForm";
import { useStore } from "../store";

const Home: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { getCourses } = useStore((state) => state);

    useEffect(() => {
        getCourses()

        return () => {
            getCourses();
        }
    }, [getCourses]);

    return (
        <div className="h-screen flex flex-col">
            <Banner addNewItem={() => setShowPopup(!showPopup)}/>
            <TaskFeed />

            {showPopup && 
                <Popup  handleClose={() => setShowPopup(false)}>
                    <TaskForm />
                </Popup>
            }
        </div>
    )
}

export default Home;