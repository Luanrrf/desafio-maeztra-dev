import React, { useState } from "react";
import "./accordion.scss";

const Accordion = ({
    title,
    children,
}: any) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="accordionContainer">
            <div onClick={toggleAccordion} className="accordionGroup">
                <p className="accordionTitle">{title}</p>
                {
                    isExpanded ? 
                    <span>-</span> : 
                    <span>+</span>
                }
            </div>
            {isExpanded && (
                <div className="accordionChildrens">
                    {children.map((name, index)=> (
                        <a href={"/" + name.split(" ").join("-").toLowerCase()} key={index} className="accordionChildren">{name}</a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Accordion;