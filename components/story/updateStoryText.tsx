"use client"

import { db } from "@/config/firebase"
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { IoClose } from "react-icons/io5"

export default function UpdateStoryText({ onClose }: { onClose: () => void }) {

    const [story, setStory] = useState("")
    const [date, setDate] = useState("")
    const params = useSearchParams()
    const router = useRouter()
    const id = params.get("id")

    async function updateStory() {
        try {
            toast("Bentar yaaa", { icon: "😼" })
            await updateDoc(doc(db, "story", id!), {
                story: story
            })
            toast.success("Berhasil update story")
            onClose()
            router.replace("/")

        } catch (error) {
            console.log(error)
        }
    }

    async function deleteStory() {
        try {
            const alert = await swal({
                icon: "warning",
                title: "yakin mau dihapus?",
                buttons: ["Engga", "Iya deh"]
            })

            if (alert) {
                await deleteDoc(doc(db, "story", id!))
                toast.success("Berhasil dihapus")
                onClose()
            } else {
                toast("yeayy ga jadi dihapus", {icon: "😽"})
            }

        } catch (error) {
            console.log(error)
        }
    }

    async function getStory() {
        if (!id) return;

        try {
            const get = await getDoc(doc(db, "story", id!))
            setStory(get.data()?.story)
            setDate(get.data()?.createdAt)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getStory()
    }, [id])

    function closeModal() {
        onClose()
        router.replace("/")
    }

    return (
        <>
            <Toaster position='bottom-right' />
            <div className="fixed left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-4/6 z-99 w-[90%] h-fit md:w-[30%] md:h-fit bg-black shadow-lg shadow-pink-500/50 rounded-3xl">
                <div className="text-4xl mx-auto w-[90%] h-15 text-pink-500 flex items-center justify-end">
                    <IoClose onClick={closeModal} className='cursor-pointer' />
                </div>

                {/* FORM */}
                <div className=" text-white w-[90%] mx-auto mt-5 md:mt-0 p-5">
                    <small className="text-gray-300">Story tanggal {new Date(date).toLocaleString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}</small>
                    <div className="flex flex-col mt-4">
                        <label>Mau update cerita nih?</label>
                        <textarea onChange={(e) => setStory(e.target.value)} value={story} className="p-2 outline-none mt-2 border border-gray-300 rounded-xl" placeholder="Ketik disini..." ></textarea>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={deleteStory} className='mt-4 cursor-pointer bg-red-400 text-black py-1 px-2 rounded-md font-bold'>Delete</button>
                        <button onClick={updateStory} className='mt-4 cursor-pointer bg-blue-300 text-black py-1 px-2 rounded-md font-bold'>Update</button>
                    </div>
                </div>
                {/* FORM */}

            </div>
        </>
    )
}