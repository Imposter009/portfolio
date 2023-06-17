import "./aboutCardStyle.css"

import React, { children } from 'react'

const aboutCard = ({ children, className, onClick, loc }) => {
    return (
        <article className={`card ${className}`}>
            {children}
        </article>

    )
}

export default aboutCard
