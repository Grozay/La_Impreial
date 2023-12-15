import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Pagination from './Pagination';
import '../../css/Product/Products.css';

const ProductList = ({ products, addCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const productsList = currentProducts.map(product => (
    <ProductItem key={product.id} product={product} addCart={addCart} />
  ));

  const paginate = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <div className="product-container">
        {productsList}
      </div>
      <div className='Pagination'>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ProductList;