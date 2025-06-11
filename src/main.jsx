import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProviderWrapper } from './context/user_context.jsx'
import { HomeProviderWrapper } from './context/home_context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeProviderWrapper>
      <UserProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProviderWrapper>
    </HomeProviderWrapper>

  </StrictMode>,
)
