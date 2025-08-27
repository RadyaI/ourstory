"use client"

import Image from "next/image"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";

export default function Q1() {

    const [jawaban, setJawaban] = useState("B");
    const [userJawab, setUserJawab] = useState("")

    function cekJawaban() {
        if (userJawab === "") {
            toast.error("Pilih dulu jawabannya!");
            return;
        }

        if (jawaban === userJawab) {
            toast.success("Yeaayy benar 🎉")
        } else {
            toast.error("Salaaah 😢 coba lagi!")
        }
    }

    const pilihan = [
        { id: "A", text: "15" },
        { id: "B", text: "105" },
        { id: "C", text: '"105" + 5' },
        { id: "D", text: "Error" },
        { id: "E", text: "10" },
    ]

    return (
        <>
            <Toaster position="top-right" />
            <div className="text-white mx-auto mt-5 w-[90%] md:w-[50%] h-[170px] md:h-[270px] relative">
                <Image src={"/quiz/1.png"} alt="Soal 1" fill className="rounded-lg object-contain"/>
            </div>

            {/* Pilihan Jawaban */}
            <div className="mb-20 text-white mx-auto mt-5 w-[90%] md:w-[50%] rounded-lg p-5 space-y-4 bg-gray-900/50">
                {pilihan.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setUserJawab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border 
                            transition-all duration-200 
                            ${userJawab === item.id 
                                ? "bg-blue-600 border-blue-400 text-white shadow-lg scale-105" 
                                : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                            }`}
                    >
                        <span className="font-bold">{item.id}.</span> {item.text}
                    </button>
                ))}

                <button 
                    onClick={cekJawaban} 
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg font-semibold text-white transition-all"
                >
                    Submit Jawaban
                </button>
            </div>
        </>
    )
}
