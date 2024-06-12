import React, { useState }  from "react";

import { faArrowDown, faEraser, faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import Icon from "../Icon";
import Resources from "../Resources";

interface IItem {
    id: number,
    name: string,
    desc: string,
}

const Item: React.FC<IItem> = ({ id, name, desc }) => {
    const [showResources, setShowResources] = useState(false);

    function addNewResource() {
        console.log('agrega resource')
    }
    
    return (
        <>
            <div onClick={() => setShowResources(!showResources)} className="bg-slate-200 h-28 relative m-5 z-10 flex items-center justify-between overflow-hidden rounded shadow-2xl">
                <div className="flex items-center m-4" >
                    <Icon opacity="100%" size={28} iconBkg="#36d336" icon={faEraser} />

                    <div className="ml-4">
                        <h1 className="text-slate-950 text-4xl">{name}</h1>
                        <span>{desc}</span>
                    </div>
                </div>

                <div className="flex justify-center">
                    {!showResources ? <Icon opacity="55%" size={28} iconBkg="transparent" icon={faArrowDown} /> : <Button handleClick={() => addNewResource()} height={45} width={98} icon={faPlus} />}
                </div>
            </div>

            {showResources && <Resources taskId={id} />}
        </>
    )
}

export default Item;