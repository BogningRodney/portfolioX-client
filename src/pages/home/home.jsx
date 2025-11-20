import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './blocks/Hero'
import Features from './blocks/Features'
import Pricing from './blocks/Pricing'
import Footer from './blocks/Footer'



const Home = () => {

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home
