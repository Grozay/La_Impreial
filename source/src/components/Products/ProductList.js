//list
import ProductItem from "./ProductItem"
import '../../css/Product/Products.css';
function ProductList({ products, addCart }) {
    return (<div>
        <h3>Product List</h3>
        <div className="product-container">
            {products.map(pro => (
                <ProductItem key={pro.id} product={pro} addCart={addCart} />
            ))}
        </div>
    </div>
    )
}
export default ProductList;