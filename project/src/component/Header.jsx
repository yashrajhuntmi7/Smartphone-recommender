import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (

    <header className="bg-white shadow-4xl">

      <div className="flex justify-between items-center p-4 ">

        

        <div className="flex items-center gap-3">

          <div className="text-4xl">
            📱
          </div>

          <div>

            <h1 className="text-2xl font-bold">
              Smartphone Finder
            </h1>

            <p className="text-gray-500">
              Find Your Perfect Device
            </p>

          </div>

        </div>

        
        <div className="flex gap-6">
          <p>
            Home
          </p>
          <p>
            About
          </p>
          

        </div>

        

       

      </div>

    </header>
  );
}

export default Header;