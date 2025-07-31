"use client"

import { db } from "@/config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import UpdateStoryText from "./updateStoryText";

export default function StoryCard() {

    const router = useRouter()
    const [storyData, setStoryData] = useState<any[]>([]);
    const [toggleAction, setToggleAction] = useState(false)
    const [toggleUpdate, setToggleUpdate] = useState(false)

    async function actionn(id: number) {
        try {
            router.replace(`/?id=${id}`)
            setToggleUpdate(!toggleUpdate)


        } catch (error) {
            console.log(error)
        }
    }

    function getStory() {
        try {
            const q = query(
                collection(db, "story"),
                orderBy("createdAt", "asc")
            );

            onSnapshot(q, (snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setStoryData(data);
            });


        } catch (error) {
            console.error("🔥 Gagal dapetin data memories:", error);
        }
    }

    useEffect(() => {
        getStory()
    }, [])

    return (
        <>
            {toggleUpdate && (<UpdateStoryText onClose={() => setToggleUpdate(false)} />)}
            <div className="mt-5 p-4 mx-auto w-[100%] sm:w-[70%]">

                {/* TEXT */}
                {storyData.map((data) =>
                    <div key={data.id} className="text-center mb-20">
                        <p className="text-xl font-bold">{new Date(data.createdAt).toLocaleString("id-ID", { year: "numeric" })}</p>
                        <small className="text-gray-500">{new Date(data.createdAt).toLocaleString("id-ID", { day: "2-digit", month: "long" })} - <span className="cursor-pointer" onClick={() => actionn(data.id)}>{data.penulis}</span></small>
                        <p className="mt-2">{data.story}</p>
                    </div>
                )}
                {/* END TEXT */}

            </div>
        </>
    )
}