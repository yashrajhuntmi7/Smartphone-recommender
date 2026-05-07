import React from 'react'

const Filterbrand = ({filterbrand,setFilterBrand}) => {
  return (
    <div>
        <h2>Filter By Brand</h2>
        <select
        value={filterbrand}
        onChange={(e)=>setFilterBrand(e.target.value)}
        >
            <option value=""
            >
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