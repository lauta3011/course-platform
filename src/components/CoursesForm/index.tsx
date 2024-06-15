import React, { useState } from "react";

import Icon from "../Icon";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

import { ICourse } from "../../interfaces";
import ActionButton from "../ActionButton";

import { useStore } from "../../store";
import Input from "../Input";

interface ICourseForm {
    handleClose: () => void
}

const CourseForm: React.FC<ICourseForm> = ({ handleClose }) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const { addCourse } = useStore((state) => state);

    function handleAddNewCourse() {
        if (title !== '' && desc !== '') {
            const course: ICourse = {
                title: title,
                description: desc,
                icon: faEraser.iconName
            }
            addCourse(course);
            handleClose();
        }
    }

    return (
        <div className="flex flex-col overflow-hidden rounded p-4 bg-slate-300 relative m-5 z-10 shadow-2xl">
            <div className="font-thin text-xl text-justify mb-6">
                <p>Add a new item to keep track of what you are studying, then you will be able to attach the links of different material resources you go finding on your learning journey</p>
            </div>

            <div className="flex items-center mt-2 mb-2 bg-slate-100 rounded">
                <div className="flex items-center m-4">
                    <Icon opacity="100%" size={56} iconBkg="#36d336" icon={faEraser} />
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="h-14">
                        <Input size={28} label="Course title" type="text" onChange={(value) => setTitle(value)}/>
                    </div>
                    <div>
                        <Input size={18} label="Description of what you are learning" type="text" onChange={(value) => setDesc(value)}/>
                    </div>
                </div>
            </div>

            <ActionButton handleSecondary={() => handleClose()} handlePrimary={() => handleAddNewCourse()} secondAction={true} primaryActionText="ADD COURSE" secondActionText="CANCEL"/>
        </div>
    )
}

export default CourseForm;