import "./AboutContentStyles.css";
// import React1 from "../assets/react1.jpg";
import HeadShot from "../assets/headshot.jpg";
import React2 from "../assets/react2.jpg";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I?</h1>
            <p>I am a new full-stack developer and software engineer who is looking to make a positive difference in the world. I can build front-ends, back-ends, and relational databases for my clients and employers. Though I am new to programming professionaly, I have over 20 years of problem-solving, customer service, and teamwork experience. </p>
            <p>I have significant professional experience in the Healthcare, Higher Education, Emergency Medical Services, Firefighting, and Sound Recording industries.</p>
            <p>While I am constantly learning new languages and open to trying new projects, I have been mainly focused on React, HTML, CSS, Javascript, Express, and PostgreSQL.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={HeadShot} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent