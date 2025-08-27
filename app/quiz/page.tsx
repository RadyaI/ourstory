import Link from "next/link"


export default function Quiz() {
    return (
        <>
            <h1 className="text-white mx-auto w-fit mt-7 text-4xl font-bold">Quiz Timee...</h1>
            <div className="border-2 text-white border-white w-[95%] md:w-[80%] p-10 mx-auto mt-10">
                <Link href={"/quiz/1"}>1. Soal 1 - java <span className="text-blue-300">(new)</span></Link>
            </div>
        </>
    )
}   