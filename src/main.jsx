import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "remixicon/fonts/remixicon.css";
import CardsDataContextProvider from './Context/CardsDataContextProvider.jsx';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CardsDataContextProvider>
        <App />
      </CardsDataContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
