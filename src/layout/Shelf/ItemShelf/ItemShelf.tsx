import React from "react";
import './itemShelf.scss';
import '../../../styles/utils.scss';

const ItemShelf = ({
    img, 
    colors, 
    price, 
    name, 
    description
}) => {
    return (
        <div className="productShelf">
            <img src={img} alt="" />
            <div className="colors">
                {colors.map((index) =>( 
                    <span className={"productColor color-" + index} key={index}/>
                ))}
            </div>
            <p className="price">{price}</p>
            <p className="name">{name}</p>
            <p className="description">{description}</p>

            <a href={"/" + img} className="normalButton productAddButton">Adicionar</a>

        </div>
    )
}

export default ItemShelf;