import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Banner";
import '../../css/HomePage/HomePage.css';
import { useState } from "react";

const HomePage = ({ productNew, productHot, productQuality, product }) => {
    const navigate = useNavigate();
    const [isSwiping, setIsSwiping] = useState(false);

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };

    const settings = {
        infinite: true,
        slidesToShow: 4, // Số lượng sản phẩm hiển thị trên một dòng
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        beforeChange: () => handleBeforeChange(),
        afterChange: () => handleAfterChange()
    };

    const handleBeforeChange = () => {
        setIsSwiping(true);
    }

    const handleAfterChange = () => {
        setIsSwiping(false);
    }


    return (
        <>
            <div>
                <Banner />
            </div>
            <div>
                <div>
                    <h2>Featured Products</h2>
                    <Slider {...settings} className="home-container">
                        {productHot.map((p) => (
                            <div
                                key={p.id}
                                className="home-product-item"
                                onClick={() => {
                                    if (!isSwiping) {
                                        navigate(`/products/${p.id}`);
                                    }
                                }}
                            >
                                <div className="product-image">
                                    <img src={p.image[0]} alt='img' />
                                </div>
                                <div className="product-name">{truncateString(p.name, 10)}</div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div>
                    <h2>New Products</h2>
                    <div className="home-container">
                        <div className="home_list">
                            {productNew.map((p) => (
                                <li
                                    key={p.id}
                                    className="home-product-item"
                                    onClick={() => {
                                        if (!isSwiping) {
                                            navigate(`/products/${p.id}`);
                                        }
                                    }}
                                >
                                    <div className="product-image">
                                        <img src={p.image[0]} alt='img' />
                                    </div>
                                    <div className="product-name">{truncateString(p.name, 10)}</div>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Quality Products</h2>
                    <div className="home-container">
                        <div className="home_list">
                            {productQuality.map((p) => (
                                <li
                                    key={p.id}
                                    className="home-product-item"
                                    onClick={() => {
                                        if (!isSwiping) {
                                            navigate(`/products/${p.id}`);
                                        }
                                    }}
                                >
                                    <div className="product-image">
                                        <img src={p.image[0]} alt='img' />
                                    </div>
                                    <div className="product-name">{truncateString(p.name, 10)}</div>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
