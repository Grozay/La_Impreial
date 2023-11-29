import '../../css/Product/Products.css';

function ProductItem({ product, addCart }) {
    const truncatedName = product.name.length > 10 ? product.name.slice(0, 50) + '...' : product.name;

    return (
        <div className="product">
            <img className="img" src={product.image[0]} alt="img" />
            <div className="product-details">
                <h3 className="name">{truncatedName}</h3>
                <p className="price">{product.price}$</p>
                <button onClick={() => addCart(product)}>AddCart</button>

                {/* <p className="quantity">Quantity: {product.quantity}</p> */}
            </div>
        </div>
    );
}

export default ProductItem;