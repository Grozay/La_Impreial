import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/Product/ProdutDetail.css';
import { useNavigate, } from "react-router-dom";

const CompareProductsPage = ({ productDentail, addCart }) => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [currentComparisonIndex, setCurrentComparisonIndex] = useState(0);
  const queryString = localStorage.getItem('compareQueryString');
  const detail = useNavigate();
  const topRef = React.createRef();
  useEffect(() => {
    const selected = productDentail.find(product => product.id === parseInt(id));
    setSelectedProduct(selected);
    const similar = productDentail.filter(product => product.type === selected?.type && product.id !== parseInt(id));
    setSimilarProducts(similar);

  }, [id, productDentail]);
  useEffect(() => {
    if (queryString) {
      const selectedByQueryString = similarProducts.find((product) => product.id === parseInt(queryString));
      if (selectedByQueryString) {
        const newIndex = similarProducts.findIndex((product) => product.id === parseInt(queryString));
        setCurrentComparisonIndex(newIndex);
      }
    }
  }, [queryString, similarProducts]);
  const handleNext = () => {
    setCurrentComparisonIndex(prevIndex => (prevIndex + 1) % similarProducts.length);
  };

  const trimName = (name) => {
    const maxLength = 45;
    return name.length > maxLength ? name.slice(0, maxLength) + '...' : name;
  };

  if (!selectedProduct) {
    return <p>Loading...</p>;
  }
  const findDescriptionDifference = (desc1, desc2) => {
    const diff = {};
    for (const key in desc1) {
      if (!desc2[key]) {
        diff[key] = desc1[key];
      }
    }
    for (const key in desc2) {
      if (!desc1[key]) {
        diff[key] = desc2[key];
      }
    }

    return diff;
  };
  const getDescriptionDifference = () => {
    const selectedDescription = selectedProduct.description[0];
    const similarDescription = similarProducts[currentComparisonIndex]?.description[0];

    return findDescriptionDifference(selectedDescription, similarDescription);
  };
  const handleBack = () => {
    const newIndex = (currentComparisonIndex - 1 + similarProducts.length) % similarProducts.length;
    setCurrentComparisonIndex(newIndex);
  };
  const handleUpcomingProductClick = (productId) => {
    // Find the index of the clicked upcoming product in the similarProducts array
    const newIndex = similarProducts.findIndex((product) => product.id === productId);

    // Đặt currentComparisonIndex thành chỉ số mới
    setCurrentComparisonIndex(newIndex);

    // Cuộn lên đầu trang
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const trimProductName = (name) => (name.length > 30 ? `${name.slice(0, 30)}...` : name);
  return (
    <div>
      <div ref={topRef}><div className="compare-products-container">
        <div className="selected-product">
          <img onClick={() => detail(`/products/${selectedProduct.id}`)} height="150px" src={`../${selectedProduct.image[0]}`} alt={`${selectedProduct.name} 1`} />
          <h3>{trimName(selectedProduct.name)}</h3>
          <p className={`price ${selectedProduct.price < similarProducts[currentComparisonIndex]?.price ? 'green' : 'red'}`}>
            Price: ${selectedProduct.price}</p>
          <button onClick={() => addCart(selectedProduct, 1)}>AddCart</button>
          <p>Brand: {selectedProduct.brand}</p>
          <h4 className='Description'>Description:</h4>
          <ul className='Description'>
            {Object.entries(selectedProduct.description[0]).map(([key, value]) => (
              <li key={key} className={getDescriptionDifference()[key] ? 'different-description' : ''}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="similar-products">
          <div className="similar-product">
            <img onClick={() => detail(`/products/${similarProducts[currentComparisonIndex].id}`)} height="150px" src={`../${similarProducts[currentComparisonIndex]?.image[0]}`} alt={`${similarProducts[currentComparisonIndex]?.name} 1`} />
            <h3>{trimName(similarProducts[currentComparisonIndex]?.name)}</h3>
            <p className={`price ${similarProducts[currentComparisonIndex]?.price < selectedProduct.price ? 'green' : 'red'}`}>
              Price: ${similarProducts[currentComparisonIndex]?.price}</p>
            <button onClick={() => addCart(similarProducts[currentComparisonIndex], 1)}>AddCart</button>
            <p>Brand: {similarProducts[currentComparisonIndex]?.brand}</p>
            <h4 className='Description'>Description:</h4>
            <ul className='Description'>
              {Object.entries(similarProducts[currentComparisonIndex]?.description[0]).map(([key, value]) => (
                <li key={key} className={getDescriptionDifference()[key] ? 'different-description' : ''}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className='nextbutton' onClick={handleNext} disabled={similarProducts.length <= 1}>Next</button>
        <button className="backbutton" disabled={currentComparisonIndex === 0} onClick={handleBack}>
          Back
        </button>

      </div>
        <div className="upcoming-comparisons">
          {similarProducts.length > 1 && (
            <div className="upcoming-products-container">
              {/* Map over the upcoming set of similar products */}
              {similarProducts.slice(1).map((product, index) => (
                <div key={index} className="upcoming-product">
                  <div className="product-frame">
                    {/* Only display the image for each upcoming product */}
                    <img
                      onClick={() => handleUpcomingProductClick(product.id)}
                      height="150px"
                      src={`../${product.image[0]}`}
                      alt={`${product.name} 1`}
                    />
                    <p>{trimProductName(product.name)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div></div>
    </div>
  );
};

export default CompareProductsPage;