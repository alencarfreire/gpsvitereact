import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './ui/Header.tsx'
import Hero from './ui/Hero.tsx'
import HeroS from './ui/HeroS.tsx'
import Destinos from './ui/Destinos.tsx'
import FAQ from './ui/FAQ.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <main>
      <Hero />
      <HeroS />
      <Destinos />
    </main>
    <FAQ  />
  </React.StrictMode>,
)
