import React from "react";

import Button from "../BannerButton";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface IBanner {
    addNewItem: () => void
}

const Banner: React.FC<IBanner> = ({ addNewItem }) => {
    return (
        <header className="flex items-center h-30 z-10 bg-orange-950 justify-center p-14 shadow-2xl">
            <div className="flex-col w-96 text-slate-100">
                <h1 className="text-5xl">¡List your learns!</h1>
                <h3 className="text-xl font-thin mt-6">Add what you want to learn and attach the concepts along with the information and the source where you obtained them in one place</h3>
            </div>
            
            <Button handleClick={() => addNewItem()} height={85} width={85} icon={faPlus} />
        </header>
    )
}

export default Banner;