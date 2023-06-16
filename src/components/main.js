import "./main.css"
import IntroImg from "../assets/desktop.jpg"
import React from 'react'
import { Link } from "react-router-dom"

const main = () => {
    return (
        <div className="main">
            <div className="mask">
                <img className=" into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>
                    Hi, I'M a Aspiring Full Stack Web Developer
                </p>
                <h1>...</h1>
                <div>
                    <Link to="/project" className="btn">
                        PROJECTS
                    </Link>
                    <Link to="/contact" className="btn-light">
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default main
