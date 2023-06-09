import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Country from './Components/Country/Country';
// create route
const router = createBrowserRouter([
 
  {
     path:'/',
     element:<Home></Home>,
     children:[
         {
          path:'/country',
          element:<Country></Country>,
          loader:()=> fetch('https://restcountries.com/v3.1/all')
         },{
          path:'/country/:countryId',
          element:<Details></Details>,
          loader:({params})=>fetch(`/${params.countryId}`)
         }
     ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
