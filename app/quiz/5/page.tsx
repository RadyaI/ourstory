"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

export default function Q5() {
  const [status, setStatus] = useState(true);
  const [percobaan, setPercobaan] = useState(2)
  const [jawaban, setJawaban] = useState("E");
  const [userJawab, setUserJawab] = useState("")
  const [timer, setTimer] = useState(60)

  const [togglePenjelasan, setTogglePenjelasan] = useState(false)

  const soalSQL = [
    { no: 1, nama: "Radya", nim: "2311001", gender: "Laki-laki", umur: 20, jurusan: "Informatika" },
    { no: 2, nama: "Aini", nim: "2311002", gender: "Laki-laki", umur: 21, jurusan: "Sistem Informasi" },
    { no: 3, nama: "Jiggy", nim: "2311003", gender: "Perempuan", umur: 19, jurusan: "Teknik Komputer" },
    { no: 4, nama: "Andi", nim: "2311004", gender: "Laki-laki", umur: 22, jurusan: "Teknik Elektro" },
    { no: 5, nama: "Maya", nim: "2311005", gender: "Perempuan", umur: 20, jurusan: "Manajemen Informatika" },
    { no: 6, nama: "Rizky", nim: "2311006", gender: "Laki-laki", umur: 23, jurusan: "Data Science" },
    { no: 7, nama: "Dewi", nim: "2311007", gender: "Perempuan", umur: 21, jurusan: "Informatika" },
    { no: 8, nama: "Agus", nim: "2311008", gender: "Laki-laki", umur: 24, jurusan: "Sistem Informasi" },
    { no: 9, nama: "Nina", nim: "2311009", gender: "Perempuan", umur: 22, jurusan: "Teknik Komputer" },
    { no: 10, nama: "Joko", nim: "2311010", gender: "Laki-laki", umur: 20, jurusan: "Informatika" },
  ];

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
        sessionStorage.setItem("status5", "false")
      }
      setPercobaan((prev) => prev - 1)
      toast.error(`Salaaah 😢, sisa ${percobaan} kali coba`)
    }
  }

  const pilihan = [
    { id: "A", text: "SELECT Nama & NIM FROM MAHASISWA" },
    { id: "B", text: "SELECT Nama and NIM FROM MAHASISWA" },
    { id: "C", text: "SELECT Column FROM MAHASISWA" },
    { id: "D", text: "SELECT Tabel FROM MAHASISWA" },
    { id: "E", text: "SELECT Nama, NIM FROM MAHASISWA" },
  ]

  useEffect(() => {
    setStatus(!sessionStorage.getItem("status5"))
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
      sessionStorage.removeItem("status5");
    }
    return () => clearInterval(interval);
  }, [status, timer]);

  return (
    <>
      <Toaster position="top-right" />

      {/* Judul + Tombol Kembali */}
      <div className="w-[90%] md:w-[50%] mx-auto mt-5 flex items-center justify-between text-white">
        <h1 className="text-2xl font-bold">SOAL 5</h1>
        <Link href="/quiz">
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-semibold">
            Kembali
          </button>
        </Link>
      </div>

      {/* SQL TABEL */}
      <div className="text-white mx-auto mt-5 w-[90%] md:w-[50%] h-[300px] md:h-[400px] relative overflow-auto">
        <h2 className="font-bold mb-4 text-green-400">TABEL MAHASISWA</h2>
        <table className="table-auto w-full border border-gray-600 text-sm md:text-base">
          <thead className="bg-gray-800">
            <tr>
              <th className="border border-gray-600 px-2 py-1">No</th>
              <th className="border border-gray-600 px-2 py-1">Nama</th>
              <th className="border border-gray-600 px-2 py-1">NIM</th>
              <th className="border border-gray-600 px-2 py-1">Gender</th>
              <th className="border border-gray-600 px-2 py-1">Umur</th>
              <th className="border border-gray-600 px-2 py-1">Jurusan</th>
            </tr>
          </thead>
          <tbody>
            {soalSQL.map((row) => (
              <tr key={row.no}>
                <td className="border border-gray-600 px-2 py-1 text-center">{row.no}</td>
                <td className="border border-gray-600 px-2 py-1">{row.nama}</td>
                <td className="border border-gray-600 px-2 py-1">{row.nim}</td>
                <td className="border border-gray-600 px-2 py-1">{row.gender}</td>
                <td className="border border-gray-600 px-2 py-1 text-center">{row.umur}</td>
                <td className="border border-gray-600 px-2 py-1">{row.jurusan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-white mt-4 mx-auto w-[90%] md:w-[50%]">
        <p onClick={penjelasan} className="bg-gray-800 w-fit px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700">Penjelasan</p>
      </div>

      {/* PENJELASAN */}
      {togglePenjelasan && (<div className="mb-5 text-white mx-auto mt-5 w-[90%] md:w-[50%] rounded-lg p-5 space-y-4 bg-gray-900/50">
        <h2 className="font-bold">PENJELASAN</h2>
        <p>Untuk mengambil data yang <b>spesifik</b> pada tabel, kita harus menyebut nama <b>kolom</b> yang ingin dipanggil </p>
        <p>Jadi, apapun yang berhubungan dengan <b>"SEMUA KOLOM"</b> kita selalu pake simbol bintang "*", Misal: </p>
        <p className="text-red-400">SELECT * FROM MAHASISWA</p>
        <p>Nah, kalo mau panggil kolom yang spesifik, * nya kita ganti pake nama kolomnya</p>
        <p>Misal, cuma pengen ambil namanya doang: </p>
        <p className="text-red-400">SELECT <span className="text-yellow-400">Nama</span> FROM MAHASISWA</p>
        <p>Tapii Jinggy pengen ambil <b>Nama</b> sama <b>NIM</b> doang, gimana dong?</p>
        <p>Tinggal tambahin aja nama kolomnya</p>
        <p className="text-red-400">SELECT <span className="text-yellow-400">Nama, NIM</span> FROM MAHASISWA</p>
        <p>Jadi tinggal dipisah pake koma "," begituuu.</p>
      </div>)}

      {/* SOAL */}
      <div className="text-white mt-5 mx-auto w-[90%] md:w-[50%]">
        <p className="font-bold mb-2 text-green-400">INSTRUKSI</p>
        <p>Jiggy ingin mengambil data berupa "Nama" dan "NIM" pada tabel MAHASISWA, bantu Jiggy untuk membuat query sql untuk mendapatkan data yang diinginkan!</p>
      </div>

      {/* Pilihan Jawaban */}
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
