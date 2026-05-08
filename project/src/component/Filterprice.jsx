import React from "react";

function Filterprice({ priceFilter, setPriceFilter }) {
  return (

    <div className="flex flex-col">

      <label className="font-semibold mb-2 text-left" >
        Filter By Price
      </label>

      <select
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
        className="border rounded-lg px-5 py-3 w-full border-gray-300"
      >

        <option value="all">
          All Prices
        </option>

        <option value="under10000">
          Under ₹10,000
        </option>

        <option value="under20000">
          Under ₹20,000
        </option>

        <option value="under30000">
          Under ₹30,000
        </option>

        <option value="under50000">
          Under ₹50,000
        </option>

        <option value="under60000">
          Under ₹60,000
        </option>

        <option value="under75000">
          Under ₹75,000
        </option>

        <option value="under100000">
          Under ₹1 Lakh
        </option>

        <option value="above100000">
          Above ₹1 Lakh
        </option>

      </select>

    </div>
  );
}

export default Filterprice;