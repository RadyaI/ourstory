import Link from "next/link"


export default function Quiz() {
    return (
        <>
            <h1 className="text-white mx-auto w-fit mt-7 text-4xl font-bold">Quiz Timee...</h1>
            <div className="text-white flex flex-col gap-5 w-[95%] md:w-[80%] p-10 mx-auto mt-10">
                <Link href={"/quiz/1"} className="w-fit">1. Soal 1 - java <span className="text-blue-300">(new)</span></Link>
                <Link href={"/quiz/2"} className="w-fit">2. Soal 2 - java <span className="text-blue-300">(new)</span></Link>
                <Link href={"/quiz/3"} className="w-fit">3. Soal 3 - java <span className="text-blue-300">(new)</span></Link>
            </div>
        </>
    )
}   