import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Country() {
  const countries = useLoaderData()
  
  return (
    <div>
         <ul>
           {
            countries.map(country => <li className='w-1/2 border-2 p-5 mb-5 mx-auto text-center'>{country.name.common}</li>)
           }
         </ul>
    </div>
  )
}
