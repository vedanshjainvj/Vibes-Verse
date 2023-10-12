import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import AnimatedCursor from './components/AnimatedCursor.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <AnimatedCursor />
    <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)
