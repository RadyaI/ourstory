"use client"
import dynamic from 'next/dynamic';
const FileUploaderRegular = dynamic(
    () => import('@uploadcare/react-uploader/next').then(mod => mod.FileUploaderRegular),
    { ssr: false }
);

import { IoClose } from "react-icons/io5";
import "@uploadcare/react-uploader/core.css";
import { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '@/config/firebase';
import toast, { Toaster } from 'react-hot-toast';

export default function CreateStory({ onClose }: { onClose: () => void }) {

    const [caption, setCaption] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    async function createMemory() {
        try {

            if (imgUrl == "") {
                toast("Upload dulu fotonyaaa", {
                    icon: "😡"
                })
                return;
            }

            toast("Sebentar yaa..", {
                icon: "💖"
            })
            await addDoc(collection(db, "memories"), {
                imgUrl: imgUrl,
                caption: caption,
                date: Timestamp.now().toMillis()
            })
            setCaption("")
            setImgUrl("")
            onClose()
            toast.success("Berhasil")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Toaster position='bottom-right' />
            <div className="fixed left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-4/6 z-99999 w-[90%] h-[50%] md:w-[30%] md:h-[45%] bg-black shadow-lg shadow-pink-500/50 rounded-3xl">
                <div className="text-4xl mx-auto w-[90%] h-15 text-pink-500 flex items-center justify-end">
                    <IoClose onClick={onClose} className='cursor-pointer' />
                </div>

                {/* FORM */}
                <div className=" text-white w-[90%] mx-auto mt-5 md:mt-0 p-5">
                    <FileUploaderRegular
                        pubkey="251762a6b0d7107bbcb5"
                        multiple={false}
                        imgOnly={true}
                        onChange={(files: any) => {
                            // console.log("FILE:", files);
                            setImgUrl("https://ucarecdn.com/" + files.allEntries[0]?.uuid + "/" + files.allEntries[0]?.file.name);
                        }}
                        onCommonUploadSuccess={(e: any) =>
                            console.log(e)
                        }
                    />
                    <div className="flex flex-col mt-4">
                        <label>Foto apa nih?</label>
                        <input onChange={(e) => setCaption(e.target.value)} type="text" className="p-2 outline-none mt-2" placeholder="Kasih tau dong ini foto apa..." />
                    </div>
                    <button onClick={createMemory} className='mt-4 cursor-pointer bg-white text-black py-1 px-2 rounded-md font-bold'>Upload</button>
                </div>
                {/* FORM */}

            </div>
        </>
    )
}