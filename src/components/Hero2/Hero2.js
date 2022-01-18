import React from 'react'
import './Hero2.css';
// import {link} from 'react-scroll';
import video from '../images/Videobasket.mp4'; 

const Hero2 = () => {
    return (
        <>
        <div className="showcase">
        <div className="video-container">
            <video src={video} autoPlay muted loop type='video/mp4' />
        </div>
        <div className="content">
            <h1>Whale</h1>
            <h3>if you fail, you will still land on the moon</h3>
            <a href="#about" className="btn">see more</a>
        </div>
    </div>
        </>
    )
}

export default Hero2
