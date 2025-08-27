import Link from "next/link"

export default function Quiz() {
  return (
    <>
      <h1 className="text-white mx-auto w-fit mt-7 text-4xl font-bold">
        Quiz Timee...
      </h1>
      
      <div className="text-white flex flex-col gap-5 w-[95%] md:w-[70%] p-6 mx-auto mt-10">
        {/* Card 1 */}
        <Link
          href="/quiz/1"
          className="block p-5 rounded-lg border border-gray-700 bg-gray-800/60 hover:bg-gray-700/70 hover:border-blue-400 transition-all duration-300 shadow-md"
        >
          <p className="text-lg font-semibold">1. Soal 1 - Java</p>
          <span className="text-sm text-blue-300">(new)</span>
        </Link>

        {/* Card 2 */}
        <Link
          href="/quiz/2"
          className="block p-5 rounded-lg border border-gray-700 bg-gray-800/60 hover:bg-gray-700/70 hover:border-blue-400 transition-all duration-300 shadow-md"
        >
          <p className="text-lg font-semibold">2. Soal 2 - Java</p>
          <span className="text-sm text-blue-300">(new)</span>
        </Link>

        {/* Card 3 */}
        <Link
          href="/quiz/3"
          className="block p-5 rounded-lg border border-gray-700 bg-gray-800/60 hover:bg-gray-700/70 hover:border-blue-400 transition-all duration-300 shadow-md"
        >
          <p className="text-lg font-semibold">3. Soal 3 - Java</p>
          <span className="text-sm text-blue-300">(new)</span>
        </Link>
      </div>
    </>
  )
}
