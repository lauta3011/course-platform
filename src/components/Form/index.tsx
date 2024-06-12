import React from "react";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

const Form: React.FC = () => {
    return (
        <div className="flex-col flex bg-slate-200 m-6 rounded">
            <div className="font-semibold text-3xl text-slate-950 p-4">
                <h1>Add resource</h1>
            </div>

            <div className="flex grow flex-row">
                <Input type="text" label="Title" onChange={(change) => console.log(change)}  />
                <Input type="text" label="Link" onChange={(change) => console.log(change)}  />
            </div>

            <TextArea label="Notes" onChange={(change) => console.log(change)}  />
        </div>
    )
}

export default Form;