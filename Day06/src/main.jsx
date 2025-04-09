import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import RouterTest from './pages/Layout.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
        <RouterTest />
        </BrowserRouter>
    </StrictMode>
)
