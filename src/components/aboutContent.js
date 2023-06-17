import "./aboutContentStyle.css"
import CV from "../assets/CV.pdf"
import React from 'react'
import Card from "./aboutCard"
import CardData from "./aboutCardData"
import profile from "../assets/profile.jpg"
import { HiDownload } from "react-icons/hi"
import { NavLink } from "react-router-dom"

const aboutContent = () => {
    return (
        <section id="about">
            <div className="container about-container">
                <div className="about-left">
                    <div className="about-portrait">
                        <img src={profile} alt="" />
                    </div>
                </div>
                <div className="about-right">
                    <h2>About Me!</h2>
                    <div className="about-cards">
                        {
                            CardData.map(item => (
                                <NavLink to={item.loc}> <Card key={item.id} className="about-card" loc={item.loc}>
                                    <span className="about-card-icon">{item.icon} </span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                                </NavLink>
                            ))
                        }
                    </div>
                    <p>about.....</p>
                    <p>about.....2</p>
                    <a href={CV} download className="btn">Download CV <HiDownload /></a>
                </div>

            </div>
        </section >
    )
}

export default aboutContent
