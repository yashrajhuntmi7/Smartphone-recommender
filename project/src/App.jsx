import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";    


 


function App() {
  

  return (
    <div>
      
      <Header />

      <Home />
      
      
      
      <Footer />
    </div>
  )
}

export default App