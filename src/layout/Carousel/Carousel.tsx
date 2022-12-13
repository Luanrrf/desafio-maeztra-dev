import React from "react";
import Slider from 'react-touch-drag-slider';
import CarouselImg from '../../assets/carousel-img.png';
import CarouselImgMobile from '../../assets/carousel-img-mobile.png';
import CarouselLeft from '../../assets/carousel-arrow-left.png';
import CarouselRight from '../../assets/carousel-arrow-right.png';
import './carousel.scss';

const Carousel = () => {    

    const images = [
        {url: CarouselImg, title: 'img-carousel'},
        {url: CarouselImg, title: 'img-carousel'},
        {url: CarouselImg, title: 'img-carousel'},
        {url: CarouselImg, title: 'img-carousel'},
        {url: CarouselImg, title: 'img-carousel'}
    ]

    const imagesMobile = [
        {url: CarouselImgMobile, title: 'img-carousel-mobile'},
        {url: CarouselImgMobile, title: 'img-carousel-mobile'},
        {url: CarouselImgMobile, title: 'img-carousel-mobile'},
        {url: CarouselImgMobile, title: 'img-carousel-mobile'},
        {url: CarouselImgMobile, title: 'img-carousel-mobile'}
    ]

    return (
        <div className="fullCarousel">
            <div className="desktop">
                <Slider
                onSlideComplete={(i) => {
                console.log('finished dragging, current slide is', i)
                }}
                onSlideStart={(i) => {
                console.log('started dragging on slide', i)
                }}
                activeIndex={0}
                threshHold={100}
                transition={0.5}
                scaleOnDrag={true}
                >
                {images.map(({ url, title }, index) => (
                    <div className="slider-section desktop">

                        <img src={url} key={index} alt={title} />
                        
                        <div className="slider-content">

                            <div className="slider-text">
                                <h3 className="promotion">Promoções de Outono</h3>
                                <p>Confiras os melhores looks para combinar com você nesse Outono</p>
                                <a href="/" className="normalButton">Conferir</a>
                            </div>

                            <div className="slider-arrows">
                                <button className="arrow-left"> 
                                    <img src={CarouselLeft} alt="" /> 
                                </button>
                                <button className="arrow-right"> 
                                    <img src={CarouselRight} alt="" /> 
                                </button>
                            </div>

                            <div className="slider-dots">
                                <button className="sliderDot sliderDotactive"></button>
                                <button className="sliderDot"></button>
                                <button className="sliderDot"></button>
                                <button className="sliderDot"></button>
                                <button className="sliderDot"></button>
                            </div>

                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        
        <div className="mobile">
            <Slider
            onSlideComplete={(i) => {
                console.log('finished dragging, current slide is', i)
            }}
            onSlideStart={(i) => {
                console.log('started dragging on slide', i)
            }}
            activeIndex={0}
            threshHold={100}
            transition={0.5}
            scaleOnDrag={true}
            >
            {imagesMobile.map(({ url, title }, index) => (
                <div className="slider-section mobile">

                    <img src={url} key={index} alt={title} />
                    
                    <div className="slider-content">

                        <div className="slider-text">
                            <h3 className="promotion">Promoções de Outono</h3>
                            <p>Confiras os melhores looks para combinar com você nesse Outono</p>
                            <a href="/" className="normalButton">Conferir</a>
                        </div>

                        <div className="slider-arrows">
                            <button className="arrow-left"> 
                                <img src={CarouselLeft} alt="" /> 
                            </button>
                            <button className="arrow-right"> 
                                <img src={CarouselRight} alt="" /> 
                            </button>
                        </div>

                        <div className="slider-dots">
                            <button className="sliderDot sliderDotactive"></button>
                            <button className="sliderDot"></button>
                            <button className="sliderDot"></button>
                            <button className="sliderDot"></button>
                            <button className="sliderDot"></button>
                        </div>
                        
                    </div>
                </div>
            ))}
            </Slider>
        </div>

        </div>
    )
}

export default Carousel;