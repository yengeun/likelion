import React from 'react';
import banner1 from '../assets/img/Rectangle 178.jpg';
import banner2 from '../assets/img/Rectangle 179.jpg';
import banner3 from '../assets/img/Rectangle 180.jpg';
import banner4 from '../assets/img/Rectangle 183.jpg';
import banner5 from '../assets/img/Rectangle 184.jpg';
import banner6 from '../assets/img/Rectangle 187.jpg';

import '../assets/css/style.css';

const Banner = () => {
    const images = [
        { src: banner1, alt: '배너 이미지 1' },
        { src: banner2, alt: '배너 이미지 2' },
        { src: banner3, alt: '배너 이미지 3' },
        { src: banner4, alt: '배너 이미지 4' },
        { src: banner5, alt: '배너 이미지 5' },
        { src: banner6, alt: '배너 이미지 6' },
    ];

    return (
        <div className="banner">
            <div className="banner__inner">
                {images.map((image, index) => (
                    <div className="banner__item" key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <div className="banner__footer">
                <p>@fila_korea</p>
            </div>
        </div>
    );
};

export default Banner;
