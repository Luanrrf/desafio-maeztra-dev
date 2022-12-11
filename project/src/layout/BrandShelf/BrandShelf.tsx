import React from "react";
import CardShelf from "./CardShelf/CardShelf.tsx";
import './brandShelf.scss';

const BrandShelf = ({
    title,
    cards
    }) => {

    const newClass = title.split(" ").join("-").toLowerCase();

    return (
        <section className="brandContainer mwPage">
            <h3 className={"brandTitle " + newClass}>{title}</h3>
            <div className="brandCards">
                {cards.map((cardName, index) => (
                    <CardShelf subtitle={cardName.subtitle} coment={cardName.coment} img={cardName.img} key={index}/>
                ))}
            </div>
        </section>
    );
}

export default BrandShelf;