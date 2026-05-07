import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { useEffect } from 'react';
import Cardpop from './Cardpop'

function Home() {

  const [phones, setphones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);

  const api = "https://smartphone-api.onrender.com/api/cars"

  const fetchphone = async () => {

    try {

      const res = await fetch(api);

      const data = await res.json();

      setphones(data);

    }

    catch (error) {

      console.error("Error", error);

    }
  }

  useEffect(() => {

    fetchphone()

  }, [])

  return (

    <div className="bg-gray-100 min-h-screen p-6">

      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold">
          Discover Your Ideal Smartphone
        </h1>

        <p className="text-gray-600 mt-2">
          Filter by budget, use case, and brand to find the perfect match
        </p>

      </div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      ">

        {phones.map((phone) => (

          <Card key={phone.id} phone={phone} setSelectedPhone={setSelectedPhone}/>

        ))}


      </div>
      {
          selectedPhone && (
            <Cardpop phone={selectedPhone} setSelectedPhone={setSelectedPhone} />
          )
        }

    </div>
  )
}

export default Home