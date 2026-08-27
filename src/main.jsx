import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "remixicon/fonts/remixicon.css";
import CardsDataContextProvider from './Context/CardsDataContextProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardsDataContextProvider>
      <App />
    </CardsDataContextProvider>
  </StrictMode>,
)
