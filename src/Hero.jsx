import React from 'react'
import './hero.css'
import hero from './Assets/hero.png';
const Hero = () => {
    return (
        <div class="images">
            <div class="shape"></div>
            <img src={hero} alt="hero" />
        </div>
    )
}

export default Hero
