//item
import { useNavigate } from "react-router-dom";


function ProductItem({ product }) {

    return (
        <div >

            <div>
                <h3>{product.name}</h3>
                <p>{product.price}$</p>
                <p>{product.quantity}</p>
                <img src={"../assets/" + product.image[0]} />

            </div>
        </div>
    );
}
export default ProductItem;