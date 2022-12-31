import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-img.jpg";
import { Link } from "react-router-dom";
import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, MY NAME IS DAVIS</p>
            <h1>Full-Stack Developer</h1>
            <div>
                <Link to="/projects" className="btn">Projects </Link>
                <Link to="/contact" className="btn btn-light">Contact </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg