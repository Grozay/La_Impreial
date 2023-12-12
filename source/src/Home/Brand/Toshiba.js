// LG.js
import React from 'react';
import '../../css/Product/ProdutDetail.css';
import { useNavigate } from "react-router-dom";
import '../../css/Product/Animation/AddToCart2.css'

const LG = ({ toshibaProduct, addCart }) => {
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [addedProductId, setAddedProductId] = React.useState(null);

    const handleMouseDown = (productId) => {
        setIsAnimating(true);
        setAddedProductId(productId);
        addCart(toshibaProduct, 1);
        setTimeout(() => {
            setIsAnimating(false);
            setAddedProductId(null);
        }, 1000);
    };

    const detail = useNavigate();
    const limitString = (str, maxLength) => {
        if (str.length <= maxLength) {
            return str;
        }
        return str.substring(0, maxLength) + "...";
    };

    return (
        <div className='nameproduct'>
            <h1>Product Of LG</h1>
            <div className='product-container'>
                {toshibaProduct.map(pro => (
                    <div className="product" key={pro.id}>
                        <img className="img" src={pro.image[0]} alt="img" onClick={() => detail(`/products/${pro.id}`)} />
                        <div className="product-details">
                            <h3 onClick={() => detail(`/products/${pro.id}`)} className="name">{limitString(pro.name, 50)}</h3>
                            <p className="price">{pro.price}$</p>
                            <button
                                onClick={() => handleMouseDown(pro.id)}
                                className={`cart-item1 add-to-cart1 ${isAnimating && addedProductId === pro.id ? 'animating' : ''}`}
                            >
                                <i data-product-id={pro.id} className="fa-solid fa-cart-plus"></i>
                            </button>
                            <span className="cart-item1"></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LG;
