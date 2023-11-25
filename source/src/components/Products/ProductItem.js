//item
import { useNavigate } from "react-router-dom";


function ProductItem({ product }) {

    return (
        <div >

            <div>
                <h3>{product.name}</h3>
                <p>{product.price}$</p>
                <p>quantity:{product.quantity}</p>
                <img src={product.image[0]} width="100px" />

            </div>
        </div>
    );
}
export default ProductItem;