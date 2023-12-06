import '../../css/Product/Products.css';
import { useNavigate } from "react-router-dom";

const Toshiba = ({ toshibaProduct,addCart }) => {
    const detail = useNavigate();
    const limitString = (str, maxLength) => {
        if (str.length <= maxLength) {
            return str;
        }
        return str.substring(0, maxLength) + "...";
    };

    return (
        <div className='nameproduct'><h1>Product Of Toshiba</h1>
        <div className='product-container'>
            {toshibaProduct.map(pro => (
                <div className="product"  key={pro.id}>
                    <img onClick={() => detail(`/products/${pro.id}`)} className="img" src={pro.image[0]} alt="img" />
                    <div  className="product-details">
                        <h3 onClick={() => detail(`/products/${pro.id}`)} className="name">{limitString(pro.name, 50)}</h3>
                        <p className="price">{pro.price}$</p>
                        <button onClick={() => addCart(pro,1)}>AddCart</button>
                    </div>
                </div>
            ))}
        </div></div>
    );
};

export default Toshiba;