"use client"

import { db } from "@/config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { FaRegTrashCan } from "react-icons/fa6";
import swal from "sweetalert";
// import toast, { Toaster } from "react-hot-toast";

export default function PhotoCard({ photo }: any | undefined) {

  async function deleteMemories(id: string) {
    try {
      const docRef = doc(db, "memories", id)
      const alert = await swal({
        title: "Yakin mau dihapus?",
        icon: "warning",
        dangerMode: true,
        buttons: ["Engga", "Iya deh"]
      })

      if (alert) {
        await deleteDoc(docRef)
        toast.success("Berhasil hapus")
      } else {
        toast("Engga jadi dihapus yeay", {
          icon: "😽"
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl w-full h-full">
        <div className="relative w-full h-74">
          <Image
            src={photo.imgUrl}
            alt={photo.caption ?? ""}
            fill
            className="object-cover cursor-pointer hover:object-contain transition-all"
          />
        </div>
        <div className="p-4 text-white flex justify-between">
          <div className="w-fit">
            <p className="text-xs text-pink-400 mb-1">{new Date(photo.date).toLocaleString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}</p>
            <p className="text-sm font-medium">{photo.caption}</p>
          </div>
          <div className="w-5 h-5 text-red-400 cursor-pointer"><FaRegTrashCan onClick={() => deleteMemories(photo.id)} /></div>
        </div>
      </div >
    </>
  );
}
