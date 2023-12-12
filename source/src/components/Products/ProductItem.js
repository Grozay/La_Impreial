// ProductItem.jsx
import React from 'react';
import '../../css/Product/Products.css';
import '../../css/Product/Animation/AddToCart.css';
import { useNavigate } from 'react-router-dom';

function ProductItem({ product, addCart }) {
    const [isAnimating, setIsAnimating] = React.useState(false);

    const handleMouseDown = () => {
        setIsAnimating(true);
        addCart(product, 1);
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const truncatedName =
        product.name.length > 50 ? product.name.slice(0, 50) + '...' : product.name;
    const navigate = useNavigate();

    return (
        <div className="product">
            <img
                className="img"
                src={`../${product.image[0]}`}
                alt="img"
                onClick={() => navigate(`/products/${product.id}`)}
            />
            <div className="product-details">
                <h3
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="name"
                >
                    {truncatedName}
                </h3>
                <p className="price">{product.price}$</p>

                <div className="page-wrapper">
                    <button
                        onClick={handleMouseDown}
                        className={`cart-item add-to-cart ${isAnimating ? 'animating' : ''}`}
                    >
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <span className="cart-item"></span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
