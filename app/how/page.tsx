'use_client'
import React from 'react'
import Image from "next/image"

const howGraidWorks = () => {
  return (
    <>
      <section>
        <main className="min-h-screen p-4">
          <div className="max-w-3xl mx-auto">
            <section className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                GRAID is a state-of-the-art learning management system revolutionizing the grading process for classes with advanced features. In addition to streamlining the grading process through AI technology, GRAID incorporates a sophisticated AI webcam proctoring feature. This feature ensures exam integrity by monitoring student activities during exams, providing a secure and reliable environment for assessment. With GRAID, educators can trust that their exams are conducted with integrity while saving valuable time previously spent on manual proctoring. GRAID serves as a robust competitor to platforms like Canvas by offering a comprehensive solution for students and graders alike. Not only does GRAID facilitate the seamless submission and grading of assignments, but it also provides a platform for students and graders to communicate effectively through messages and discussion posts. What sets GRAID apart is its integration of advanced AI-powered features, which streamline the grading process and enhance the overall learning experience. With GRAID, users can expect efficient assignment management coupled with intelligent automation, making it a game-changer in the realm of educational technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center">
                  <img
                    src="/studentCourses.svg"
                    alt="studentCourses"
                    className="w-24 h-24 rounded-md mx-auto mb-2"
                  />
                  <p className="text-lg font-semibold">Next generation learning management system</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/quizCreation.svg"
                    alt="quizCreation"
                    className="w-24 h-24 rounded-md mx-auto mb-2"
                  />
                  <p className="text-lg font-semibold">Powered by AI</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/cheating.svg"
                    alt="cheating"
                    className="w-24 h-24 rounded-md mx-auto mb-2"
                  />
                  <p className="text-lg font-semibold">User-friendly interface</p>
                </div>
              </div>
              <ul className="list-disc list-inside mt-8">
                <li>Next generation learning management system</li>
                <li>Powered by OpenAI</li>
                <li>User-friendly interface</li>
                <li>Supports multiple file formats</li>
              </ul>
            </section>
          </div>
        </main>
      </section>

    </>
  )
}

export default howGraidWorks