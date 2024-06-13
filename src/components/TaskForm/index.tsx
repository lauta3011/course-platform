import React, { useState } from "react";
import Icon from "../Icon";
import { faEraser, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { useStore } from "../../store";
import { ICourse } from "../../interfaces";

const TaskForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const { addNewCourse } = useStore((state) => state);

    function handleAddNewCourse() {
        if (title !== '' && desc !== '') {
            const course: ICourse = {
                title: title,
                description: desc,
                icon: faEraser.iconName
            }
            addNewCourse(course)
        }
    }

    return (
        <div className="flex flex-col overflow-hidden rounded bg-slate-200 h-44 relative m-5 z-10 shadow-2xl">
            <div className="flex items-center">
                <div className="flex items-center m-4">
                    <Icon opacity="100%" size={56} iconBkg="#36d336" icon={faEraser} />
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="h-14">
                        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="bg-transparent appearance-none text-3xl focus:outline-none border-none w-11/12"/>
                    </div>
                    <div>
                        <input type="text" onChange={(e) => setDesc(e.target.value)} placeholder="Short description of the thing you are going to learn " className="bg-transparent appearance-none focus:outline-none border-none w-11/12"/>
                    </div>
                </div>
            </div>

            <div className="flex justify-end items-center">
                <div onClick={() => console.log('cerra')}>
                    <span className="text-slate-500 hover:text-slate-700 cursor-pointer">CANCEL</span>
                </div>
                <Button height={36} width={74} icon={faPlus} handleClick={() => handleAddNewCourse()}/>
            </div>
        </div>
    )
}

export default TaskForm;