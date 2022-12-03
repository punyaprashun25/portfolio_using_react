import React from 'react'
import './Details.css';
import resume from './Assets/resume.pdf';
const Details = () => {
  return (
    <div className="detail">
    <h1>I'm Punya <span>Prashun</span></h1>
    <p>This is my official portfolio website to show all
        <br/>Details and work experience web development
    </p>
    <a href={resume}>DOWNLOAD CV</a>
</div>
  )
}

export default Details
