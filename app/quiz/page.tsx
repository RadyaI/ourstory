import Link from "next/link"

export default function Quiz() {
  const quizzes = [
    { id: 1, title: "Soal 1 - Java", badge: "" },
    { id: 2, title: "Soal 2 - Java", badge: "new" },
    { id: 3, title: "Soal 3 - Java", badge: "new" },
  ]

  return (
    <>
      <h1 className="text-white mx-auto w-fit mt-7 text-4xl font-bold">
        Quiz Timee...
      </h1>

      <div className="text-white flex flex-col gap-5 w-[95%] md:w-[70%] p-6 mx-auto mt-10">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.id}
            href={`/quiz/${quiz.id}`}
            className="block p-5 rounded-lg border border-gray-700 bg-gray-800/60 hover:bg-gray-700/70 hover:border-blue-400 transition-all duration-300 shadow-md"
          >
            <p className="text-lg font-semibold">
              {quiz.id}. {quiz.title}
            </p>
            {quiz.badge && (
              <span className="text-sm text-blue-300">{quiz.badge}</span>
            )}
          </Link>
        ))}
      </div>
    </>
  )
}
