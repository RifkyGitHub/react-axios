import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider } from 'react-router'
import { myRouter } from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <RouterProvider router={myRouter}/>
  // </StrictMode>,
)
