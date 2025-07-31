"use client"

import { AiOutlinePlus } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import CreateStory from "./createStory";
import { useState } from "react";
import CreateStoryText from "../story/createStoryText";
import toast, { Toaster } from "react-hot-toast";

export default function menu() {

    const [toggleCreateStory, setToggleCreateStory] = useState(false)
    const [toggleCreateStoryText, setToggleCreateStoryText] = useState(false)

    return (
        <>
            <Toaster position="bottom-right" />
            {toggleCreateStory && (<CreateStory onClose={() => setToggleCreateStory(false)} />)}
            {toggleCreateStoryText && (<CreateStoryText onClose={() => setToggleCreateStoryText(false)} />)}

            <div className="fixed z-99999 transform -translate-x-1/2 
            bottom-7 left-1/2 w-6/8 h-15 md:w-2/12 md:h-13 bg-black rounded-md border-2 border-pink-500
            flex justify-around items-center">
                <div onClick={() => toast("Coming Soon yaaaa hwhw", {icon: "😿"})} className="w-2/6 h-full text-white flex justify-center items-center text-3xl"><CiCircleList className="cursor-pointer" /></div>
                <div onClick={() => setToggleCreateStoryText(!toggleCreateStoryText)} className="w-2/6 h-full text-white flex justify-center items-center text-2xl"><BsChatLeftText className="cursor-pointer" /></div>
                <div onClick={() => setToggleCreateStory(!toggleCreateStory)} className="w-2/6 h-full text-white flex justify-center items-center text-3xl"><AiOutlinePlus className="cursor-pointer" /></div>
            </div>
        </>
    )
}

