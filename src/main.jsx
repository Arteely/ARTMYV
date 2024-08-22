import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './LandingPage.jsx'
import InfiniteScroll from '../components/infinitescroll'
import AboutMe from './aboutme.jsx'
import Footer from '../components/footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
    <InfiniteScroll />
    <AboutMe />
  </StrictMode>
)
