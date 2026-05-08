
import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <div className="flex-1 p-6 mt-7">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-bold mb-9">
            About This Project :-
          </h1>

          <p className="mb-4 font-semibold">
            This is a smartphone comparison web application built using React.
            It helps users explore different smartphones, compare specifications,
            and filter devices based on price, brand, and performance.
          </p>

          <p className="mb-4 font-semibold">
            The project uses a public API to fetch smartphone data and provides
            real-time filtering and sorting features for better user experience.
          </p>

          <h2 className="text-4xl font-bold mb-5 mt-6">
            Features :
          </h2>

          <ul className="list-disc pl-6 space-y-2 font-semibold">
            <li>Filter smartphones by price range</li>
            <li>Filter by brand</li>
            <li>Sort by performance, camera, and battery</li>
            <li>Responsive UI for all devices</li>
            <li>Clickable cards for detailed view</li>
          </ul>

          <p className="mt-9 font-bold">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default About