import React, { useState, useEffect } from 'react';
import '../../css/HomePage/Baner.css'

const Banner = () => {
    const images = [
        './data/assets/Baner/baner1.jpg',
        './data/assets/Baner/baner2.png',
        './data/assets/Baner/baner3.png',
        './data/assets/Baner/baner4.png',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        let interval;

        if (isAutoPlay) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
        }

        return () => {

            clearInterval(interval);
        };
    }, [isAutoPlay, images.length]);

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
        setIsAutoPlay(false);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAutoPlay(false);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setIsAutoPlay(false);
    };

    return (
        <div className="banner-container">
            <div className="banner-image">
                <img src={images[currentImageIndex]} alt={`Banner ${currentImageIndex + 1}`} className='img_baner' />
                <div className="arrow left" onClick={handlePrevClick}>&#10094;</div>
                <div className="arrow right" onClick={handleNextClick}>&#10095;</div>
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Banner;
