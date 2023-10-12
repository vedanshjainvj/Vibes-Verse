import React, { useState, useEffect, useRef } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Hero from "./components/Hero";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Internships from "./components/Internships";
import Contact from "./components/Contact";
import "./index.css";
import SwagKit from "./components/SwagKit";
import Navbar from './components/Navbar'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        index: true,
        element: <Hero />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/internship",
        element: <Internships/>
      },
      {
        path: "/swagkit",
        element: <SwagKit/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
   
  }
])

function App() {

  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2500)
  },[])
  return (
    <>
    {
      loading ?
      <div className='h-screen w-full flex items-center justify-center'>
        <ScaleLoader
        color={'#ff0000'}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
      :
      <RouterProvider router={router} />
      }
    
    
    </>
  );
}

export default App;
