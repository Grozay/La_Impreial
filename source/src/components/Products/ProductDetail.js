import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import '../../css/Product/ProdutDetail.css';
import { useNavigate } from "react-router-dom";
function ProductDentail({ productDentail, addCart }) {
  const { id } = useParams();
  const product = productDentail[id - 1];
  const [selectedImage, setSelectedImage] = useState(`../${product.image[0]}`);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(`../${imageUrl}`);
  };

  const similarProducts = productDentail.filter(item => item.type === product.type && item.id != product.id);
  const handleImageClick = (productId, similarProductId) => {

    const queryString = `${similarProductId}`;
    navigate(`/compare/${productId}`);
    localStorage.setItem('compareQueryString', queryString);
  };
  return (
    <div className="product-detail-container">
      <h2 className="product-name">{product.name}</h2>
      <div className="detailproduct">
        <div className="selected-image-container">
          <img src={selectedImage} alt="Selected" className="selected-image" />
          <div className="thumbnail-container">
            {product.image.map((imageUrl) => (
              <img
                key={imageUrl}
                src={`../${imageUrl}`}
                alt={`img`}
                className="thumbnail"
                onClick={() => handleThumbnailClick(`../${imageUrl}`)}
              />
            ))}
          </div>
        </div>

        <div className="details-container">
          <p>Quantity: {product.quantity}</p>
          <p>Price: ${product.price}</p>
           <button onClick={() => addCart(product, quantity)}>AddCart</button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <h3>Description:</h3>
          <ul>
            {Object.entries(product.description[0]).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
          <button className="link-button">
              <Link to={`/compare/${product.id}`} style={{ textDecoration: 'none' }}>Compare with other products</Link>
            </button>
          <div className="custom-similar-products-container">
  <div className="custom-similar-products">
    {similarProducts.map(similarProduct => (
      <div key={similarProduct.id} className="custom-similar-product">
        <img
      src={`../${similarProduct.image[0]}`}
      alt={`Similar ${similarProduct.name}`} 
      onClick={() => handleImageClick(product.id, similarProduct.id)}
    />
    <p className="custom-similar-product-name">{similarProduct.name}</p>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
     
    </div>
  );
}

export default ProductDentail;