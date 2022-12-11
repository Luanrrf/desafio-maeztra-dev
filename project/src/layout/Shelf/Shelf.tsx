import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import './shelf.scss';
import ItemShelf from "./ItemShelf/ItemShelf.tsx";

const Shelf2 = ({
    title,
    products
}) => {
  return (
    <div className="fullShelf">

      <section className="mwPage brandTitle productsShelf desktop">
      <h3>{title}</h3>
        <Carousel interval={null} indicators={false}>
          {products.map((index) => (
              <Carousel.Item key={index}>
                  <div className="slider-section">
                      {products.map(({ img, colors, price, name, description }, index) => (
                          <ItemShelf img={img} colors={colors} price={price} name={name} description={description} key={index} />
                      ))}                    
                  </div>
              </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="mwPage brandTitle productsShelf mobile">
      <h3>{title}</h3>
        <div className="slider-section">
          <Carousel interval={null} indicators={false}>
                  {products.map(({ img, colors, price, name, description }, index) => (
                    <Carousel.Item key={index}>
                      <ItemShelf img={img} colors={colors} price={price} name={name} description={description} key={index} />
                    </Carousel.Item>
                  ))}                    
          </Carousel>
        </div>
      </section>

    </div>
  );
}

export default Shelf2;