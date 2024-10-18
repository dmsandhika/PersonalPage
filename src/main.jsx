import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/home.jsx'
import AboutPage from './pages/about.jsx'
import PortfolioPage from './pages/portfolio.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage/>
  },
  {
    path : '/about',
    element : <AboutPage/>
  },
  {
    path : '/portfolio',
    element : <PortfolioPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
