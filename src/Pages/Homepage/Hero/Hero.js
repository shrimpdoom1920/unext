import React from 'react'
import './Hero.css'
import HeroBackground from '../../../Assets/images/blur_codes_hero.jpg'

const Hero = () => (
  <div 
    className='hero-image'
    style={{
      backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)),
        url(${HeroBackground})`
    }}
    >
    <div className="hero-content">
      <h1>Level up your skills</h1>
      <div className="search-group">
        <input placeholder="Advanced PHP development"/>
        <button>Search</button>
        <span>Search for the next course that will level up your skill</span>
      </div>
    </div>
  </div>
)

export default Hero