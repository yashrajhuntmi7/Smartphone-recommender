import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-4xl">

      <div className="flex justify-between items-center p-4">

        
        <div className="flex items-center gap-3">

          <div className="text-6xl">
            📱
          </div>

          <div>

            <h1 className="text-3xl font-bold text-black">
              Smartphone Finder
            </h1>

            <p className="text-black font-bold">
              Find Your Perfect Device
            </p>

          </div>

        </div>

        
        <div className="flex gap-8 text-xl p-5">

          <Link
            to="/"
            className="font-bold hover:text-blue-500"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-bold hover:text-blue-500"
          >
            About
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Header;