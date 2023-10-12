// Imports of react
import React, { useState, useEffect, useRef } from "react";
// Importing react-spinners for loading page animation
import ScaleLoader from "react-spinners/ScaleLoader";
// Importing react-router-dom for routing
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Importing Css for styles
import "./index.css";
// Importing components from folder structure
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import SwagKit from "./components/SwagKit";
import NavbarDefault from "./components/NavbarDefault";
import About from "./components/About";
import Internships from "./components/Internships";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarDefault />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/internship",
        element: <Internships />,
      },
      {
        path: "/swagkit",
        element: <SwagKit />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? ( // Checking if loading is true
        <div className="h-screen w-full flex items-center justify-center">
          <ScaleLoader // For Loading page animation
            color={"#ff0000"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
