import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Banner";
import '../../css/HomePage/HomePage.css';
import { useState } from "react";

const HomePage = ({ productNew, productHot, productQuality, product }) => {
    const navigate = useNavigate();
    const [isSwiping] = useState(false);

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };



    return (
        <>
            <div>
                <Banner />
            </div>
            <div>
                <div>
                    <h2 className="tilte_home">Featured Products</h2>
                    <div className="home-container">
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
                    </div>
                </div>

                <div>
                    <h2 className="tilte_home">New Products</h2>
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
                    <h2 className="tilte_home">Quality Products</h2>
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
