import React, { useState } from "react";

import Icon from "../Icon";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

import { ICourse } from "../../interfaces";
import ActionButton from "../ActionButton";

import { useStore } from "../../store";
import Input from "../Input";
import IconPicker from "../IconPicker";

interface ICourseForm {
    handleClose: () => void,
    courseToEdit?: any
}

const CourseForm: React.FC<ICourseForm> = ({ courseToEdit, handleClose }) => {
    const [showIconPicker, setShowIconPicker] = useState(false);
    const [courseForm, setCourseForm] = useState({
        id: courseToEdit?.id,
        title: courseToEdit?.title,
        description: courseToEdit?.description
    });

    const { addCourse, editCourse, deleteCourse } = useStore((state) => state);

    const handleDeleteCourse = (id: number) => {
        deleteCourse(id);
        handleClose();
    };

    function handleAddNewCourse() {
        const { id, title, description } = courseForm;
        if (title !== '' && description !== '') {
            const course: ICourse = {
                id: id,
                title: title,
                description: description,
                icon: faEraser.iconName
            }
            if(courseToEdit) {
                editCourse(course);
            } else {
                addCourse(course);
            }
            handleClose();
        }
    };

    return (
        <div className="flex flex-col overflow-hidden rounded p-4 bg-slate-300 relative m-5 z-10 shadow-2xl">
            <div className="font-thin text-xl text-justify mb-6">
                <p>Add a new item to keep track of what you are studying, then you will be able to attach the links of different material resources you go finding on your learning journey</p>
            </div>

            <div className="flex items-center mt-2 mb-2 bg-slate-100 rounded">
                <div onClick={() => setShowIconPicker(!showIconPicker)} className="flex items-center m-4">
                    <Icon opacity="100%" size={56} iconBkg="#36d336" icon={faEraser} />
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="h-14">
                        <Input size={28} label="Course title" value={courseForm.title || ''} type="text" onChange={(value) => setCourseForm({...courseForm, title: value})} />
                    </div>
                    <div>
                        <Input size={18} label="Description of what you are learning" value={courseForm.description || ''} type="text" onChange={(value) => setCourseForm({...courseForm, description: value})} />
                    </div>
                </div>
            </div>

            <ActionButton handleDelete={() => handleDeleteCourse(courseForm.id)} handleSecondary={() => handleClose()} handlePrimary={() => handleAddNewCourse()} secondAction={true} hasDelete={courseToEdit ? true : false} primaryActionText="CONFIRM" secondActionText="CANCEL"/>

            {showIconPicker && <IconPicker />}
        </div>
    )
}

export default CourseForm;