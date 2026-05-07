// import React from 'react'

// function Header() {
//   return (
//     <>
//     <span>
// Smartphone Finder
// Find Your Perfect Device
//   </span>
//   <span>
//     <p>Home</p>
//     <p>Compare</p>
//     <p>About</p>

//   </span>
  

//     </>
//   )
// }

// export default Header




import React from 'react'

function Header() {
  return (

    <div className="bg-black text-white p-5">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-2xl font-bold">
            Smartphone Finder
          </h1>

          <p className="text-sm text-gray-300">
            Find Your Perfect Device
          </p>

        </div>

        <div className="flex gap-6">

          <p className="cursor-pointer hover:text-gray-300">
            Home
          </p>

          <p className="cursor-pointer hover:text-gray-300">
            Compare
          </p>

          <p className="cursor-pointer hover:text-gray-300">
            About
          </p>

        </div>

      </div>

    </div>
  )
}

export default Header