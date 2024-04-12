import React from "react";
import Button from "@/components/Button";
import Image from "next/image"

export default function Main() {
  return (
    <section>
      <main className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">GRAiD</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Is GRAiD</h2>
            <p >
              GRAID is a state-of-the-art learning managment system revolutionizing the grading process for classes with advanced features.
              In addition to streamlining the grading process through AI technology, GRAID incorporates a sophisticated AI webcam proctoring feature.
              This feature ensures exam integrity by monitoring students activities during exams, providing a secure and reliable environment for assessment.
              With GRAID, educators can trust that their exams are conducted with integrity while saving valuable time previously spent on manual proctoring.
              GRAID serves as a robust competitor to platforms like Canvas by offering a comprehensive solution for students and graders alike.
              Not only does GRAID facilitate the seamless submission and grading of assignments, but it also provides a platform for students and graders to communicate effectively through messages and discussion posts.
              What sets GRAID apart is its integration of advanced AI-powered features, which streamline the grading process and enhance the overall learning experience.
              With GRAID, users can expect efficient assignment management coupled with intelligent automation, making it a game-changer in the realm of educational technology.
            </p>

            <ul className="list-disc list-inside">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {<Image
                  className={"w-full rounded-md"}
                  src="/studentCourses.svg"
                  alt="studentCourses"
                  width={32}
                  height={32}
                />}
                {<Image
                  className={"w-full rounded-md"}
                  src="/quizCreation.svg"
                  alt="quizCreation"
                  width={32}
                  height={32}
                />}
                {<Image
                  className={"w-full rounded-md"}
                  src="/cheating.svg"
                  alt="cheating"
                  width={32}
                  height={32}
                />}
              </div>
              <li>Next generation learning management system</li>
              <li>Powered by OpenAI</li>
              <li>User-friendly interface</li>
              <li>Supports multiple file formats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside">
              <li>AI-powered grade estimation</li>
              <li>Quick and accurate results</li>
              <li>Eye tracking anti-cheating system</li>
              <li>User-friendly interface</li>
              <li>Cross-platform</li>
              <li>Supports multiple file formats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Download</h2>
            <p className="mb-4">
              Download Graid now and experience the power of AI in learning!
            </p>
          </section>
        </div>
      </main>
    </section>
  );
}
