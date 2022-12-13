import React from "react";
import './menuItem.scss';

const MenuItem = ({
    item,
    src
}) => {

    const url = item.toLowerCase().split(" ").join("-");

    return (
        <a href={url} className={"menuItemGroup " + url}>
            {src ? <img src={src} alt={src} /> : ""}
            <p>
                {item}
            </p>
        </a>
    )
}

export default MenuItem;