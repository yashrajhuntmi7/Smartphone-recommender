import React from 'react'
import Card from './Card'
import {useState } from 'react'
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';


function Home() {
  
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

        {phones.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))}

      </div>
      
      
      
      <Footer />
    </div>
  )

  
}

export default Home