import React from "react";

export default function Main() {
  return (
    <section>
      <main className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">GRAiD</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside">
              <li>AI-powered grade estimation</li>
              <li>Quick and accurate results</li>
              <li>User-friendly interface</li>
              <li>Supports multiple file formats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Place your screenshots here */}
              {/* Example: <img src="/screenshot1.png" alt="Screenshot 1" className="w-full" /> */}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Download</h2>
            <p className="mb-4">
              Download Graid now and experience the power of AI in grade
              estimation!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Download Now
            </button>
          </section>
        </div>
      </main>
    </section>
  );
}
