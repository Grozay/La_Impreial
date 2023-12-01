import { useParams } from "react-router-dom";
import React, { useState } from "react";
import '../../css/Product/ProdutDetail.css';
function ProductDentail({ productDentail }) {
  const { id } = useParams();
  const product = productDentail[id - 1];
  const [selectedImage, setSelectedImage] =  useState(`../${product.image[0]}`);
  
  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(`../${imageUrl}`);
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
          <button>AddCart</button>
          <h3>Description:</h3>
          <ul>
            {Object.entries(product.description[0]).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
              
            ))}
            <button>Compare with other products</button>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductDentail;