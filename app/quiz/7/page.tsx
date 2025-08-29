"use client"
import { checkStatus, updateStatus } from "@/utils/quizStatus";
import Image from "next/image"
import swal from "sweetalert";
import Link from "next/link"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

export default function Q3() {
  const [status, setStatus] = useState(true);
  const [percobaan, setPercobaan] = useState(2)
  const [jawaban, setJawaban] = useState("C");
  const [userJawab, setUserJawab] = useState("")
  const [timer, setTimer] = useState(60)

  const [quizStatus, setQuizStatus] = useState(true)
  useEffect(() => {
    const fetchStatus = async () => {
      const status = await checkStatus("7")
      setQuizStatus(status!)
    }
    fetchStatus()
  }, [])

  async function statusDone() {
    const alert = await swal({
      icon: "warning",
      title: "Mau ditandain selesai?",
      buttons: ["Engga", "Iya"]
    })

    if (alert) {
      await updateStatus("7")
      setQuizStatus(false)
      toast.success("Donee")
    }

  }

  const [togglePenjelasan, setTogglePenjelasan] = useState(false)

  function penjelasan() {
    if (userJawab === "") {
      toast.success("Jawab dulu yaa")
    } else {
      setTogglePenjelasan(!togglePenjelasan)
    }
  }

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
        sessionStorage.setItem("status7", "false")
      }
      setPercobaan((prev) => prev - 1)
      toast.error(`Salaaah 😢, sisa ${percobaan} kali coba`)
    }
  }

  const pilihan = [
    { id: "A", text: "Lulus" },
    { id: "B", text: "Tidak boleh masuk" },
    { id: "C", text: "Cadangan" },
    { id: "D", text: "Tidak Lulus" },
    { id: "E", text: "Error" },
  ]

  useEffect(() => {
    setStatus(!sessionStorage.getItem("status7"))
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
      sessionStorage.removeItem("status7");
    }
    return () => clearInterval(interval);
  }, [status, timer]);

  return (
    <>
      <Toaster position="top-right" />

      {/* Judul + Tombol Kembali */}
      <div className="w-[90%] md:w-[50%] mx-auto mt-5 flex items-center justify-between text-white">
        <h1 className="text-2xl font-bold">SOAL 7</h1>
        <Link href="/quiz">
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-semibold">
            Kembali
          </button>
        </Link>
      </div>

      {/* Soal */}
      <div className="text-white mx-auto mt-5 w-[90%] md:w-[60%] h-[190px] md:h-[300px] relative">
        <Image
          src={"/quiz/7.png"}
          alt="Soal 7"
          fill
          className="rounded-lg object-contain"
        />
      </div>

      <div className="text-white mx-auto mt-5 w-[90%] md:w-[50%]">
        <p onClick={penjelasan} className="bg-gray-800 w-fit px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700">Penjelasan</p>
      </div>

      {/* PENJELASAN */}
      {togglePenjelasan && (<div className="mb-5 text-white mx-auto mt-5 w-[90%] md:w-[50%] rounded-lg p-5 space-y-4 bg-gray-900/50">
        <small className="text-pink-300">By chatgpt (sementara)</small>
        <h2 className="text-2xl font-bold mt-4">🔎 Penjelasan Bagian <code>if-else</code></h2>

        <p>Jadi gini ceritanya...</p>

        <p>
          Ada dua syarat yang dicek sama program ini: <b>usia</b> dan <b>tinggi</b>.
          Programnya bakal mikir kayak orang lagi seleksi masuk tim.
        </p>

        <ul className="list-disc ml-6 space-y-4 mt-4">
          <li>
            Pertama, dia nanya:
            <code className="bg-gray-100 px-2 py-1 rounded text-black font-bold">if (usia &gt; 25)</code><br />
            👉 Artinya, <b>kalau usia lebih dari 25</b>, baru deh kita lanjut lihat tinggi badan.
            Kalau usianya masih 25 atau kurang? 💥 langsung ditolak dengan tulisan
            <span className="bg-red-100 px-2 py-1 rounded text-black font-bold">"Tidak boleh masuk"</span>.
          </li>

          <li>
            Kalau lolos usia, lanjut ke pertanyaan kedua:
            <code className="bg-gray-100 px-2 py-1 rounded text-black font-bold">if (tinggi &gt; 160)</code><br />
            👉 Artinya, <b>kalau tinggi badan lebih dari 160</b>, program bakal nyetak
            <span className="bg-green-100 px-2 py-1 rounded text-black font-bold">"Lulus"</span>.
          </li>

          <li>
            Tapi... kalau tinggi badan <b>nggak sampai 161</b>, ya nasibnya jadi cadangan.
            Output-nya: <span className="bg-yellow-100 px-2 py-1 rounded text-black font-bold">"Cadangan"</span>.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">🎬 Alurnya Ibarat Interview</h3>
        <p>
          Bayangin kamu lagi tes seleksi:<br />
          - Pertanyaan pertama: "Umurmu udah lebih dari 25?"
          ➝ Kalau belum, <b>nggak usah lanjut</b>.
          - Kalau udah, dilanjut: "Tinggimu lebih dari 160 cm?"
          ➝ Kalau iya, <b>LULUS</b>.
          ➝ Kalau kurang, ya <b>masuk cadangan</b>.
        </p>
      </div>)}

      {/* 🔥 Pilihan Jawaban */}
      <div className="mb-5 text-white mx-auto mt-5 w-[90%] md:w-[50%] rounded-lg p-5 space-y-4 bg-gray-900/50">
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

      {quizStatus && (<div className="mb-20 text-white mx-auto mt-5 w-[90%] md:w-[50%] rounded-lg p-5 space-y-4">
        <button onClick={() => statusDone()} className="bg-green-600/50 hover:bg-green-500/50 py-2 px-4 cursor-pointer rounded-md">SELESAI</button>
      </div>)}
    </>
  )
}
