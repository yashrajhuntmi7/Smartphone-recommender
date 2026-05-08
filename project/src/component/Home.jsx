import React from 'react'
import Card from './Card'
import { useState } from 'react'
import { useEffect } from 'react';
import Cardpop from './Cardpop'
import Display from './Display';
import Footer from './Footer';
import Sort from './Sort';
import Filterprice from './Filterprice'
import Filterbrand from './Filterbrand';
import Header from './Header';

function Home() {
  const[filterbrand,setFilterBrand]=useState("all")
  const[priceFilter,setPriceFilter]=useState("all")
  const[sortby,setSortby]=useState("")
  const [phones, setphones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);

  const api = "https://smartphone-api.onrender.com/api/cars"

  const fetchphone = async () => {

    try {

      const res = await fetch(api);

      const data = await res.json();

      setphones(data);

    }

    catch (error) {

      console.error("Error", error);

    }
  }

  useEffect(() => {

    fetchphone()

  }, [])









let processedPhones = [...phones];






processedPhones = processedPhones.filter((phone) => {
  const price = phone.PriceValue;

  if (priceFilter === "under10000"){
    return price <= 10000
  }

  if (priceFilter === "under20000") {
    return price <= 20000
  }

  if (priceFilter === "under30000") {
    return price <= 30000
  }

  if (priceFilter === "under50000") {
    return price <= 50000
  }

  if (priceFilter === "under60000") {
    return price <= 60000
  }

  if (priceFilter === "under75000") {
    return price <= 75000
  }

  if (priceFilter === "under100000") {
    return price <= 100000
  }

  if (priceFilter === "above100000") {
    return price > 100000
  }

  return true;
});
processedPhones = processedPhones.sort((a, b) => {
  return b.PriceValue - a.PriceValue;
});




processedPhones=processedPhones.filter((phones)=>{

  if(filterbrand==="all"){
    return true
  }
  
  if(filterbrand==="Vivo"){
    return phones.Company===filterbrand
  }
  if(filterbrand==="Realme"){
    return phones.Company===filterbrand
  }
  if(filterbrand==="OnePlus"){
    return phones.Company===filterbrand
  }
  if(filterbrand==="Nothing"){
    return phones.Company===filterbrand
  }
  if(filterbrand==="POCO"){
    return phones.Company===filterbrand
  }
  if(filterbrand==="Others"){
    const known = ["Vivo", "Realme", "OnePlus", "Nothing", "POCO"];
    return !known.includes(phones.Company); 
  }
  return true
})









if (sortby === "Performance") {
  processedPhones.sort((a, b) => b.Performance - a.Performance);
}

if (sortby === "Camera") {
  processedPhones.sort((a, b) => parseFloat(b.Camera) - parseFloat(a.Camera));
}

if (sortby === "Battery") {
  processedPhones.sort((a, b) => parseInt(b.Battery) - parseInt(a.Battery));
}









  return (

    <div className="bg-gray-100 min-h-screen p-6">
      <Header/>

      <div className="text-center mb-10">



      <Display/>











      <div className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
        mt-10
        max-w-5xl
        mx-auto
      ">
  
  <h2 className="text-left text-2xl font-bold mb-6">
    Filter Your Options
  </h2>

  <div className="
    flex
    flex-col
    md:flex-row
    gap-6
    justify-between
  ">

    <div className="flex-1">
      <Filterprice
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />
    </div>

    <div className="flex-1">
      <Filterbrand
        filterbrand={filterbrand}
        setFilterBrand={setFilterBrand}
      />
    </div>

    <div className="flex-1">
      <Sort
        sortby={sortby}
        setSortby={setSortby}
      />
    </div>

  </div>
</div>















        

      </div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      ">

        {processedPhones.map((phone) => (

          <Card key={phone.id} phone={phone} setSelectedPhone={setSelectedPhone}/>

        ))}


      </div>
      {
          selectedPhone && (
            <Cardpop phone={selectedPhone} setSelectedPhone={setSelectedPhone} />
          )
        }
      <Footer/>

    </div>
  )
}

export default Home