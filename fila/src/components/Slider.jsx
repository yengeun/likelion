import React, { useState } from 'react';
import '../assets/css/style.css';
import image2 from '../assets/img/image2.svg';
import image3 from '../assets/img/image3.svg';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            img: image2,
            desc: '24 NEW 인터런',
            buttonText: '자세히 보기'
        },
        {
            img: image3,
            desc: 'Description for the second slide',
            buttonText: 'Learn More'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <div 
                className="slider__img" 
                style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
            >
                <div className="desc">
                    <p>{slides[currentSlide].desc}</p>
                    <div className="btn">
                        <a href="#">{slides[currentSlide].buttonText}</a>
                    </div>
                </div>
            </div>
            <div className="slider__arrow">
                <a className="left" onClick={prevSlide}>{"<"}</a>
                <a className="right" onClick={nextSlide}>{">"}</a>
            </div>
            <div className="slider__dot">
                {slides.map((_, index) => (
                    <a 
                        key={index} 
                        className={index === currentSlide ? 'active' : ''} 
                        onClick={() => setCurrentSlide(index)}
                    ></a>
                ))}
            </div>
        </div>
    );
};

export default Slider;
