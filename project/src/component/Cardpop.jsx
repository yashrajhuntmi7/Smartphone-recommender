import React from "react";

function Cardpop({phone,setSelectedPhone}){
    if (!phone) return null;
    return(
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-2xl relative">

        <button
          onClick={() => setSelectedPhone(null)}
          className="absolute top-3 right-3 text-xl"
        >
          X
        </button>

        <img
          src={phone.front_image}
          alt={phone.Name}
          className="bg-white w-full h-72 object-contain rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">
          {phone.Name}
        </h2>

        <h3 className="mt-2 text-blue-600">{phone.Price}</h3>

        

        <p className="mt-2">
          Company : {phone.Company}
        </p>

        <p className="mt-2">
          Camera Rating : {phone.Camera}
        </p>

        <p className="mt-2">
          Camera Sensors : {phone.Sensor}
        </p>

        <p className="mt-2">
          Battery Life : {phone.Battery}
        </p>

        <p className="mt-2">
          Antutu Score : {phone.Performance}
        </p>

        <p className="mt-2">
          Processor : {phone.Processor}
        </p>

        <p className="mt-2">
          Software : {phone.Software}
        </p>

        <p className="mt-2">
          Display Length : {phone.Display}
        </p>

        <p className="mt-2">
          RAM : {phone.Ram}
        </p>

        <p className="mt-2">
          Storage : {phone.Storage}
        </p>

        <a
          href={phone.Link}
          target="_blank"
          className="text-blue-500 block mt-4"
        >
          Buy Now
        </a>

        

      </div>
      

    </div>
    )
}

export default Cardpop