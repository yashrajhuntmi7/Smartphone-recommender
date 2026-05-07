import React from 'react'


function Card({phone}){
  return (
    <div className="border p-4 rounded-lg">
      <img
        src={phone.front_image}
        alt={phone.Name}
        className="w-full h-40 object-cover rounded"
      />
      
      <h2 className="text-lg font-bold mt-2">
        {phone.Name}
      </h2>

      <p className="mt-2">
        {phone.Price}
      </p>

      <p>
        {phone.Company}
      </p>

    </div>
  )
}

export default Card