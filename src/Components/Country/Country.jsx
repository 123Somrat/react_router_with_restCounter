import React, { useState,useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Country() {
  const countries = useLoaderData()
  
  return (
    <div>
         <ul>
           {
            countries.map(country => <div>
                <li className='w-1/2 border-2 p-5 mb-5 mx-auto text-center'>{country.name.common} <Link to={`/country/${country.cca3}`}>Details</Link></li>
                 
              </div>)
           }
         </ul>
    </div>
  )
}
