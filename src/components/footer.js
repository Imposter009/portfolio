import "./footer.css"
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location"><FaHome size={20} style={{ color: "#fff", marginRight: " 2rem" }} />
                        <div className="">
                            <p>442/585 Z-2 Jainrailganj Colony Balaganj</p>
                            <p>Lucknow, Uttar Pradesh</p>
                            <p>226003</p>
                        </div>
                    </div>
                    <div className="phone"><h4><FaPhone size={20} style={{ color: "#fff", marginRight: " 2rem" }} /> +917905342319</h4></div>
                    <div className="email"><h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: " 2rem" }} /> sumitgupta19900@gmail.com</h4></div>
                </div>

                <div className="right">
                    <div className="socials">
                        <NavLink target="blank" to="https://www.linkedin.com/in/sumit-gupta-edu009/"><FaLinkedin size={30} style={{ color: "#fff", marginRight: " 1rem" }} /></NavLink>
                        <NavLink target="blank" to="https://github.com/Imposter009"><FaGithub  size={30} style={{ color: "#fff", marginRight: " 1rem" }} /></NavLink>
                        <NavLink target="blank" to="google.com"><FaWhatsapp size={30} style={{ color: "#fff", marginRight: " 1rem" }} /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer

