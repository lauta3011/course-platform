import React, { useState } from "react";

import Popup from "../components/Popup";
import Banner from "../components/Banner";
import TaskFeed from "../components/TaskFeed";
import Form from "../components/Form";

const Home: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="h-screen flex flex-col">
            <Banner addNewItem={() => setShowPopup(!showPopup)}/>
            <TaskFeed />

            {showPopup && <Popup  handleClose={() => setShowPopup(false)}><Form/></Popup>}
        </div>
    )
}

export default Home;