import { db } from "@/config/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoClose } from "react-icons/io5";

export default function CreateStoryText({ onClose }: { onClose: () => void }) {

    const [story, setStory] = useState<string>("")
    const [penulis, setPenulis] = useState<string>("")

    async function createStory() {
        try {

            if (penulis == "") {
                toast.error("Eitss penulisnya dipilih dulu")
                return;
            }
            if (story == "") {
                toast.error("Eitts storynya ga boleh kosong ya!")
                return;
            }

            const alert = await swal({
                icon: "warning",
                title: "Mau diupload?",
                buttons: ["Belum", "Yaps"]
            })

            if (alert) {
                await addDoc(collection(db, "story"), {
                    story: story,
                    penulis: penulis,
                    createdAt: Timestamp.now().toMillis()
                })
                toast.success("Berhasil yeay!")
                setStory("")
                setPenulis("")
                onClose()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Toaster position='bottom-right' />
            <div className="fixed left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-4/6 z-99 w-[90%] h-fit md:w-[30%] md:h-fit bg-black shadow-lg shadow-pink-500/50 rounded-3xl">
                <div className="text-4xl mx-auto w-[90%] h-15 text-pink-500 flex items-center justify-end">
                    <IoClose onClick={onClose} className='cursor-pointer' />
                </div>

                {/* FORM */}
                <div className=" text-white w-[90%] mx-auto mt-5 md:mt-0 p-5">
                    <div className="flex flex-col mt-4 text-white">
                        <label className="mb-2">Siapa yang nulis?</label>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="penulis"
                                value="Radya"
                                checked={penulis === "Radya"}
                                onChange={(e) => setPenulis(e.target.value)}
                                className="accent-pink-500"
                            />
                            Radya
                        </label>

                        <label className="flex items-center gap-2 mt-1">
                            <input
                                type="radio"
                                name="penulis"
                                value="Aini"
                                checked={penulis === "Aini"}
                                onChange={(e) => setPenulis(e.target.value)}
                                className="accent-pink-500"
                            />
                            Aini
                        </label>
                    </div>

                    <div className="flex flex-col mt-4">
                        <label>Ada cerita apa nih?</label>
                        <textarea onChange={(e) => setStory(e.target.value)} className="p-2 outline-none mt-2" placeholder="Ketik disini..." ></textarea>
                    </div>
                    <button onClick={createStory} className='mt-4 cursor-pointer bg-white text-black py-1 px-2 rounded-md font-bold'>Upload</button>
                </div>
                {/* FORM */}

            </div>
        </>
    )
}