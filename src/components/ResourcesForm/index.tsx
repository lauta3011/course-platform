import React from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import ActionButton from "../ActionButton";

const ResourcesForm: React.FC = () => {
    return (
        <div className="flex justify-between flex-col mt-2 mb-2 p-4 hover:bg-slate-200">
            <div className="flex grow flex-row">
                <Input size={20} type="text" label="Title" onChange={(change) => console.log(change)}  />
                <Input size={20} type="text" label="Link" onChange={(change) => console.log(change)}  />
            </div>
            
            <ActionButton primaryActionText="CREATE" secondAction={true} secondActionText="CANCEL" handlePrimary={() => console.log('agrega resoruce')} handleSecondary={() => console.log('aaaa')}/>
        </div>

        // <div className="flex-col flex bg-slate-200 m-6 rounded">
        //     <div className="flex grow flex-row">
        //         <Input type="text" label="Title" onChange={(change) => console.log(change)}  />
        //         <Input type="text" label="Link" onChange={(change) => console.log(change)}  />
        //     </div>

        //     <TextArea label="Notes" onChange={(change) => console.log(change)}  />

        //     {/* TODO:  que agregar botones para ADD o CANCEL */}
        // </div>
    )
}

export default ResourcesForm;