import React from "react";
import './footerIcon.scss';

const FooterIcon = ({
    text,
    src
}) => {
    if (text) {
        return (
            <div className="footerIconDiv">
                <p>{text}</p>
                <img src={src} alt={src} />
            </div>
        )
    }

    return (   
        <div className="footerIcon">
            <a href="/">
                <img src={src} alt={src} />
            </a>
        </div>     
    )
}

export default FooterIcon;