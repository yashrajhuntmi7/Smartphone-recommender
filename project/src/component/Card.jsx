import React from 'react'


function Card({phone}){
  return (
    <div className="border rounded-lg">
      <img src={phone.front_image} className=" h-52 object-cover rounded"/>

      <p>

        <h2 className="text-xl font-bold mt-3">
          {phone.Name}
        </h2>

        <p className="text-gray-600">
          {phone.Company}
        </p>

        <p className="font-bold">
          {phone.Price}
        </p>

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
      </p>
    </div>
  )
}

export default Card