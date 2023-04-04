import React, { useState,useEffect } from 'react'

export default function Country() {
  const [country,setCountry] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountry(data))
  },[])
  console.log(country)
  return (
    <div>
      {
        country.map(country=>
          <div>
            <div className='w-1/2 bg-slate-100 border-2 mb-2 p-5 flex mx-auto'>
            <h1>{country?.capital}</h1>
            </div>
        </div>
        )
      }

    </div>
  )
}
