//list
import ProductItem from "./ProductItem"
function ProductList({ products }) {
    return (
        <div>
            <h3>Product List</h3>
            {products.map(pro => (
                <ProductItem key={pro.id} product={pro} />
            ))}
        </div>
    )
}
export default ProductList;