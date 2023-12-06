import '../../css/Product/Products.css';
import {useNavigate, } from "react-router-dom";
function ProductItem({ product, addCart }) {
    const truncatedName = product.name.length > 10 ? product.name.slice(0, 50) + '...' : product.name;
    const detail = useNavigate();
    return (
        <div className="product"  >
            <img className="img" src={`../${product.image[0]}`} alt="img" onClick={()=> detail(`/products/${product.id}`)}/>
            <div className="product-details">
                <h3 onClick={()=> detail(`/products/${product.id}`)} className="name">{truncatedName}</h3>
                <p className="price">{product.price}$</p>
                <button onClick={() => addCart(product,1)}>AddCart</button>
            </div>
        </div>
    );
}

export default ProductItem;