//item
import { useNavigate } from "react-router-dom";


function ProductItem({ product }) {
   
    return (
        <div >

            <div>
                <h3>{product.name}</h3>
                <p>{product.id}</p>
                <p>{product.brand}</p>
                <p>{product.type}</p>
                <p>${product.price}</p>
                <p>{product.quantity}</p>
                {/* <p>{product.description}</p> */}
            </div>



            
        </div>

    );
}
export default ProductItem;