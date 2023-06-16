import "./aboutCardStyle.css"

import React, { children } from 'react'

const aboutCard = ({ children, className, onClick }) => {
    return (
        <article className={`card ${className}`} onClick={onClick}>
            {children}
        </article>
    )
}

export default aboutCard
