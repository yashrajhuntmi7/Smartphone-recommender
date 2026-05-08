




import React from 'react'

const Sort = ({ sortby, setSortby }) => {
  return (
    <div className="flex flex-col text-left">
      
      <label className="font-semibold mb-2">
        Sort By
      </label>

      <select
        value={sortby}
        onChange={(e) => setSortby(e.target.value)}
        className="
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-blue-400
          bg-white
        "
      >
        <option value="">
          Select Option
        </option>

        <option value="Performance">
          Performance
        </option>

        <option value="Camera">
          Camera
        </option>

        <option value="Battery">
          Battery Life
        </option>

      </select>
    </div>
  )
}

export default Sort