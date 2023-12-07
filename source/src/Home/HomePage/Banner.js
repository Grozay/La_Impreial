import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../css/HomePage/Baner.css';

// Component tùy chỉnh cho nút Prev
const PrevArrow = (props) => (
    <div {...props} className="slick-arrow custom-prev-arrow">
        &#10094;
    </div>
);

// Component tùy chỉnh cho nút Next
const NextArrow = (props) => (
    <div {...props} className="slick-arrow custom-next-arrow">
        &#10095;
    </div>
);

const Banner = () => {
    const images = [
        './data/assets/Baner/baner1.jpg',
        './data/assets/Baner/baner2.png',
        './data/assets/Baner/baner3.png',
        './data/assets/Baner/baner4.png',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="banner-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Banner ${index + 1}`} className="img_banner" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
