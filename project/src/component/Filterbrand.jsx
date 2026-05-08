import React from 'react'

const Filterbrand = ({filterbrand,setFilterBrand}) => {
  return (
     <div className="flex flex-col text-left">
        <label className="font-semibold mb-2">Filter By Brand</label>
        <select
          value={filterbrand}
          onChange={(e) => setFilterBrand(e.target.value)}
          className="border rounded-lg px-5 py-3 w-full border-gray-300"
        >
          <option value="">
            All Brand
          </option>
            

            <option value="Vivo">
                Vivo
            </option>

            <option value="Realme">
                Realme
            </option>

            <option value="OnePlus">
                OnePlus
            </option>

            <option value="Nothing">
                Nothing
            </option>

            <option value="POCO">
                POCO
            </option>

            <option value="Others">
                Others ...
            </option>

        </select>
    </div>
  )
}

export default Filterbrand