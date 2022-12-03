import "./FooterStyles.css";

import React from "react";
import { FaHome, FaMailBulk, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>Denver, Colorado</p>
                        <p>USA</p>
                    </div>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />davismorrell@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <p>This is me! Please contact me if you have a project or position you would like to discuss.</p>
                <div className="social">
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer