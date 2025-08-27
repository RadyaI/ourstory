"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

export default function Q3() {
  const [status, setStatus] = useState(true);
  const [percobaan, setPercobaan] = useState(2)
  const [jawaban, setJawaban] = useState("B");
  const [userJawab, setUserJawab] = useState("")
  const [timer, setTimer] = useState(60)

  function cekJawaban() {
    if (userJawab === "") {
      toast.error("Pilih dulu jawabannya!");
      return;
    }
    if (jawaban === userJawab) {
      toast.success("Yeaayy benar 🎉")
    } else {
      if (percobaan === 0) {
        setStatus(false)
        setTimer(60)
        sessionStorage.setItem("status3", "false")
      }
      setPercobaan((prev) => prev - 1)
      toast.error(`Salaaah 😢, sisa ${percobaan} kali coba`)
    }
  }

  const pilihan = [
    { id: "A", text: "4" },
    { id: "B", text: "8" },
    { id: "C", text: "6" },
    { id: "D", text: "12" },
    { id: "E", text: "Error" },
  ]

  useEffect(() => {
    setStatus(!sessionStorage.getItem("status3"))
  }, [])

  useEffect(() => {
    let interval: any;
    if (!status && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    if (timer === 0) {
      setStatus(true);
      setPercobaan(2);
      sessionStorage.removeItem("status3");
    }
    return () => clearInterval(interval);
  }, [status, timer]);

  return (
    <>
      <Toaster position="top-right" />

      {/* 🔥 Judul + Tombol Kembali */}
      <div className="w-[90%] md:w-[50%] mx-auto mt-5 flex items-center justify-between text-white">
        <h1 className="text-2xl font-bold">SOAL 3</h1>
        <Link href="/quiz">
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-semibold">
            Kembali
          </button>
        </Link>
      </div>

      {/* 🔥 Soal */}
      <div className="text-white mx-auto mt-5 w-[90%] md:w-[50%] h-[170px] md:h-[270px] relative">
        <Image
          src={"/quiz/3.png"}
          alt="Soal 3"
          fill
          className="rounded-lg object-contain"
        />
      </div>

      {/* 🔥 Pilihan Jawaban */}
      <div className="mb-20 text-white mx-auto mt-5 w-[90%] md:w-[50%] rounded-lg p-5 space-y-4 bg-gray-900/50">
        {pilihan.map((item) => (
          <button
            key={item.id}
            onClick={() => setUserJawab(item.id)}
            disabled={!status}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 
              ${userJawab === item.id && status ? "bg-blue-600 border-blue-400 text-white shadow-lg scale-105" : "bg-gray-800 border-gray-700 hover:bg-gray-700"}
              ${!status ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <span className="font-bold">{item.id}.</span> {item.text}
          </button>
        ))}

        {status && (
          <button
            onClick={cekJawaban}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg font-semibold text-white transition-all"
          >
            Submit Jawaban
          </button>
        )}

        {!status && (
          <button
            onClick={() => toast.error("Tunggu yaaa ⏳")}
            className="w-full mt-4 cursor-not-allowed bg-red-600 px-4 py-3 rounded-lg font-semibold text-white transition-all"
          >
            STOP - batas percobaan habis - tunggu {timer} detik
          </button>
        )}
      </div>
    </>
  )
}
