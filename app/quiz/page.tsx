"use client"

import { db } from "@/config/firebase"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Quiz() {
  const quizzes = [
    { id: 1, title: "Soal 1 - Java", badge: "done" },
    { id: 2, title: "Soal 2 - Java", badge: "done" },
    { id: 3, title: "Soal 3 - Java", badge: "done" },
    { id: 4, title: "Soal 4 - SQL", badge: "new" },
    { id: 5, title: "Soal 5 - SQL", badge: "new" },
    { id: 6, title: "Soal 6 - SQL", badge: "new" },
  ]

  const [q, setQuiz] = useState<any[]>([])

  async function getQuiz() {
    try {
      const doc = await getDocs(query(collection(db, "quiz"), orderBy("id", "asc")))
      const temp: any[] = []
      doc.forEach((d) => {
        let data = d.data()
        temp.push({ id: data.id, ...data })
      })
      setQuiz(temp)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQuiz()
  }, [])

  return (
    <>
      <h1 className="text-white mx-auto w-fit mt-7 text-4xl font-bold">
        Quiz Timee...
      </h1>

      <div className="text-white flex flex-col gap-5 w-[95%] md:w-[70%] p-6 mx-auto mt-10">
        {q.map((quiz) => (
          <Link
            key={quiz.id}
            href={`/quiz/${quiz.id}`}
            className="block p-5 rounded-lg border border-gray-700 bg-gray-800/60 hover:bg-gray-700/70 hover:border-blue-400 transition-all duration-300 shadow-md"
          >
            <p className="text-lg font-semibold">
              {quiz.id}. {quiz.title}
            </p>
            {quiz.badge && (
              <span className={`text-sm ${quiz.badge === "done" ? "text-green-300" : "text-blue-300"}`}>{quiz.badge}</span>
            )}
          </Link>
        ))}
      </div>
    </>
  )
}
