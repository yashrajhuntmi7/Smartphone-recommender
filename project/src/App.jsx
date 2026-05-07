import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";


 


function App() {
  const [phones, setphones] = useState([]);
  const api = "https://smartphone-api.onrender.com/api/cars"

  const fetchphone = async() => {
    try{
      const res = await fetch(api);
      const data = await res.json();
      setphones(data);} 
      catch (error){
      console.error("Error" , error);
    }
  }

  useEffect(()=>{fetchphone()},[])

  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

        {phones.map((phone) => (
          <Card key={phone._id} phone={phone} />
        ))}

      </div>
      
      <Home />
      
      <Footer />
    </div>
  )
}

export default App