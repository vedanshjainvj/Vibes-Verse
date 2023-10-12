import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import AnimatedCursor from "./components/AnimatedCursor.jsx";
import CustomScroll from "./components/CustomScroll.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div data-scroll-section>
      <ChakraProvider>
        <CustomScroll></CustomScroll>
        <AnimatedCursor />
        <App />
      </ChakraProvider>
    </div>
  </React.StrictMode>
);
