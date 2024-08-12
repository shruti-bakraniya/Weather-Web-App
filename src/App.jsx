import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Weather from './components/Weather'

const App = () => {
  const weatherRef = useRef(null);

  return (
    <div>
      <Navbar />
      <Hero scrollToWeather={() => weatherRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <Carousel />
      <div ref={weatherRef}>
        <Weather />
      </div>
      <Footer />
    </div>
  )
}

export default App