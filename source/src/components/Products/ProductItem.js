//item
// import { useNavigate } from "react-router-dom";


function ProductItem({ product }) {

    return (
        <div >

            <div>
                <div> <img src={product.image[0]} width="10%" alt="img" /></div>
                <h3>{product.name}</h3>
                <p>{product.price}$</p>
                <p>quantity:{product.quantity}</p>
            </div>
        </div>
    );
}
export default ProductItem;