import React from 'react'

const Sort = ({sortby,setSortby}) => {
  return (
<div>
      <h2>Sort :</h2>
    <select 
        value={sortby}
        onChange={(e)=>setSortby(e.target.value)}
        >
        <option value="">
              Sort By
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