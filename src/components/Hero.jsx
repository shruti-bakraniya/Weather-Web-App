import React from 'react'

const Hero = ({ scrollToWeather }) => {
  return (
    <div className="hero-section text-center py-5" style={{ backgroundColor: "#05264d" }}>
      <h1 className="display-4" style={{ color: "white" }}>Welcome to Our Website</h1>
      <p className="lead" style={{ color: "white" }}>This is a simple weather app, It shows the real time weather of any city in the world. </p>
      <button className="btn btn-lg btn-light rounded-pill" style={{ fontWeight: "bold" }} onClick={scrollToWeather}>Search</button>
    </div>
  )
}

export default Hero