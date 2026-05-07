import React from 'react'

function Card({ phone ,setSelectedPhone}) {

  return (

    <div className="
      bg-white
      
      
      rounded-lg
      shadow-md
      p-4
      

      
    ">

      <img
        src={phone.front_image}
        className="
          
          h-52
          object-contain
          rounded-lg

        "
      />

      <h2 className="text-2xl font-bold mt-4">
        {phone.Name}
      </h2>

      <p className="text-gray-500 mt-1">
        {phone.Company}
      </p>

      <p className="text-xl font-bold mt-2 text-blue-600">
        {phone.Price}
      </p>

      <div className="mt-4 space-y-2">

        <p>
          Camera: {phone.Sensor}
        </p>

        <p>
          Display: {phone.Display}
        </p>

        <p>
          Processor: {phone.Processor}
        </p>

        <p>
          Battery: {phone.Battery}
        </p>

        <button onClick={() => setSelectedPhone(phone)} className="mt-4 bg-black text-white px-4 py-2 rounded">View Details</button>

      </div>

    </div>
  )
}

export default Card