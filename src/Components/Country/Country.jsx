import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Country() {
  const countries = useLoaderData()
  
  return (
    <div>
         <ul>
           {
            countries.map(country => <li>{country.name.common}</li>)
           }
         </ul>
    </div>
  )
}
