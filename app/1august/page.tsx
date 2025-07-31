"use client"

import CircleOne from "@/components/rootPage/sticker"
import { db } from "@/config/firebase"
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import Image from "next/image"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
export default function LetterPage() {

    const [balasan, setBalasan] = useState("")
    const [id, setId] = useState("")
    const [btnText, setBtnText] = useState("SAVE")

    async function sendBalasan() {
        try {
            const docRef = doc(db, "balasan", id)
            await updateDoc(docRef, { text: balasan })
            toast.success("Berhasil Updatee")
            setBtnText("SAVED")
            setTimeout(() => {
                setBtnText("SAVE")
            }, 1000);
        } catch (error) {
            console.log(error)
        }
    }

    async function getBalasan() {
        try {
            const get = await getDocs(query(collection(db, "balasan"), where("blog", "==", "1august")))
            get.forEach((data) => {
                setBalasan(data.data().text)
                setId(data.id)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBalasan()
    }, [])

    return (
        <>
            <Toaster position="bottom-right" />
            <CircleOne></CircleOne>
            <div className="rounded-lg md:bg-black/50 text-white text-justify w-full md:w-[60%] mx-auto mt-10 mb-10 p-6">
                <small>1 Agustus 2025</small>
                <p className="mt-5">
                    <i>Pada suatu hari meng-drama ngomong "jangan lupa 1 Agustus ya"</i>, aku langsung mikir haaa? emang 1 Agustus hari apa?
                    di kalender juga ga ada hari apa apa tuh, hmmm coba aku cari di google aah <i>browsing... 1 agustus hari apa?</i>


                </p>
                <Image className="mt-5" src={"/assets/blog/1august_1.png"} alt="google" width={600} height={500}></Image>
                <p className="mt-5">
                    Lah kayanya bukan ini deh yang dimaksud heummm... <br />
                    <i>cari lagi.. 1 Agustus hari apa</i>
                </p>
                <Image className="mt-5 object-cover" src={"/assets/blog/1august_3.png"} alt="google" width={500} height={1}></Image>
                <p className="mt-5">
                    buset udah pasti bukan ini
                </p>
                <Image className="mt-5 object-cover" src={"/assets/blog/1august_4.png"} alt="google" width={500} height={1}></Image>
                <p className="mt-5">bukan ini juga AAAAAA HARI APAA <i>*teriak</i> OH aku nemuuu</p>
                <Image className="mt-5 object-cover" src={"/assets/blog/1august_5.png"} alt="google" width={500} height={1}></Image>
                <p className="mt-5">mueheheh udah pasti ini gasih, oh gituu emang Girlfriend Day itu apa sih,
                    <i> membaca informasi</i> eh tapi kok...
                </p>
                <p className="mt-5 bg-white/15 p-4 rounded-xl">Girlfriend Day diperingati pada 1 Agustus oleh masyarakat Amerika. Kendati demikian, peringatan ini juga populer di negara lain.
                    <br />
                    Girlfriend Day dirayakan bukan untuk laki-laki terhadap pacar mereka. Di Amerika perayaan ini justru sebagai bentuk "woman support woman".
                    <br />
                    Girlfriend Day pertama kali dirayakan pada tahun 2004 sebagai kesempatan bagi sahabat perempuan untuk saling mengucapkan terima kasih.
                </p>
                <small className="mt-5">sumber: <a className="text-blue-300" href="https://www.kompas.tv/lifestyle/608689/1-agustus-2025-memperingati-hari-apa-ada-girlfriend-day-hingga-hari-kanker-paru">www.kompas.tv</a></small>
                <p className="mt-5">
                    <i>mencoba memahami</i>, ooh jadi Girlfriend Day itu gitu toh, tapi emang bener ini kan yang meng-drama maksud?
                    yaah itu kan di Amerika 😼 kalo gitu aku juga mau mengucapkan sesuatu deh.
                </p>
                <p className="mt-5"><i>Ekkhem</i> sebagai temen biasa, temen hidup, my girl (kalo indo agak geli) atau siapun itu kamu anggep aku,
                    terima kasih yaaa udah bisa bertahan selama ini, ya walaupun belum lama juga sih ga sampe 6 bulan kita kenal.
                </p>
                <h1 className="mt-5 text-3xl">Chapter 1 - KESABARAN</h1>
                <p className="mt-5">
                    Emang bertahan dalam hal apa? yaah ini dan itu, yang pertama aku mau apresiasi tuh KESABARAN, ya kita tau kamu atau perempuan pada normalnya
                    emang punya <i>Mood Swing</i> jadi moodnya gampang berubah, tapi bedanya kamu se-parah apapun mood atau perasaanmu kamu masih tetep bisa ngendaliin diri
                    gitu, masih bisa menenangkan diri sambil mikirin dampaknya <i>that's why i like you hwhw</i> bahkan dengan ke-tidak pekaanku kamu masih
                    mau nurunin ego buat ngasih tau aku maaf ya~
                </p>
                <h1 className="mt-5 text-3xl">Chapter 2 - SIFAT</h1>
                <p className="mt-5">
                    Kamu punya banyak sifat, tapi yang ku <i>highlight</i> tuh CLINGY sama DEWASA, kamu punya 2 sifat yang berlawanan itu dalam dirimu, jadi
                    se-badmood badmoodnya kamu atau biasanya overthinking, kamu masih bisa nyoba buat berfikir jernih + nenangin diri, sebaliknya se-serius seriusnya kamu,
                    kamu juga punya sifat yang CLINGY atau CHILDISH <i>that's why i like you (2)</i>.
                </p>
                <p className="mt-5">Aku ngerasa kamu orang yang keren banget bisa seimbang gituu, responku:</p>
                <ul className="mt-5">
                    <li>- Aku kalo kamu clingy: <b>ututuuu gemashnyaaa pengen cokot</b></li>
                    <li>- Aku Kalo kamu dewasa: <b>siap laksanakan mommy 🫡</b></li>
                </ul>
                <p className="mt-5">
                    jadi kamu ga usah ngerasa insecure / aneh dengan sifatmu (walaupun kayanya engga juga) kamu yang sekarang udah 100% keren poll
                </p>
                <p className="mt-5">KAMU: </p>
                <div className="mt-2 w-full h-10 flex">
                    <div className="w-1/2 h-full bg-pink-800 flex justify-center items-center">CLINGY 50%</div>
                    <div className="w-1/2 h-full bg-purple-800 flex justify-center items-center">MATURE 50%</div>
                </div>
                <h1 className="mt-5 text-3xl">Chapter 3 - SEMANGAT</h1>
                <p className="mt-5">
                    Semangat ini maksudnya dalam hal kamu mengejar sesuatu, tapi kayanya beberapa % karena tuntutan yang harus kamu capai mau engga mau, yah tetep aja
                    semangatmu yang kayak "POKOKNYA AKU HARUS..." itu sering kali ikutan bangkitin semangatku juga yang sangat langka itu hwhw.
                </p>
                <p className="mt-5">Setiap proses yang kamu jalanin tuh terasa detail, jelas dan teratur gitu, sepusing apapun hal yang kamu pelajari tetep kamu paksain
                    "POKOKNYA AKU HARUS BISA" walau kadang hasil yang kamu pelajari ga sesuai ekspektasi atau kayanya susah banget masuk ke otak, tapi gapapaaa
                    itu normal banget kokk, setiap kali aku belajar ngoding juga dari 100% paling 80% yang masuk ke otakku 20% nya nyusul biasanya, tapi ujung ujungnya pasti paham 100%,
                    semangaaatttt belajarnyaaaa.
                </p>
                <p className="mt-5">Semoga aku bisa liat kamu pake lanyard dari google yaaaa, terus tulisannya gini</p>
                <div className="border mt-5 w-40 h-55">
                    <div className="w-full h-[60%] flex justify-center items-center">
                        <div className="border h-25 w-25 rounded-full flex justify-center items-center text-4xl">😽</div>
                    </div>
                    <div className="w-full h-[20%] flex justify-center items-center">Nur Aini</div>
                    <div className="w-full h-[20%] text-center text-[13px]"><small>Machine Learning Engineer</small></div>
                </div>
                <p className="mt-5">tapi ingettt mimpi yang tinggi juga harus disertai tanggung jawab dan usaha yang tinggi juga semangaaattt, kamu pasti bisa kokkk.</p>
                <h1 className="mt-5 text-3xl">Chapter 4 - INI AKUU (si penulis)</h1>
                <p className="mt-5">Ini chapter terakhir buat kali ini, aku juga ngga tau mau diisi apaaa tapi yang pertama, aku mau minta maaf buat semua kesalahankuu,
                    yang aku sadar atau engga sadar maaf yaa, atau ada kelakuanku yang kadang bikin kamu jengkel / greget gitu maafff hwhw, mungkin kedepannya kamu masih bakal tetep gregetan mueheh.
                </p>
                <p className="mt-5">Kepekaan yang tidak kunjung muncul ini juga pasti jadi salah satu penyebab kamu kesel ke aku, aaaaaa akan ku cobaa, kamu pasti pengen gitu
                    ngerasain aku yang satset tanpa kamu harus ngomong maaf yaaa love uuu 💖.
                </p>
                <p className="mt-5">Sama iniii kayanya kamu ngerasa aku kurang gentle gituu, pasif dan setengah setengah maafff jugaa yaaa. Karena ini pertama kali aku "deket" sama perempuan
                    jadii canggung harus memperlakukannya kaya gimanaa, mohon bimbingannya yaa mommyy hwhw.
                </p>
                <p className="mt-5">
                    SELESAIIIIIIIII setelah kamu baca kamu bisa lihat web yang aku buat ini yaaa <a className="text-blue-400 cursor-pointer" href="https://savememo.vercel.app">di sini</a>
                </p>
                <p className="mt-10 text-gray-500">
                    <small>Written by Radya 100% & chatgpt 0%</small>
                </p>
            </div>

            <div className="rounded-lg md:bg-black/50 text-white text-justify w-full md:w-[60%] mx-auto mt-10 mb-10 p-6">
                <p>Kamu bisa ketik disini kalo mau bales yaaa</p>
                <p>Tapi sowry cuma bisa ngetik teks biasa hehe, ga bisa bold, garis miring dan lain lain</p>
                <textarea value={balasan} onChange={(e) => setBalasan(e.target.value)} className="border w-full h-[300px] p-3 rounded-xl mt-4" placeholder="Tulis disini"></textarea>
                <button onClick={sendBalasan} className="mt-3 border-2 cursor-pointer border-pink-500 py-1 px-5 rounded-md hover:bg-pink-500 transition-all">{btnText}</button>
            </div>
        </>
    )
}