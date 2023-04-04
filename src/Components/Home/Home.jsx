import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>This is Home</h1>
        <Outlet></Outlet>
    </div>
  )
}
