import React from 'react'
import Navbar from './Navbar'
import Details  from './Details'
import Hero from './Hero'
const App = () => {
  return (
    <div className='hero'>
      <Navbar />
      <section>
        <Details/>
        <Hero/>
      </section>
    </div>
  )
}

export default App
