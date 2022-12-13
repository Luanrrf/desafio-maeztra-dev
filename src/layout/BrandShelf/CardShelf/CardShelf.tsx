import React from "react";
import './cardShelf.scss';

const CardShelf = ({
    subtitle,
    coment,
    img
}) => {
    if(subtitle) {  
        return (
            <div className="card">
                <img src={img} alt=""/>
                <div className="secondColumn">
                    <h3>{subtitle}</h3>
                    <p>{coment}</p>
                </div>
            </div>
        )
    }

    return (
        <img src={img} alt="" className="onlyCard"/>
    )
}

export default CardShelf;